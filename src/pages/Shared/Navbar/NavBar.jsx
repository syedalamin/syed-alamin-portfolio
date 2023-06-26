import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navOptions = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
    </>
    return (
        <div className={`fixed w-full  z-10 top-0 text-white  transition duration-700 ease-in-out ${isScrolled ? 'bg-[#040c16]' : 'bg-transparent'} `} >
            <div className="max-w-screen-xl mx-auto">
                <div className="navbar  ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navOptions}
                            </ul>
                        </div>
                        <h2 className="">Syed Alamin</h2>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">LETS TALK</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;