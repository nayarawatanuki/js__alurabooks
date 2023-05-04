import { booksAvailableFullPrice } from "../../../base/variables.js";

function showBooksAvailableFullPrice(booksFullPrice) {

    booksAvailableFullPrice.innerHTML = `
        <div class="books__available">
            <p>Todos os livros disponíveis por R$ <span id="value">${booksFullPrice}</span></p>
        </div>
    `
}

export { showBooksAvailableFullPrice }