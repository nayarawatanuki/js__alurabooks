function filterAvailability(books) {
    return books.filter(book => book.quantity > 0);
}

export { filterAvailability }