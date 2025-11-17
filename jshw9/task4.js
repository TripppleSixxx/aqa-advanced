//Завдання 4

const person = {
  firstName: "Slava",
  lastName: "Borysenko",
  age: null,
};

person.email = "test@gmail.com";
delete person.age;

console.log(person);