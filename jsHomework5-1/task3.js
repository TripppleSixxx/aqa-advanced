//Завдання 3: Генерація таблиці множення

//Використовуючи цикл for
const number = 7;
let result;

console.log("By using for:");
for (let i = 1; i < 11; i++){
    result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}
console.log(" ");
//Використовуючи цикл while
let i = 1;

console.log("By using while:");
while (i < 11) {
    result = number * i;
    console.log(`${number} x ${i} = ${result}`);
    i++;
}