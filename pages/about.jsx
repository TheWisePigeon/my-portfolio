import Link from "next/dist/client/link"


export default function About() {
    return(
        <>
            <div className="flex items-center  justify-center h-screen lg:w-screen " >
                <div className=" text-center ">
                    <h1 className=" font-bold text-3xl" >Who am I?</h1>
                    <p>Hi again, and welcome to my portfolio</p>
                    <p>I am Joseph DOGBEVI, 20 years old self taught fullstack developer based in Lome, Togo</p>
                    <p>Currently in my second year of pursuing a degree in software engineering</p>
                </div>
            </div>
            <div className=" bottom-0 fixed w-full  p-8 md:p-12 lg:p-16  " >
                <div className=" flex justify-between" >
                    <Link href="/" passHref={true}>
                        <button className=" rounded-full p-3  border border-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </svg>
                        </button>
                    </Link>
                    <Link href="/skills" passHref={true}>
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