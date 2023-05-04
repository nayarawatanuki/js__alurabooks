function checkBookAvailability(book) {

    if(book.quantity > 0) {

        return "book__img";
    } else {

        return "book__img unavailable";
    }
}

export { checkBookAvailability }