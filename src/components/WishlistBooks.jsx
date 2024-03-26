import { useLoaderData } from "react-router-dom";

const WishlistBooks = () => {

    const wishistBooks = useLoaderData()

    return (
        <div>
            <h2>wishlist book</h2>
        </div>
    );
};

export default WishlistBooks;