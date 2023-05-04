
const endpointAPI = fetch("https://nayarawatanuki.github.io/js__alurabooks/api/books.json");

const books = [];

const sectionBooks = document.getElementById("books");

const buttonsFilterBooks = document.querySelectorAll(".button");

const buttonSortPrice = document.getElementById("btnSortPrice");

const booksAvailableFullPrice = document.getElementById("booksAvailableFullPrice"); 



export { endpointAPI, books, sectionBooks, buttonsFilterBooks, buttonSortPrice, booksAvailableFullPrice }