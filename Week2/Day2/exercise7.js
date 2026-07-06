// --------------------
// 1️⃣ Create the array of book objects
// --------------------

const allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
        alreadyRead: true
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        image: "https://covers.openlibrary.org/b/id/8277896-L.jpg",
        alreadyRead: false
    }
];


// --------------------
// 2️⃣ Select the section
// --------------------

const section = document.querySelector(".listBooks");


// --------------------
// 3️⃣ Render each book
// --------------------

allBooks.forEach(function(book) {

    // Create div for each book
    const bookDiv = document.createElement("div");

    // Create paragraph for title + author
    const details = document.createElement("p");
    details.textContent = `${book.title} written by ${book.author}`;

    // If already read → make text red
    if (book.alreadyRead) {
        details.style.color = "red";
    }

    // Create image
    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";

    // Append elements to div
    bookDiv.appendChild(details);
    bookDiv.appendChild(img);

    // Append div to section
    section.appendChild(bookDiv);
});
