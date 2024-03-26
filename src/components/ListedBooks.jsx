import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReadBooks from "./ReadBooks";
import { getBooks } from "./Utility/localstorage";
import WishlistBooks from "./WishlistBooks";

const ListedBooks = () => {

    const bookList = useLoaderData();

    const [bookReads, setBookReads] = useState([]);
    const [bookWishlist, setBookWishlist] = useState([]);
    
    useEffect(() => {
        const readBook = getBooks();
        if (bookList.length > 0) {
            const bookRead = [];
            for (const id of readBook) {
                const book = bookList.find(book => book.bookId === id.bookId);
                if (book) {
                    bookRead.push(book)
                }
                setBookReads(bookRead)
            }
        }
    },[bookList])

    useEffect(() =>{
        const wishlistBook = getBooks();
        if(bookList.length > 0) {
            const bookWishlist = [];
            for(const id of wishlistBook){
                const book = bookList.find(book => book.bookId === id.bookId);
                if(book){
                    bookWishlist.push(book)
                }
                setBookWishlist(bookWishlist)
            }
        }
    },[bookList])

    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div>
            {/* head title */}
            <div>
                <h2 className="text-3xl font-bold text-center mt-5 bg-base-200 p-4 rounded-lg">Books</h2>
            </div>

            {/* dropdown */}
            <div className="flex justify-center mt-5 ">
                <details className="dropdown mb-36">
                    <summary className="m-1 btn bg-green-500 text-white hover:bg-green-400">Sort By</summary>
                    <ul className="p-2 space-y-1 shadow menu  dropdown-content z-[1] rounded-box w-52">
                        <li><a className=" border-b border-green-500">Rating</a></li>
                        <li><a className=" border-b border-green-500">Number of Pages</a></li>
                        <li><a className=" border-b border-green-500">published Year</a></li>
                    </ul>
                </details>
            </div>

            {/* tabs */}
            <div>
                <div role="tablist" className="tabs tabs-lifted w-1/4">
                    <Link onClick={() => setTabIndex(0)} role="tab" className={`flex tab cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border font-medium tab-active border-b-0' : 'border-b'}`}>Read Books</Link>
                    <Link onClick={() => setTabIndex(1)} role="tab" className={`flex tab cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border font-medium tab-active border-b-0' : 'border-b'}`}>Wishlist Books</Link>

                </div>
            </div>

            <div className="grid grid-cols-1 gap-3 mt-5">
                {
                    bookReads.map(book => <ReadBooks 
                        key = {book.bookId}
                        book = {book}
                        ></ReadBooks>)
                }
                {
                    bookWishlist.map(book => <WishlistBooks
                        key = {book.bookId}
                        book = {book}
                        ></WishlistBooks>)
                }
            </div>

        </div>



    );
};

export default ListedBooks;