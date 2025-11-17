//Завдання 5

const users = [
  {
    name: "Slava",
    email: "test@gmail.com",
    age: 23,
  },
  {
    name: "Sasha",
    email: "tester@gmail.com",
    age: 24,
  },
  {
    name: "Anna",
    email: "testerqa@gmail.com",
    age: 22,
  },
];

for (const user of users) {
  const { name, email, age } = user;
  console.log(`${name} is ${age} years old and has a ${email} email`);
}
