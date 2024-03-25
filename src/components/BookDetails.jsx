import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const books = useLoaderData();
    const {bookId} = useParams();
    const intId = parseInt(bookId)
    const book = books.find(book => book.bookId === intId)
    console.log(book)

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 mb-10">
                <div>
                    <img className="h-[530px] shadow-lg p-20 bg-base-200" src={book.image} alt="" />
                </div>
                <div className="space-y-3 lg:col-span-2">
                    <h2 className="text-3xl font-bold">{book.bookName}</h2>
                    <p className="font-semibold">By: {book.author}</p>
                    <p>{book.category}</p>
                    <hr />
                    <p><span className="font-bold">review:</span> {book.review}</p>
                    <p><span className="font-bold">Tag: </span> <button className="btn text-green-500 font-bold rounded-full">#{book.tags}</button></p>
                    <hr />
                    <p><span>Number of Pages: </span>{book.totalPages}</p>
                    <p><span>Publisher: </span>{book.publisher}</p>
                    <p><span>Year Of Publishing: </span>{book.yearOfPublishing}</p>
                    <p><span>Rating: </span>{book.rating}</p>
                    <div className="flex gap-5">
                        <button className="btn font-bold text-lg px-8">Read</button>
                        <button className="btn font-bold text-lg text-white bg-sky-400">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;