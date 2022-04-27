import Link from "next/dist/client/link";
import { motion } from "framer-motion"

export default function Bye() {
    return (
        <>
            <div className="flex items-center  justify-center h-screen lg:w-screen " >
                <div className=" text-center" >
                    That&#39;s it. <br /> This portfolio will certainly change as I gain more experience and build more things. <br />
                    I&#39;m still looking for enterprise experience so in case you as a buiseness owner might be interested in my profile: <br />
                    You can contact me <a href="mailto:josephdogbevi2002@gmail.com" className=" text-blue-700 ">here</a><br />
                    Also check my <a href="https://github.com/TheWisePigeon" className=" text-blue-700 " >github profile</a>, for it&#39;s the most valuable proof of my skills and hard work
                </div>
            </div>
            <div className=" bottom-0 fixed w-full  p-8 md:p-12 lg:p-16  " >
                <div className=" flex justify-between" >
                    <Link href="/projects" passHref={true}>
                        <button className=" rounded-full p-3  border border-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </svg>
                        </button>
                    </Link>
                    <Link href="/" passHref={true}>
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