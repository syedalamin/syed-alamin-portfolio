import { useEffect, useState } from "react";
import { Link, } from 'react-scroll';



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
        <li><Link activeClass="active"
            className="hover:text-[#00acee]"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500} to="banner">Home</Link></li>
        <li><Link activeClass="active"
            className="hover:text-[#00acee]"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500} to="about">About</Link></li>
        <li><Link activeClass="active"
            className="hover:text-[#00acee]"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500} to="skills">Skills</Link></li>
        <li><Link activeClass="active"
            className="hover:text-[#00acee]"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500} to="project">Project</Link></li>
        <li><Link activeClass="active"
            className="hover:text-[#00acee]"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500} to="contact">Contact</Link></li>
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
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0b1120] rounded-box w-52">
                                {navOptions}
                            </ul>
                        </div>
                        <h2 className="text-2xl font-bold">Syed Alamin</h2>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end ">
                        <Link activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} to="contact"><button className="bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 border   rounded-md py-2 px-5">LETS TALK</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;