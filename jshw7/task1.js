//Завдання 1

function handleNum(number, handleEvenCB, handleOddCb) {
  if (number % 2 === 0) {
    handleEvenCB();
  } else handleOddCb();
}
function handleEven() {
  console.log("Number is even");
}
function handleOdd() {
  console.log("Number is odd");
}

handleNum(1, handleEven, handleOdd);
