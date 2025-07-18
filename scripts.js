let library = [];

function addBook(book) {
    library.push(book)
}

addBook({
    title: "The Hobbit",
    author: "JRR Tolkien",
    year: 1954,
    borrowed: false
})
addBook({
    title: "1984",
    author: "JRR Tolkien",
    year: 1954,
    borrowed: true
})
addBook({
    title: "Naruto",
    author: "Kishimoto",
    year: 2002,
    borrowed: false
})

function getAvailableBooks() {
    console.log('Les livres disponibles sont :');
    document.getElementById("availableBooks").innerHTML = '';
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        if (book.borrowed === false) {
            console.log(book.title);
            document.getElementById("availableBooks").innerHTML += `
                <li>
                    ${book.title}
                    <button onclick="borrowBook(${i})">Emprunter</button>
                </li>
            `;
        }
    }
}

function getUnavailableBooks() {
    console.log('Les livres indisponibles sont :');
    document.getElementById("unavailableBooks").innerHTML = '';
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        if (book.borrowed === true) {
            console.log(book.title);
            document.getElementById("unavailableBooks").innerHTML += `
                <li>
                    ${book.title}
                    <button onclick="returnBook(${i})">Retourner</button>
                </li>
            `;
        }
    }
}

function searchByTitle(title) {
    document.getElementById("searchResultTitle").innerText = '';
    for (let i = 0; i < library.length; i++) {
        const book = library[i]
        if (book.title.toLowerCase().trim() == title.toLowerCase().trim()) {
            console.log(book.title);
            document.getElementById("searchResultTitle").innerText = `Livre trouvé : ${book.title}`;
            return;
        }
    }
    document.getElementById("searchResultTitle").innerText = "Aucun livre trouvé.";
}

function searchByYear(year) {
    document.getElementById("searchResultYear").innerText = '';
    for (let i = 0; i < library.length; i++) {
        const book = library[i]
        if (book.year == year) {
            console.log(book.year);
            document.getElementById("searchResultYear").innerText = `Livre trouvé pour l'année ${book.year} : ${book.title}`;
            return;
        }
    }
    document.getElementById("searchResultYear").innerText = "Aucun livre trouvé.";
}

function searchByAuthor(author) {
    document.getElementById("searchResultAuthor").innerText = '';
    for (let i = 0; i < library.length; i++) {
        const book = library[i]
        if (book.author.toLowerCase().trim() == author.toLowerCase().trim()) {
            console.log(book.author);
            document.getElementById("searchResultAuthor").innerText = `Livre trouvé pour l'auteur ${book.author} : ${book.title}`;
            return;
        }
    }
    document.getElementById("searchResultAuthor").innerText = "Aucun livre trouvé.";
}

function displayBooks() {
    getAvailableBooks();
    getUnavailableBooks();
}

function borrowBook(bookIndex) {
    library[bookIndex].borrowed = true;
    displayBooks()
}

function returnBook(bookIndex) {
    library[bookIndex].borrowed = false;
    displayBooks()
}

displayBooks()