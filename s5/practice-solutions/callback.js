// În fiecare lună în București se deschid restaurante și cafenele noi
// Plecând de la exemplele discutate în timpul seminarului, scrie un program care folosește callbacks 
//      si simulează un comportament asincron
// pentru a prelua informații despre acestea

// funcția getPlacesNames va returna într-un mod asincron array-ul places

// vom considera ulterior, că în cadrul funcției getPlacesTypes se determină
// dacă locul este o cafenea ori un restaurant
// programatic, dacă lungimea numelui locului este pară, atunci este cafenea
// se va adăuga în acest sens un câmp pentru fiecare loc denumit isCoffeeShop (valoare booleană)

// funcția printPlacesInfo va afișa la consolă numele localului și dacă este cafenea sau nu

const getPlacesNames = (callback) => {
  const places = ['FROG', 'Camera din Față', 'Matei', 'Carrefour'];

  setTimeout(() => {
    callback(places);
  }, 1000);
};

const getPlacesTypes = (places, callback) => {
  setTimeout(() => {
    const placesWithTypes = places.map(place => ({ name: place, isCoffeeShop: place.length % 2 === 0 }));
    callback(placesWithTypes);
  }, 1000);
}

const printPlacesInfo = (placesWithTypes) => {
  placesWithTypes.forEach(place => console.log(place));
};

getPlacesNames((places) => {
  getPlacesTypes(places, (placesWithTypes) => {
    printPlacesInfo(placesWithTypes)
  })
})
