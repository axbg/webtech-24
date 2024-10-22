const giveRaises = (currentSalaries, raise) => {
  /* funcția primește un array de salarii și acordă măriri procentuale fiecăruia
  trebuie să arunce o excepție dacă 
      - primul parametru nu este un array
      - al doilea parametru nu este un număr mai mare decât zero
      - dacă oricare dintre salariile primite ca parametru este mai mic sau egal cu zero
  să se logheze salariile după ce măririle sunt aplicate
  */

  if (!Array.isArray(currentSalaries)) {
    throw new Error("currentSalaries should be an array");
  }

  if (typeof raise !== "number" || raise <= 0) {
    throw new Error("raise should be a number bigger than 0")
  }

  if (currentSalaries.some(x => typeof x !== "number" || x <= 0)) {
    throw new Error("all salaries should be positive numbers")
  }

  currentSalaries = currentSalaries.map(salary => salary * (1 + raise / 100));
  console.log(currentSalaries);
}

try {
  giveRaises([500, 1000, 750], 10) // should pass
  giveRaises(75, 10) // should throw error
  giveRaises([500, 1000, 'coffee'], 10) // should throw error
  giveRaises([500, 1000, 750], 'a small loan of a million dollars') // should throw error
} catch (error) {
  console.warn(error)
}
