import PropTypes from 'prop-types'; // ES6
import { CiStar } from "react-icons/ci";

const BookCard = ({ book }) => {

    const { image, category, bookName, author, publisher, rating } = book;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="book" /></figure>
            <div className="card-body">
                <div className='flex  justify-between'>
                    <button className='btn text-green-500 font-bold'>{category}</button>
                    <button className='btn text-green-500 font-bold'>{publisher}</button>
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
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.object
}

export default BookCard;