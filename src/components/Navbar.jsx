import { NavLink } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";

const Navbar = () => {

    const link = <>
        <li><NavLink to={"/"} className={({isActive}) => isActive? "text-green-500 border border-green-500 font-bold" : "font-normal"}>Home</NavLink></li>
        <li><NavLink to={"/listbook"} className={({isActive}) => isActive? "text-green-500 border border-green-500 font-bold" : "font-normal"}>Listed Books</NavLink></li>
        <li><NavLink to={"/pageread"} className={({isActive}) => isActive? "text-green-500 border border-green-500 font-bold" : "font-normal"}>Pages to Read</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <a className="btn btn-ghost text-2xl font-bold">Book Vibe <IoBookOutline className="text-3xl text-green-500" /></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <a className="btn bg-green-500 text-white">Sign in</a>
                <a className="btn bg-sky-400 text-white">Sign up</a>
            </div>
        </div>
    );
};

export default Navbar;