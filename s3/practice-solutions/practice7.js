// completează corpul funcției astfel încât să obții un string rezultat din 
// adăugarea token-urilor primite ca parametru în cadrul string-ului primit ca parametru
// in funcție de poziție
const formatString = (string, ...tokens) => {
  return string.split(" ")
    .map(word => word.length === 3 && word.startsWith("{") && word.endsWith("}")
      ? (tokens[word.slice(1, word.length - 1)] || word)
      : word)
    .join(" ");
};

console.log(formatString('this is a {0} string and we\'ve {1} it', 'nice', 'modified'));
// 'this is a nice string and we've modified it'
