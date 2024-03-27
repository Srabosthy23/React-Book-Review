import { CiLocationOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ReadBooks = ({ books }) => {
    
    // navigate to bookdetails
    let navigate = useNavigate();
    const handleViewList = (bookId) => {
        let path = `/bookcard/${bookId}`;
        navigate(path);
    }

    return (
        <div className="grid grid-cols-1 gap-3 lg:mt-5">
            {books.map(book => (
                <div key={book.bookId} className="rounded-lg border p-10">
                    <div className="flex gap-10 flex-col lg:flex-row">
                        <img src={book.image} className="rounded-lg shadow p-10 bg-base-200" alt={book.bookName} />
                        <div className='space-y-3'>
                            <h1 className="text-3xl font-bold">{book.bookName}</h1>
                            <p className="font-medium text-slate-500">By: {book.author}</p>

                            <div className='flex items-center'>
                                <p><span className='font-bold mr-4'>Tags:</span>{book.tags &&
                                    book.tags.map(tag => (
                                        <a
                                            key={tag}
                                            href='#'
                                            className='px-2 btn mr-4 mt-4 rounded-full text-green-500 hover:underline '>
                                            #{tag}
                                        </a>
                                    ))}
                                </p>

                                <div className="flex items-center gap-2">
                                    <CiLocationOn className="text-2xl" />
                                    <p className="text-slate-700">Year of Publishing: {book.yearOfPublishing}</p>
                                </div>
                            </div>

                            <div className="flex gap-8">
                                <div className="flex gap-2 items-center text-slate-600">
                                    <FiUsers className="text-2xl" />
                                    <p>Publisher: {book.publisher}</p>
                                </div>
                                <div className="flex gap-2 items-center text-slate-600">
                                    <IoDocumentTextOutline className="text-2xl" />
                                    <p>Page {book.totalPages}</p>
                                </div>
                            </div>
                            <hr />

                            <div className="flex flex-col lg:flex-row w-1/2 lg:w-full mx-auto gap-4 lg:gap-10">
                                <button className="btn rounded-full text-blue-500 bg-blue-100 ">Category: {book.category}</button>
                                <button className="btn rounded-full text-orange-500 bg-orange-100 ">Rating: {book.rating}</button>
                                <button onClick={() => handleViewList(book.bookId)} className="btn rounded-full bg-green-500 text-white hover:bg-green-400 hover:text-black">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

ReadBooks.propTypes = {
    books: PropTypes.array.isRequired
}

export default ReadBooks;