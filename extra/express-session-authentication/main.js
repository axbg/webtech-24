import express from 'express';
import session from 'express-session';
import bcrypt from 'bcrypt';

const app = express();

app.use(express.json());
// configurarea sesiunii si a cookie-ului utilizat pentru stocarea cheii de sesiune
// mai multe detalii aici: https://github.com/expressjs/session
app.use(session({
    secret: "something very secret",
    resave: false,
    saveUnititialized: false,
    cookie: {
        maxAge: 3600000
    }
}));

// citeste mai multe despre hashing: https://auth0.com/blog/hashing-passwords-one-way-road-to-security/
// si despre salt': https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/
const users = [{ username: "john", password: bcrypt.hashSync("secretPassword", 10) }];

const authMiddleware = (req, res, next) => {
    if (!!req.session.user) {
        // daca o sesiune este prezenta, permite continuarea apelului
        next();
    } else {
        // altfel, nu permite apelul
        return res.status(401).send({ message: "unauthenticated" });
    }
}

app.post("/login", (req, res) => {
    if (!req.body || !req.body.username || !req.body.password) {
        return res.status(400).send({ message: "missing username or password" });
    }

    const userFound = users.filter(user => user.username === req.body.username).some(user => bcrypt.compare(req.body.password, user.password));

    if (userFound) {
        req.session.user = req.body.username;
        return res.send({ message: "logged in" });
    } else {
        return res.status(401).send({ message: "invalid credentials" });
    }
});

// de asemenea poti defini un endpoint "register" care sa permita adaugarea mai multor utilizatori

app.get("/unprotected", (req, res) => {
    return res.send({ message: "this is an unprotected route" });
});

// inainte de executarea controllerului propriu-zis, este executat authMiddleware ce poate decide daca request-ul este permis sau nu
app.get("/protected", authMiddleware, (req, res) => {
    return res.send({ message: "hello " + req.session.user });
});

app.listen(8080, () => console.log("App started on http://localhost:8080"));