import { showBooks } from "../show/forEach.js";
import { showBooksAvailableFullPrice } from "../show/availableFullPrice.js";

import { filterAvailability } from "./available.js";
import { filterCategory } from "./category.js";
import { booksAvailableFullPrice } from "../availableFullPrice/reduce.js";

function filterBooks(books, category) {

    const filteredBooks = category == "disponíveis" ? filterAvailability(books) : filterCategory(books, category);

    showBooks(filteredBooks);

    if(category == "disponíveis") {

        const booksFullPrice = booksAvailableFullPrice(books);

        showBooksAvailableFullPrice(booksFullPrice);
    }
}

export { filterBooks }