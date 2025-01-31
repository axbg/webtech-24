/* Muzeul a fost renovat, așa că trebuie să organizăm lucrările de artă!
Definește o clasă Artwork cu proprietățile author și year
Clasa Artwork trebuie să aibă metodele 
    - getArtworkDetails - printează informațiile despre artwork (year - author)
    - sellArtwork - primește numele unui cumpărător și printează un mesaj de confirmare a vânzării

Definește o clasă Painting care să extindă clasa Artwork
Clasa Painting trebuie să aibă o proprietate în plus: type (landscape, portrait, etc)
Clasa Painting trebuie să aibă metodele
    - getArtworkDetails - printează toate informațiile despre artwork (year - author - type)
    - sellArtwork - primește numele unui cumpărător, dar trebuie să printeze faptul că tablourile nu sunt de vânzare
*/

class Artwork {
  #author;
  #year;

  constructor(author, year) {
    this.#author = author;
    this.#year = year;
  }

  getArtworkDetails() {
    console.log(`${this.#year} - ${this.#author}`)
  }

  sellArtwork(buyer) {
    console.log(`Selling picture by ${this.#author} painted in ${this.#year}to ${buyer}`)
  }
}

const art = new Artwork("Van Gogh", 1741);
art.getArtworkDetails();
