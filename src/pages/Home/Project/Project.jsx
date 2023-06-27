import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

const Project = () => {
    return (
        <div className="mx-auto w-11/12 sm:max-w-screen-xl py-10">
            <h2 className='text-center text-2xl pb-10 font-bold' >My Project</h2>
            <div className="">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },

                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card w-fit bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 overflow-auto shadow-xl">
                            <div className="relative max-w-full h-72 overflow-hidden">
                                <div className="h-max w-full transition-transform duration-[3000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                                    <img src="https://i.ibb.co/wK8TyBx/screencapture-chef-tutul-bd-web-app-2023-06-27-17-45-17.png" alt="Shoes" className="w-full object-cover object-top " />
                                </div>
                            </div>
                            <div className=" mx-auto w-10/12 py-4 text-center">
                                <h2 className="items-center justify-center card-title">Chef Tutul DB</h2>
                                <div className="flex justify-between">
                                    <Link to='https://chef-tutul-bd.web.app' target="blank"><button className="bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 border  rounded-full mt-5  px-5 flex items-center">Live Site</button></Link>
                                    <Link to='https://github.com/syedalamin/chef-tutul-bd' target="blank"><button className="bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 border  rounded-full mt-5  px-5 flex items-center">Git Hub</button></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-fit bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 overflow-auto shadow-xl">
                            <div className="relative max-w-full h-72 overflow-hidden">
                                <div className="h-max w-full transition-transform duration-[3000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                                    <img src="https://i.ibb.co/chfwRTM/screencapture-action-figure-toys-web-app-2023-06-27-18-27-52.png" alt="Shoes" className="w-full object-cover object-top " />
                                </div>
                            </div>
                            <div className=" mx-auto w-10/12 py-4 text-center">
                                <h2 className="items-center justify-center card-title">Action Figure</h2>
                                <div className="flex justify-between">
                                    <Link to='https://action-figure-toys.web.app' target="blank"><button className="bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 border  rounded-full mt-5  px-5 flex items-center">Live Site</button></Link>
                                    <Link to='https://github.com/syedalamin/chef-bd-client' target="blank"><button className="bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 border  rounded-full mt-5  px-5 flex items-center">Git Hub</button></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-fit bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 overflow-auto shadow-xl">
                            <div className="relative max-w-full h-72 overflow-hidden">
                                <div className="h-max w-full transition-transform duration-[3000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                                    <img src="https://i.ibb.co/hYGT5s4/screencapture-sa-tea-house-netlify-app-2023-06-27-16-28-11.png" alt="Shoes" className="w-full object-cover object-top " />
                                </div>
                            </div>
                            <div className=" mx-auto w-10/12 py-4 text-center">
                                <h2 className="items-center justify-center card-title">Tea House</h2>
                                <div className="flex justify-around">
                                    <Link to='https://sa-tea-house.netlify.app' target="blank"><button className="bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 border  rounded-full mt-5  px-5 flex items-center">Live Site</button></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-fit bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 overflow-auto shadow-xl">
                            <div className="relative max-w-full h-72 overflow-hidden">
                                <div className="h-max w-full transition-transform duration-[3000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                                    <img src="https://i.ibb.co/3zxbhjy/screencapture-illustrious-seahorse-34b9fa-netlify-app-2023-06-27-16-27-48.png" alt="Shoes" className="w-full object-cover object-top " />
                                </div>
                            </div>
                            <div className=" mx-auto w-10/12 py-4 text-center">
                                <h2 className="items-center justify-center card-title">Dream Job</h2>
                                <div className="flex justify-around">
                                    <Link to='https://illustrious-seahorse-34b9fa.netlify.app' target="blank"><button className="bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 border  rounded-full mt-5  px-5 flex items-center">Live Site</button></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Project;