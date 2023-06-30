import html from '../../../assets/Skills/html.png';
import css from '../../../assets/Skills/css.png';
import bootstrap from '../../../assets/Skills/bootstrap.png';
import javascript from '../../../assets/Skills/javascript.png';
import reactrouter from '../../../assets/Skills/react-router.png';
import React from '../../../assets/Skills/React.png';
import express from '../../../assets/Skills/express.png';
import figma from '../../../assets/Skills/figma.png';
import firebase from '../../../assets/Skills/firebase.png';
import git from '../../../assets/Skills/Git.png';
import github from '../../../assets/Skills/github.png';
import jwt from '../../../assets/Skills/jwt.png';
import mongodb from '../../../assets/Skills/mongodb.png';
import netlify from '../../../assets/Skills/netlify.png';
import node from '../../../assets/Skills/node.png';
import sass from '../../../assets/Skills/Sass.png';
import tailwind from '../../../assets/Skills/tailwind-css.png';
import vercel from '../../../assets/Skills/vercel.png';

const MySkills = () => {
    return (
        <div className="relative pb-10" id="skills">
            <div className="w-full">
                <div className="rounded-full filter blur-3xl absolute top-0 right-0 h-96 sm:w-96  w-full bg-gradient-to-r from-violet-600 to-indigo-800   opacity-20 "></div>
                <div className="rounded-full filter blur-3xl absolute  sm:top-20 bottom-0 left-0 sm:h-64 h-full sm:w-96  w-full sm:-rotate-45  bg-gradient-to-l from-blue-500 to-sky-400   opacity-20 "></div>
            </div>
            <div className="sm:max-w-screen-xl mx-auto  w-11/12 ">
                <h2 className='text-center text-2xl pb-10 font-bold'>My Skills</h2>
                <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-5 grid-cols-2 ">
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-10 py-5 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-10 mx-auto" src={html} alt="" />
                            <h2 className="pt-5">HTML5</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-12 py-5 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-10 mx-auto" src={css} alt="" />
                            <h2 className="pt-5">CSS3</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-8 py-5 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-9 mx-auto" src={javascript} alt="" />
                            <h2 className="pt-5">JavaScript</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-9 py-7 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-10 mx-auto" src={tailwind} alt="" />
                            <h2 className="pt-5">Tailwind</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-8 py-6 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-10 mx-auto" src={bootstrap} alt="" />
                            <h2 className="pt-5">Bootstrap</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-10 py-5 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-10 mx-auto" src={figma} alt="" />
                            <h2 className="pt-5">Figma</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-11 py-5 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-10 mx-auto" src={git} alt="" />
                            <h2 className="pt-5">Git</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-5 py-7 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-10 mx-auto" src={reactrouter} alt="" />
                            <h2 className="pt-5">React-Router</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-10 py-5 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-10 mx-auto" src={jwt} alt="" />
                            <h2 className="pt-5">JWT</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-10 py-5 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-11 mx-auto" src={vercel} alt="" />
                            <h2 className="pt-5">Vercel</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-10 py-5 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-10 mx-auto" src={netlify} alt="" />
                            <h2 className="pt-5">Netlify</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-10 py-5 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-12 mx-auto" src={sass} alt="" />
                            <h2 className="pt-5">Sass</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-8 py-4 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-11 mx-auto" src={node} alt="" />
                            <h2 className="pt-5">Node Js</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-7 py-5 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-10 mx-auto" src={mongodb} alt="" />
                            <h2 className="pt-5">MongoDB</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-9 py-5 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-10 mx-auto" src={React} alt="" />
                            <h2 className="pt-5">React Js</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-9 py-6 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-10 mx-auto" src={firebase} alt="" />
                            <h2 className="pt-5">Firebase</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-10 py-5 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-10 mx-auto" src={github} alt="" />
                            <h2 className="pt-5">GitHub</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#8193c2] hover:-translate-y-2 duration-500  px-7 py-6 backdrop-filter backdrop-blur-sm bg-opacity-10 border rounded-md ">
                            <img className="w-16 mx-auto" src={express} alt="" />
                            <h2 className="pt-5">Express Js</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MySkills;