import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const books = useLoaderData();
    const {bookId} = useParams();
    const intId = parseInt(bookId)
    const book = books.find(book => book.bookId === intId)
    console.log(book)

    return (
        <div>
            <h2>kdjskdjsk</h2>
        </div>
    );
};

export default BookDetails;