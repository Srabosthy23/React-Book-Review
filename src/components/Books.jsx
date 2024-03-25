import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("fakeData.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="mt-5 text-4xl font-bold text-center">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {
                    books.map(book => <BookCard 
                        key = {book.bookId}
                        book = {book}
                        ></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;