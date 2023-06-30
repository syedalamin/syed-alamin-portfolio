import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Tilt from 'react-parallax-tilt';
import about from '../../../assets/Section/About.png'
const AboutMe = () => {
    
    return (
        <div className='relative ' id='about'>
            <div className="w-full">
                <div className="rounded-full filter blur-3xl absolute top-0 right-0 h-96 sm:w-96  w-full bg-gradient-to-r from-violet-600 to-indigo-800   opacity-20 "></div>
                <div className="rounded-full filter blur-3xl absolute  sm:top-0 top-96 left-0 sm:h-96 h-96 sm:w-96  w-full sm:-rotate-45  bg-gradient-to-l from-blue-500 to-sky-400   opacity-20 "></div>
            </div>
            <div className="mx-auto max-w-screen-xl pb-10">
                <h2 className='text-center text-2xl pb-10 font-bold' >About Me</h2>
                <div className="grid sm:grid-cols-2 w-11/12 mx-auto">
                    <Tilt className="parallax-effect" perspective={2000}>
                        <div className="inner-element">
                            <img src={about} className="w-7/12 drop-shadow-lg grayscale hover:grayscale-0  mx-auto bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-20  rounded-md" alt="" />
                        </div>
                    </Tilt>
                    <div className='flex items-center py-5'>
                        <div className="space-y-2 sm:space-y-4">
                            <h2 className='sm:text-4xl text-2xl font-semibold'>I am Available For  Web Site <br /> Design  and Develop Projects</h2>
                            <p className=''> As a junior React developer, I bring a fresh perspective and an unwavering determination to overcome challenges. I am confident that my dedication and enthusiasm for the field will enable me to make valuable contributions to your organization and help drive its success</p>
                            <p><span className='text-[#9bb4f1]'>Email: </span> syedalamin2580@gmail.com</p>
                            <p className=''><span className='text-[#9bb4f1]'>Place: </span> Tangail-1900 , Bangladesh</p>
                            <Link activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} to="contact"><button className="bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 border  rounded-md sm:mt-5 sm:py-2 sm:px-5 py-1 px-2 mt-2 flex items-center">Hire Me  <span className=' mt-1 ps-1'> <HiArrowNarrowRight></HiArrowNarrowRight> </span></button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;