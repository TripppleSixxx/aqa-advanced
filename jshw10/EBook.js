import { Book } from './Book.js';

class EBook extends Book {
    constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

  get format() {
    return this.classFormat;
  }

  set format(value) {
    if (typeof value ==='string' && value.length >= 1) {
      this.classFormat = value;
    } else {
      console.log("Invalid format!");
      this.classFormat = "Unknown";
    }
  }

  printInfo() {
    console.log(
      `Here is the full info of your book:\n Title: ${this.title};\n Author: ${this.author};\n Year: ${this.year}.\n Format: ${this.classFormat}.\n`
    );
  }
}

const eBook = new EBook("Old horizon", "Jack Gray", 1991, true);

eBook.printInfo();