import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Tilt from 'react-parallax-tilt';

const AboutMe = () => {
    
    return (
        <div className='relative py-10' id='about'>
            
            <div className="h-full">
                <div className="rounded-full filter blur-3xl absolute top-0 left-0 h-96 w-96  bg-gradient-to-l from-blue-500 to-sky-400   opacity-30 "></div>
                <div className="rounded-full filter blur-3xl absolute top-24 right-28 h-96 w-96   bg-gradient-to-r from-violet-600 to-indigo-800  opacity-10 "></div>
            </div>
            <div className="mx-auto max-w-screen-xl pb-10">
                <h2 className='text-center text-2xl pb-10 font-bold' >About Me</h2>
                <div className="grid sm:grid-cols-2 w-11/12 mx-auto">
                    <Tilt className="parallax-effect" perspective={2000}>
                        <div className="inner-element">
                            <img src="https://i.ibb.co/n8D4zqb/sasa.png" className="w-7/12 drop-shadow-lg grayscale hover:grayscale-0  mx-auto bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-20  rounded-md" alt="" />
                        </div>
                    </Tilt>
                    <div className='flex items-center'>
                        <div>
                            <h2 className='text-4xl font-semibold'>I am Available For  Web Site <br /> Design  and Develop Projects</h2>
                            <p className='py-5'> As a junior React developer, I bring a fresh perspective and an unwavering determination to overcome challenges. I am confident that my dedication and enthusiasm for the field will enable me to make valuable contributions to your organization and help drive its success</p>
                            <p><span className='text-[#9bb4f1]'>Email: </span> syedalamin2580@gmail.com</p>
                            <p className='py-5'><span className='text-[#9bb4f1]'>Place: </span> Tangail-1900 , Bangladesh</p>
                            <Link activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} to="contact"><button className="bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 border  rounded-md mt-5 py-2 px-5 flex items-center">Hire Me  <span className=' mt-1 ps-1'> <HiArrowNarrowRight></HiArrowNarrowRight> </span></button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;