
const Banner = () => {
    return (
        <div className="relative h-screen">
            <div className="">
                <div className="rounded-full filter blur-3xl absolute top-0 right-0 h-96 w-96  bg-gradient-to-l from-blue-500 to-sky-400   opacity-30 "></div>
                <div className="rounded-full filter blur-3xl absolute top-[120px] left-0 h-96 w-96 -rotate-45   bg-gradient-to-r from-violet-600 to-indigo-800   opacity-10 "></div>
            </div>
            <div className="pt-12 sm:max-w-screen-xl w-11/12 mx-auto ">
                <div className="grid sm:grid-cols-2 ">
                    <div className="flex items-center ">
                        <div>
                            <h2 className="text-5xl font-semibold">Hey, I am Syed Alamin</h2>
                            <h3 className="text-6xl font-bold py-5">Web Developer</h3>
                            <p className=""> As a junior React developer, I bring a fresh perspective and an unwavering determination to overcome challenges. I am confident that my dedication and enthusiasm for the field will enable me to make valuable contributions to your organization and help drive its success</p>
                            <button className="bg-[#8193c2] backdrop-filter backdrop-blur-sm bg-opacity-10 border     rounded-md mt-5 py-2 px-5">Hire Me</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center  h-screen relative ">
                            <div>
                                <img src=" https://i.ibb.co/vQD44mr/firebase.png" className="w-14  absolute sm:top-24 top-32 sm:right-60 right-32 animate-bounce  " alt="" />
                                <img src="https://i.ibb.co/wBsMjk6/React.png" className="w-12 absolute top-64 sm:right-20 right-4 animate-bounce " alt="" />
                                <img src=" https://i.ibb.co/pwYkzqX/express.png  " className="w-20 absolute bottom-36 sm:bottom-28 sm:right-44 right-12 animate-bounce " alt="" />
                                <img src="https://i.ibb.co/pjQTLYx/mongodb.webp" className="w-14 absolute top-48 sm:left-24 left-12 animate-bounce " alt="" />
                                <img src="https://i.ibb.co/T2djKjv/node.png" className="w-10 absolute bottom-40 sm:left-32 left-20 animate-bounce " alt="" />
                            </div>
                            <div className=" ">
                                <img src="https://i.ibb.co/GFqQxZG/Untitled-design-removebg-preview.png" className=" w-full  mx-auto rounded-full" alt="Syed Alamin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;