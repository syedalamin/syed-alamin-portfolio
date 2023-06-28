import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsSend } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FaFacebookF,  FaLinkedinIn , FaTwitter} from 'react-icons/fa';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mgnaw36', 'template_kv42mdq', form.current, 'R2GcVUQTGg5wv7OaZ')
            .then((result) => {
                if (result) {
                    e.target.reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Email Send Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='relative'>
             <div className="h-full">
                <div className="rounded-full filter blur-3xl absolute top-0 left-0 h-96 w-96  bg-gradient-to-r from-violet-600 to-indigo-800    opacity-20 "></div>
                <div className="rounded-full filter blur-3xl absolute top-24 right-28 h-60 w-96   bg-gradient-to-r  from-blue-500 to-sky-400  opacity-20 "></div>
            </div>
            <div className="mx-auto w-11/12 sm:max-w-screen-xl py-10  " id='contact'>
                <h2 className='text-center text-2xl pb-10 font-bold' >Contact Me</h2>

                <div className='grid md:grid-cols-7 '>
                    <div className=' w-full md:col-span-3 space-y-5'>
                        <h2 className='text-5xl font-bold'>Let s Discuss Your Project</h2>
                        <p className=''>Always available for freelancing if the right project comes along, <br /> Feel free to contact me.</p>
                        <div className='space-x-5 '>
                            <Link target='blank' to='https://www.facebook.com/syed.tutul.dark.spider'>
                                <button className="btn btn-circle bg-[#3b5998] hover:bg-[#3b5998] text-white hover:-translate-y-2 duration-500">
                                   <FaFacebookF className='text-lg'></FaFacebookF>
                                </button>
                            </Link>
                            <Link target='blank' to='https://twitter.com/syedprogrammer'>
                                <button className="btn btn-circle bg-[#00acee] hover:bg-[#00acee] text-white hover:-translate-y-2 duration-500">
                                   <FaTwitter className='text-lg'></FaTwitter>
                                </button>
                            </Link>
                            <Link target='blank' to='https://www.linkedin.com/in/syedalamin/'>
                                <button className="btn btn-circle bg-[#0072b1] hover:bg-[#0072b1] text-white hover:-translate-y-2 duration-500">
                                   <FaLinkedinIn className='text-lg'></FaLinkedinIn>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className=' w-full md:col-span-4'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='w-full flex gap-4'>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input  w-full  bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 " name="user_name" required />
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your Email" className="input  w-full  bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 " name="user_email" required />
                                </div>
                            </div>
                            <div className="form-control w-full mt-5 ">
                                <label className="label">
                                    <span className="label-text text-white">Subject</span>
                                </label>
                                <input type="text" placeholder="Subject" className="input  w-full   bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 " name="user_subject" required />
                            </div>
                            <div className="form-control w-full mt-5">
                                <label className="label">
                                    <span className="label-text text-white">Your Message</span>
                                </label>
                                <textarea className="textarea h-24  w-full   bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 " placeholder="Your Message" name="message" required ></textarea>
                            </div>
                            <button type="submit" className="bg-[#8193c2] hover:bg-sky-600 duration-300 backdrop-filter backdrop-blur-sm bg-opacity-10 border   rounded-md mt-5 py-2 px-5 flex items-center w-full justify-center">Send Message<span className=' mt-1 ps-1'> <BsSend></BsSend> </span></button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;


