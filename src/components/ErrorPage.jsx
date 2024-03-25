import { Link } from "react-router-dom";
import { IoSadOutline } from "react-icons/io5";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-5 mt-10">
            <div className="flex justify-center items-center gap-4">
                <h2 className="text-3xl text-center text-red-700">Oppps!!</h2>
                <IoSadOutline className="text-4xl text-red-700" />
            </div>
            <Link to={"/"}  ><button className="btn bg-green-500 text-white hover:bg-green-500 hover:text-black">Go to Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;