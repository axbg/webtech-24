/**
 completează corpul funcției astfel încât să cenzurezi cuvintele din lista censoredWords care apar în 
 string-ul phrase
 exemplu: javascript is w*******l
 */
const censor = (phrase, censoredWords) => {
  return phrase.split(" ").map(word => censoredWords.includes(word) ? word[0] + "*".repeat(word.length - 2) + word[word.length - 1] : word)
    .join(" ");
};

console.log(censor('javascript is wonderful', ['wonderful']));
