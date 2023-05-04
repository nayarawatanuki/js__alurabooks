import { books } from "../../base/variables.js";
import { showBooks } from "./show/forEach.js";

function sortBooksByPrice() {
    let orderedBooks = books.sort((a, b) => a.price - b.price);
    showBooks(orderedBooks);
}

export { sortBooksByPrice }