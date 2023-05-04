import { books, endpointAPI } from "../../base/variables.js";
import { showBooks } from "./show/forEach.js";
import { applyDiscountBooks } from "./discount/map.js";

async function getBooksAPI() {
    const response = await endpointAPI;
    const booksAPI = await response.json();

    books.push(...applyDiscountBooks(booksAPI));

    // console.log(books);

    console.table(books);
    showBooks(books);

    return books;
    
}

export { getBooksAPI }