import PropTypes from 'prop-types'; // ES6
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {

    const { bookId, image, category, bookName, author, tags, rating } = book;

    return (
        <Link to={`/bookcard/${bookId}`} className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="book" /></figure>
            <div className="card-body">
                <div className='flex  justify-between'>
                    <button className='btn text-green-500 font-bold'>{tags}</button>
                </div>
                <h2 className="card-title">{bookName}</h2>
                <p>By : {author}</p>
                <hr />
                <div className="card-actions justify-between">
                    <h2>{category}</h2>
                    <div className='flex gap-2 items-center'>
                        <h2>{rating} </h2>
                        <CiStar />
                    </div>
                </div>
            </div>
        </Link>
    );
};

BookCard.propTypes = {
    book: PropTypes.object
}

export default BookCard;