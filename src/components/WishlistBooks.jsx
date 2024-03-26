import { CiLocationOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const WishlistBooks = ({book}) => {

    const { image, category, bookName, author, tags, rating, yearOfPublishing, publisher, totalPages } = book;

    return (
        <div>
            <div className="rounded-lg border p-10">
                <div className=" flex  gap-10 flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow p-10 bg-base-200" />
                    <div className='space-y-3'>
                        <h1 className="text-3xl font-bold">{bookName}</h1>
                        <p className="font-medium text-slate-500">By: {author}</p>

                        <div className='flex items-center'>
                            <p><span className='font-bold mr-4'>Tags:</span>{tags &&
                                tags.map(tag => (
                                    <a
                                        key={tag}
                                        href='#'
                                        className='px-2 btn mr-4 rounded-full text-green-500 hover:underline '>
                                        #{tag}
                                    </a>
                                ))}
                            </p>

                            <div className="flex items-center gap-2">
                                <CiLocationOn className="text-2xl" />
                                <p className="text-slate-700">Year of Publishing: {yearOfPublishing}</p>
                            </div>
                        </div>

                        <div className="flex gap-8">
                            <div className="flex gap-2 items-center text-slate-600">
                                <FiUsers className="text-2xl" />
                                <p>Publisher: {publisher}</p>
                            </div>
                            <div className="flex gap-2 items-center text-slate-600">
                                <IoDocumentTextOutline className="text-2xl" />
                                <p>Page {totalPages}</p>
                            </div>
                        </div>
                        <hr />

                        <div className="flex gap-10">
                            <button className="btn rounded-full text-blue-500 bg-blue-100 ">Category: {category}</button>
                            <button className="btn rounded-full text-orange-500 bg-orange-100 ">Rating: {rating}</button>
                            <Link to={"/bookcard/:bookId"}><button className="btn rounded-full bg-green-500 text-white hover:bg-green-400 hover:text-black">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

WishlistBooks.propTypes = {
    book: PropTypes.object
}

export default WishlistBooks;