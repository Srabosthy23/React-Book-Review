import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <img src="../assets/error.jpg" alt="" />
            <Link to={"/"}  >Go to Home Page</Link>
        </div>
    );
};

export default ErrorPage;