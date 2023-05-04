import { booksAvailableFullPrice, sectionBooks } from "../../../base/variables.js";
// import { checkBookAvailability } from "../checkAvailability.js";

function showBooks(listBooks) {
    sectionBooks.innerHTML = "";
    booksAvailableFullPrice.innerHTML = "";
    
    listBooks.forEach(book => {

        // let availability = checkBookAvailability(book);
        let availability = book.quantity > 0 ? "book__img" : "book__img unavailable";

        sectionBooks.innerHTML += `
            <figure class="book">
                <img src="${book.image}" alt="${book.alt}" class="${availability}">
                <figcaption>

                    <h2 class="book__title">${book.title}</h2>
                    <p class="book__author">${book.author}</p>
                    <p class="book__price" id="price">R$ ${book.price.toFixed(2)}</p>
                </figcaption>

                <div class="tags">
                    <span class="tag">${book.category}</span>
                </div>
            </figure>
        `
    });
}

export { showBooks }