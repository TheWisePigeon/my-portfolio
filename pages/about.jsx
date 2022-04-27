import Link from "next/dist/client/link"


export default function About() {
    return(
        <>
            <div className="flex items-center  justify-center h-screen lg:w-screen " >
                <p>Hi again, welcome to my portfolio </p>
            </div>
            <div className=" bottom-0 fixed w-full  p-8 md:p-12 lg:p-16 " >
                <Link href="/about" passHref={true} >
                    <button className=" rounded-full p-3 border border-white ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                    </button>
                </Link >
                <Link href="/about" passHref={true} >
                    <button className=" rounded-full p-3 border border-white ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                    </button>
                </Link>
            </div>
        </>
    )
}