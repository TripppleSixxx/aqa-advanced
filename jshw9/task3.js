//Завдання 3

const car1 = {
  brand: "Tesla",
  model: "Model S",
  year: 2010,
};

const car2 = {
  brand: "Audi",
  model: "A8",
  owner: 5,
};

const car3 = {...car1, ...car2};

console.log(car3);