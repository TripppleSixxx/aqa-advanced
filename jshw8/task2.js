//Завдання 2: Копіювання з мутацією

const numbers = [1, 2, 3, 4, 5];
const copyNumbers = numbers.map((number, index) => number * index);
console.log(copyNumbers);
