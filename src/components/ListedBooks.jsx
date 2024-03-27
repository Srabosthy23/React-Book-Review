import { useEffect, useState } from "react";
import { Link, useLoaderData} from "react-router-dom";
import { getReadBooks, getWishlistBooks } from "./Utility/localstorage";
import ReadBooks from "./ReadBooks";
import WishlistBooks from "./WishlistBooks";

const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0)

    const bookRead = useLoaderData();
    const bookList = useLoaderData();

    const [bookReads, setBookReads] = useState([]);
    const [displayReadBooks, setDisplayReadBooks] = useState([]);

    const [bookWishlist, setBookWishList] = useState([]);
    const [displayWishlistBooks, setDisplayWishlistBooks] = useState([])


    // get data from readbooks
    useEffect(() => {
        const readBook = getReadBooks();
        console.log(readBook)
        if (bookRead.length > 0) {
            const bookRead = [];
            for (const id of readBook) {
                const book = bookRead.find(book => book.bookId === id.bookId);
                if (book) {
                    bookRead.push(book)
                }
                setBookReads(readBook)
                setDisplayReadBooks(readBook)
            }
        }
    }, [bookRead])

     // get data from wishlistbooks
     useEffect(() => {
        const wishlistBook = getWishlistBooks();
        console.log(wishlistBook)
        if (bookList.length > 0) {
            const bookWishlist = [];
            for (const id of wishlistBook) {
                const book = bookList.find(book => book.bookId === id.bookId);
                if (book) {
                    bookWishlist.push(book)
                }
                setBookWishList(wishlistBook)
                setDisplayWishlistBooks(wishlistBook)
            }
        }
    }, [bookList])

    // filter for readbooks
    const handleReadBooksFilter = filter => {
        let sortedBooks = [];
        switch (filter) {
            case 'rating':
                sortedBooks = [...bookReads].sort((a, b) => b.rating - a.rating);
                console.log(sortedBooks)
                break;
            case 'pages':
                sortedBooks = [...bookReads].sort((a, b) => b.totalPages - a.totalPages);
                break;
            case 'publishedyear':
                sortedBooks = [...bookReads].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                break;
            default:
                sortedBooks = [...bookReads];
                break;
        }
        setDisplayReadBooks(sortedBooks);
    }

    // Filter for wishlist books
    const handleWishlistBooksFilter = filter => {
        let sortedBooks = [];
        switch (filter) {
            case 'rating':
                sortedBooks = [...bookWishlist].sort((a, b) => b.rating - a.rating);
                break;
            case 'pages':
                sortedBooks = [...bookWishlist].sort((a, b) => b.totalPages - a.totalPages);
                break;
            case 'publishedyear':
                sortedBooks = [...bookWishlist].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                break;
            default:
                sortedBooks = [...bookWishlist];
                break;
        }
        setDisplayWishlistBooks(sortedBooks);
    }


    return (
        <div>
            {/* head title */}
            <div>
                <h2 className="text-3xl font-bold text-center mt-5 bg-base-200 p-4 rounded-lg">Books</h2>
            </div>

            {/* dropdown*/}
            <div className="flex justify-center mt-5 ">
                <details className="dropdown mb-36">
                    <summary className="m-1 btn bg-green-500 text-white hover:bg-green-400">Sort By</summary>
                    <ul className="p-2 space-y-1 shadow menu  dropdown-content z-[1] rounded-box w-52">
                        <li onClick={() => {handleReadBooksFilter('rating'); handleWishlistBooksFilter('rating');}}><a className=" border-b border-green-500">Rating</a></li>
                        <li onClick={() => {handleReadBooksFilter('pages'); handleWishlistBooksFilter('pages');}}><a className=" border-b border-green-500">Number of Pages</a></li>
                        <li onClick={() => {handleReadBooksFilter('publishedyear'); handleWishlistBooksFilter('publishedyear');}}><a className=" border-b border-green-500">published Year</a></li>
                    </ul>
                </details>
            </div>

            {/* tabs */}
            <div>
                <div role="tablist" className="tabs tabs-lifted lg:w-1/4">
                    <Link to={``} onClick={() => setTabIndex(0)} role="tab" className={`flex tab cursor-pointer items-center  px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border font-medium tab-active border-b-0' : 'border-b'}`}>Read Books</Link>
                    <Link to={`wishlistbook`} onClick={() => setTabIndex(1)} role="tab" className={`flex tab cursor-pointer items-center px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border font-medium tab-active border-b-0' : 'border-b'}`}>Wishlist Books</Link>

                </div>
            </div>

            {tabIndex === 0 ? <ReadBooks books={displayReadBooks} /> : <WishlistBooks books={displayWishlistBooks} />}

            {/* <ReadBooks books={displayReadBooks} />
            <WishlistBooks books={displayWishlistBooks}></WishlistBooks> */}
            
           
        </div>
    );
};

export default ListedBooks;