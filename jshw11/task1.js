//Завдання 1

function delayedText(text, time) {
  setTimeout(() => {
    console.log(text);
  }, time);
}

delayedText("This text will appear after 2 seconds", 2000);
