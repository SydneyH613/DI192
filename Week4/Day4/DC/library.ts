// Define the Book interface
interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string; // optional
}

// Library class
class Library {
  private books: Book[] = [];

  // Add a book to the library
  public addBook(book: Book): void {
    this.books.push(book);
  }

  // Get book details by ISBN
  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }

  // Protected method to allow subclasses to access books
  protected getAllBooks(): Book[] {
    return this.books;
  }
}

// DigitalLibrary class extending Library
class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  // List all book titles
  public listBooks(): string[] {
    return this.getAllBooks().map(book => book.title);
  }
}

// Example usage:

const myLibrary = new DigitalLibrary("https://www.mydigitallibrary.com");

// Add books
myLibrary.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "9780743273565",
  publishedYear: 1925,
  genre: "Classic"
});

myLibrary.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "9780451524935",
  publishedYear: 1949
});

// Print details of a specific book
const bookDetails = myLibrary.getBookDetails("9780743273565");
console.log("Book Details:", bookDetails);

// Print list of all book titles
console.log("All Book Titles:", myLibrary.listBooks());

// Print the library website
console.log("Library Website:", myLibrary.website);

