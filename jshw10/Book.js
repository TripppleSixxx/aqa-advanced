//Завдання 1

export class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this.classTitle;
  }

  get author() {
    return this.classAuthor;
  }

  get year() {
    return this.classYear;
  }

  set title(value) {
    if (value && value.length > 0) {
      this.classTitle = value;
    } else {
      console.log("Title cannot be empty!");
    }
  }

  set author(value) {
    if (value && value.length > 0) {
      this.classAuthor = value;
    } else {
      console.log("Author cannot be empty!");
    }
  }

  set year(value) {
    if (value == 0) {
      console.log("Invalid year.");
      return this.classYear = "Unknown";
    } 
    this.classYear = value;
  }

  printInfo() {
    console.log(
      `Here is the full info of your book:\n Title: ${this.title};\n Author: ${this.author};\n Year: ${this.year}.\n`
    );
  }
}

const book1 = new Book("New horizon", "Jack Brown", 0);
const book2 = new Book("My plague", "Timmy Sweet", 1980);

book1.printInfo();
book2.printInfo();
