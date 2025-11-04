//Завдання 3

function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator не може бути нулем!");
  } else if (isNaN(numerator) || isNaN(denominator)) {
    throw new Error("Numerator та Denominator повинні бути числами!");
  } else return numerator / denominator;
  }

try {
  console.log(divide(10, 2));
} catch (error) {
  console.error(error.message);
} finally {
    console.log("Робота завершена\n");
}

try {
  console.log(divide(8, 0));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена\n");
}

try {
  console.log(divide("8", 2));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена\n");
}

try {
  console.log(divide("x", "y"));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена\n");
}
