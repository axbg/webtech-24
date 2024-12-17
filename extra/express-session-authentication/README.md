# express session-based authentication

- implementarea este realizată doar în fișierul [main.js](./main.js) pentru a simplifica procesul - într-un proiect robust structura discutată la seminar trebuie respectată!

- pentru a testa implementarea, importă fișierul [auth.postman_collection.json](auth.postman_collection.json) în Postman și apelează, pe rând, următoarele endpoint-uri observând comportamentul aplicației:
    - unprotected
    - protected
    - login
    - protected

- cheia de sesiune va fi returnată de către server într-un cookie ce va fi retrimis automat de către Postman (și, în practică, de către browser) cu fiecare request făcut către același domeniu
