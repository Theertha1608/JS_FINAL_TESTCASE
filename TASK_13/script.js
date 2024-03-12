let books = [
    { title: "AduJeevitham", author: "Benyamin", price: 10 },
    { title: "Ram c/o Anandhi", author: "Akhil P Dharmajan", price: 15 },
    { title: "Randamoozham", author: "M T Vaasudhevan Nair", price: 20 },
    { title: "Balyakalasakhi", author: "Muhammad Bahseer", price: 20 }
];

function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    books.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `<strong>${book.title}</strong> <br> ${book.author} <br> Price: ${book.price}`;
        bookList.appendChild(bookElement);
    });
}

function addBook() {
    const title = document.getElementById("titleInput").value;
    if (title) {
        books.push({ title });
        displayBooks();
    } else {
        alert("Please enter a valid title.");
    }
}

function searchBook() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const searchResults = books.filter(book => book.title.toLowerCase().includes(searchQuery));

    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = "";
    if (searchResults.length > 0) {
        searchResults.forEach(book => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book");
            bookElement.textContent = `${book.title} by ${book.author}, Price: ${book.price}`;
            searchResultsContainer.appendChild(bookElement);
        });
    } else {
        searchResultsContainer.textContent = "No matching books found.";
    }
}

window.onload = displayBooks;
