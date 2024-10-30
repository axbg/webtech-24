// Rescrieți exercițiul din capitolul de callbacks folosind promise-uri

const getPlacesNames = () => {
  const places = ['FROG', 'Camera din Față', 'Matei', 'Carrefour'];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(places);
    }, 1000)
  });
};

const getPlacesTypes = (places) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(places.map(place => ({ name: place, isCoffeeShop: place.length % 2 === 0 })))
    }, 1000)
  });
}

const printPlacesInfo = (placesWithTypes) => {
  placesWithTypes.forEach(place => console.log(place));
};

getPlacesNames()
  .then(places => getPlacesTypes(places))
  .then(placesWithTypes => printPlacesInfo(placesWithTypes))
  .catch(err => console.log("An eror has occurred: " + err));
