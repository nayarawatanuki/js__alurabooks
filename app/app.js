import { books, buttonSortPrice, buttonsFilterBooks } from "./base/variables.js";
import { getBooksAPI, filterBooks, sortBooksByPrice } from "./components/index.js";


getBooksAPI();

buttonsFilterBooks.forEach(btn => btn.addEventListener("click", event => { 
    
    filterBooks(books, event.target.value)
}));

buttonSortPrice.addEventListener("click", sortBooksByPrice);