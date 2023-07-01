import { HiDownload } from "react-icons/hi";
import Swal from 'sweetalert2';
const PDF_FILE_URL = 'https://syed-alamin-portfolio.vercel.app/SyedAlaminResume.pdf';
import banner from '../../../assets/Section/Banner.png';
import react from '../../../assets/Skills/React.png';
import firebase from '../../../assets/Skills/firebase.png';
import mongodb from '../../../assets/Skills/mongodb.png';
import express from '../../../assets/Skills/express.png';
import node from '../../../assets/Skills/node.png';
const Banner = () => {
    const downloadFileAtURL = (url)=>{
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href=url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Download Success',
            showConfirmButton: false,
            timer: 2000
          })
        
    }
    return (
        <div className="relative " id="banner">
            <div className="w-full">
                <div className="rounded-full filter blur-3xl absolute top-0 right-0 h-96 sm:w-96  w-full bg-gradient-to-l from-blue-500 to-sky-400   opacity-30 "></div>
                <div className="rounded-full filter blur-3xl absolute sm:top-[120px] top-9 left-0 h-96 sm:w-96  w-full sm:-rotate-45   bg-gradient-to-r from-violet-600 to-indigo-800   opacity-10 "></div>
            </div>
            <div className="pt-12 sm:max-w-screen-xl w-11/12 mx-auto ">
                <div className="sm:grid sm:grid-cols-2 flex  flex-col-reverse ">
                    <div className="flex items-center py-5 sm:py-0">
                        <div>
                            <h2 className="sm:text-5xl text-3xl font-semibold">Hey, I am Syed Alamin</h2>
                            <h3 className="sm:text-6xl text-4xl font-bold py-5">Web Developer</h3>
                            <p className=""> As a junior React developer, I bring a fresh perspective and an unwavering determination to overcome challenges. I am confident that my dedication and enthusiasm for the field will enable me to make valuable contributions to your organization and help drive its success</p>
                            <button onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}} className="bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md mt-5 sm:py-2 py-1 sm:px-5 px-2 flex items-center ">Resume <span className=' mt-1 ps-1'> <HiDownload ></HiDownload></span></button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center  sm:h-screen relative ">
                            <div>
                                <img src={firebase} className="sm:w-14 w-10  absolute sm:top-28 top-7 sm:right-60 right-32  " alt="" />
                                <img src={react} className="sm:w-12 w-8 absolute top-30 sm:right-24 right-12 " alt="" />
                                <img src={express} className="sm:w-20 w-16 absolute bottom-10 sm:bottom-32 sm:right-56 right-28 " alt="" />
                                <img src={mongodb} className="sm:w-14 w-10 absolute sm:top-48 top-24 sm:left-36  left-16 " alt="" />
                                <img src={node} className="sm:w-10 w-7 absolute sm:bottom-52 bottom-24 sm:left-32 left-20 " alt="" />
                            </div>
                            <div className=" ">
                                <img src={banner} className=" w-11/12  mx-auto rounded-full" alt="Syed Alamin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;