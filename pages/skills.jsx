import Link from "next/dist/client/link";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <>
            <div className="flex items-center  justify-center h-screen lg:w-screen " >
                <div className=" lg:flex lg:space-x-16 text-xs md:text-base lg:text-base space-y-4 lg:space-y-0 ">
                    
                    <div className=" text-center">
                        <i className="font-bold">Front-end technologies</i>
                        <p>ReactJS</p>
                        <p>VueJS</p>
                        <p>NextJS</p>
                        <p>NuxtJS</p>
                        <p>SvelteJS</p>
                        <p>Astro</p>
                    </div>
                    <div className=" text-center">
                        <i className="font-bold">Backend technologies</i>
                        <p>HapiJS</p>
                        <p>ExpressJS</p>
                        <p>Flask</p>
                    </div>
                    <div className=" text-center">
                        <i className="font-bold">Databases</i>
                        <p>MongoDB</p>
                        <p>PostgreSQL</p>
                        <p>Firebase</p>
                        <p>Redis</p>
                    </div>
                    <div className=" text-center">
                        <i className="font-bold">Mobile app development</i>
                        <p>Flutter</p>
                        <p>React Native</p>
                        <p>MeteorJS</p>
                    </div>
                    <div className=" text-center">
                        <i className="font-bold">Desktop app development</i>
                        <p>Flutter</p>
                        <p>ElectronJS</p>
                        <p>MeteorJS</p>
                    </div>
                    
                </div>
                <p className=" top-0 fixed font-bold text-2xl lg:pt-16" >My skills</p>
            </div>
            <div className=" bottom-0 fixed w-full  p-8 md:p-12 lg:p-16  " >
                <div className=" flex justify-between" >
                    <Link href="/about" passHref={true}>
                        <button className=" rounded-full p-3  border border-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </svg>
                        </button>
                    </Link>
                    <Link href="/projects" passHref={true}>
                        <button className=" rounded-full p-3  border border-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}