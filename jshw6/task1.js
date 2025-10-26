//Завдання 1
//Function declaration
function findArea(width, height) {
  const sum = width * height;
  return sum;
}
console.log("Realization by Function declaration: " + findArea(5, 10));

//Function expression
let rectangleArea = function (width, height) {
  const sum = width * height;
  return sum;
};
console.log("Realization by Function expression: " + rectangleArea(5, 10));

//Arrow function
let otherRectangleArea = (width, height) => width * height;
console.log("Realization by Arrow function: " + otherRectangleArea(5, 10));
