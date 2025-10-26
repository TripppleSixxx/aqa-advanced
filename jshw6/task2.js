//Завдання 2
function isAdult(age) {
  let status = age >= 18 ? true : false;
  return status;
}

let maleAge = isAdult(25);
console.log("Is it an adult male? " + maleAge);
let femaleAge = isAdult(15);
console.log("Is it an adult female? " + femaleAge);