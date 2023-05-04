
function applyDiscountBooks(books) {

    const discount = 0.3;
    const discountBooks = books.map(book => {
        return {...book, price: book.price - (book.price * discount)};
    })

    return discountBooks;
}


export { applyDiscountBooks }