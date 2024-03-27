import toast from 'react-hot-toast';

// getReadBooks
export const getReadBooks = () => {
    let readBooks = [];
    const storedReadBooks = localStorage.getItem('readBooks');
    if (storedReadBooks) {
        readBooks = JSON.parse(storedReadBooks);
    }
    return readBooks;
}

// getWishlistBooks
export const getWishlistBooks = () => {
    let wishlistBooks = [];
    const storedWishlistBooks = localStorage.getItem('wishlistBooks');
    if (storedWishlistBooks) {
        wishlistBooks = JSON.parse(storedWishlistBooks);
    }
    return wishlistBooks;
}

// saveReadBooks (for read button)
export const saveReadBooks = (book) => {
    let readBooks = getReadBooks();
    const isExist = readBooks.find(b => b.bookId === book.bookId);

    if (isExist) {
        return toast.error("You Have Already Read This Book");
    }

    readBooks.push(book);
    localStorage.setItem("readBooks", JSON.stringify(readBooks));
    // console.log(readBooks)
    toast.success('Book added to Read List');
}

// saveWishlistBooks (for wishlist button)
export const saveWishlistBooks = (book) => {
    let readBooks = getReadBooks();
    let wishlistBooks = getWishlistBooks();

    const isExistInRead = readBooks.find(b => b.bookId === book.bookId);
    const isExistInWishlist = wishlistBooks.find(b => b.bookId === book.bookId);

    if (isExistInRead) {
        return toast.error("You Have Already Read This Book");
    }

    if (isExistInWishlist) {
        return toast.error("You Have Already Added This Book to Wishlist");
    }

    wishlistBooks.push(book);
    localStorage.setItem("wishlistBooks", JSON.stringify(wishlistBooks));
    toast.success('Book added to Wishlist');
}

