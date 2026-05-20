task4.js
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  info() {
    return `${this.title} — ${this.author} (${this.year})`;
  }
}

class EBook extends Book {
  constructor(title, author, year, fileSize) {
    super(title, author, year);
    this.fileSize = fileSize;
  }

  info() {
    return `${super.info()}, ${this.fileSize} MB`;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findByAuthor(author) {
    return this.books.filter(b => b.author === author);
  }

  getNewest() {
    return this.books.reduce((a, b) => (b.year > a.year ? b : a));
  }
}

// тест
const lib = new Library();

lib.addBook(new Book("Кобзар", "Шевченко", 1840));
lib.addBook(new EBook("JS Guide", "MDN", 2024, 15));
lib.addBook(new Book("Тіні забутих предків", "Коцюбинський", 1911));

console.log(lib.findByAuthor("Шевченко"));
console.log(lib.getNewest().info());
