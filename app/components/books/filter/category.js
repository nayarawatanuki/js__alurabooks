function filterCategory(books, category) {
    return books.filter(book => book.category == category);
}

export { filterCategory }