import Link from "next/dist/client/link";


export default function Projects() {
    return (
        <>
            <div className="flex items-center  justify-center h-screen lg:w-screen " >
                <div className=" lg:flex lg:space-x-16 text-xs md:text-base lg:text-base space-y-4 lg:space-y-0 ">
                    
                    <div className=" text-center">
                        <i className="font-bold">node-cinetpay</i>
                        <p>An open source node package</p>
                        <p>to interact with an online </p>
                        <p>payment api</p>

                    </div>
                    <div className=" text-center">
                        <i className="font-bold">LibraryAPI</i>
                        <p>A library management RESTful API</p>
                        built with Flask and deployed on Heroku
                    </div>
                    <div className=" text-center">
                        <i className="font-bold">TrustOnlyShop</i>
                        <p>An ecommerce website built with VueJS <br />(still in development) </p>
                    </div>
                    <div className=" text-center">
                        <i className="font-bold">PigeonScript</i>
                        <p>My personnal blog that I built with Astro</p>
                        Check it out at <a href="https://pigeonscript.co" className=" text-blue-700 ">pigeonscript.co</a>
                    </div>
                    <div className=" text-center">
                        <i className="font-bold">MyDocs</i>
                        <p>Mobile client for the Library API</p>
                    </div>
                    
                </div>
                <p className=" top-0 fixed font-bold text-2xl lg:pt-16" >Some of the stuff I made</p>
            </div>
            <div className=" bottom-0 fixed w-full  p-8 md:p-12 lg:p-16  " >
                <div className=" flex justify-between" >
                    <Link href="/skills" passHref={true}>
                        <button className=" rounded-full p-3  border border-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </svg>
                        </button>
                    </Link>
                    <Link href="/contact" passHref={true}>
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