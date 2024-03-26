import { useState } from "react";
import { Link, Outlet} from "react-router-dom";


const ListedBooks = () => {

    // const bookList = useLoaderData();
    // console.log(bookList)

    // const [bookReads, setBookReads] = useState([]);

    // useEffect(() => {
    //     const readBook = getBooks();
    //     if (bookList.length > 0) {
    //         const bookRead = [];
    //         for (const id of readBook) {
    //             const book = bookList.find(book => book.bookId === id.bookId);
    //             if (book) {
    //                 bookRead.push(book)
    //             }
    //             setBookReads(bookRead)
    //         }
    //     }
    // }, [bookList])

    // const singleBook = bookList.map(book => book.bookId)
    // console.log(singleBook)

    // let navigate = useNavigate();
    // const handleViewList = () => {
    //     let path = `/bookcard/${singleBook}`;
    //     navigate(path);
    // }

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
                <div role="tablist" className="tabs tabs-lifted lg:w-1/4">
                    <Link to={``} onClick={() => setTabIndex(0)} role="tab" className={`flex tab cursor-pointer items-center  px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border font-medium tab-active border-b-0' : 'border-b'}`}>Read Books</Link>
                    <Link to={`wishlistbook`} onClick={() => setTabIndex(1)} role="tab" className={`flex tab cursor-pointer items-center px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border font-medium tab-active border-b-0' : 'border-b'}`}>Wishlist Books</Link>

                </div>
            </div>
            {/* map */}
            
            <Outlet></Outlet>    
        </div>
    );
};

export default ListedBooks;