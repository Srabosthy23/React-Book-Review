import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBooks, saveWishlistBooks } from "./Utility/localstorage";
// import toast from 'react-hot-toast';

const BookDetails = () => {

    const books = useLoaderData();

    const { bookId } = useParams();
    const intId = parseInt(bookId)
    const book = books.find(book => book.bookId === intId)

    // handle read button
    const handleRead = (book) => {
        saveReadBooks(book)
        
    }
    // handle wishlist button
    const handleWishlist = (book) => {
        saveWishlistBooks(book)
    }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 mb-10">
                <div className="flex flex-grow">
                    <img className="h-[530px] shadow-lg p-20 bg-base-200" src={book.image} alt="" />
                </div>
                <div className="space-y-3 lg:col-span-2">
                    <h2 className="text-3xl font-bold">{book.bookName}</h2>
                    <p className="font-semibold">By: {book.author}</p>
                    <p>{book.category}</p>
                    <hr />
                    <p><span className="font-bold">review:</span> {book.review}</p>
                    <p><span className='font-bold mr-4'>Tags:</span>{book.tags &&
                        book.tags.map(tag => (
                            <a
                                key={tag}
                                href='#'
                                className='px-5 btn mr-4 rounded-full text-green-500 hover:underline '>
                                #{tag}
                            </a>
                        ))}
                    </p>
                    <hr />
                    <div className="grid grid-cols-2 lg:w-2/3">
                        <p>Number of Pages:</p>
                        <p className="font-bold">{book.totalPages}</p>
                    </div>

                    <div className="grid grid-cols-2 lg:w-2/3">
                        <p>Publisher:</p>
                        <p className="font-bold">{book.publisher}</p>
                    </div>

                    <div className="grid grid-cols-2 lg:w-2/3">
                        <p>Year Of Publishing:</p>
                        <p className="font-bold">{book.yearOfPublishing}</p>
                    </div>

                    <div className="grid grid-cols-2 lg:w-2/3">
                        <p>Rating: </p>
                        <p className="font-bold">{book.rating}</p>
                    </div>

                    <div className="flex gap-5">
                        <button onClick={() => handleRead(book)} className="btn font-bold text-lg px-8 hover:bg-green-500 hover:text-white">Read</button>
                        <button onClick={() => handleWishlist(book)} className="btn font-bold text-lg text-white bg-sky-400 hover:text-black hover:bg-sky-400">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;