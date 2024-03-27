import { useNavigate } from "react-router-dom";

const Banner = () => {

    // use navigate to booklist
    let navigate = useNavigate();
    const handleViewList = () =>{
        let path = "/listbook";
        navigate(path);
    }

    return (
        <div className="hero mt-5 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/public/banner.png" className="max-w-sm rounded-lg " />
                <div>
                    <h1 className="text-5xl font-bold lg:w-[500px]">Books to freshen up your bookshelf</h1>
                    <button onClick={handleViewList} className=" mt-10 btn bg-green-500 text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;