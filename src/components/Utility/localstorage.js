import toast from 'react-hot-toast';

// getBooks 
export const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books;
}


// saveBooks (for read button)
export const saveBooks = (book) => {
    let books = getBooks();
    const isExist = books.find(b => b.bookId === book.bookId)

    if (isExist) {
        return toast.error("You Have Already Read This Book")
    }
    books.push(book)
    localStorage.setItem("books", JSON.stringify(books))
    toast.success('Books added to Read List')

}

// savebooks2 (for wishlist button)
export const saveBooks2 = (book) => {
    let books = getBooks();
    const isExist = books.find(b => b.bookId === book.bookId)
    if (isExist) {
        return toast.error("You Have Already Read This Book")
    }

    books.push(book)
    localStorage.setItem("books", JSON.stringify(books))
    toast.success('Books added to WishList')

}

// removeItem
// export const removeBook = (bookId) => {
//     console.log(bookId)
//     let books = getBooks();
//     const remaining = books.filter(b => b.bookId !== bookId)
//     localStorage.setItem('books', JSON.stringify(remaining))
// }