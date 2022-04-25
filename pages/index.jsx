export default function Home() {
    return (
        <>
            <div className=" flex items-center  justify-center h-screen w-screen " >
                <div className=" flex-col" >
                    <p className=" text-8xl" >Hi, I'm Joseph</p>
                    <span className=" text-3xl" >upcoming</span>
                    <p className=" text-8xl " >Full Stack Developer</p>
                </div>
            </div>
            <div className=" bottom-0 fixed right-0 p-16  " >
                <button className=" rounded-full p-3 border border-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </>
    )
}