import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <>
            <div className="  text-white lg:flex lg:justify-between lg:px-8 py-8 w-full " >
                <div className=" text-center w-3/5 lg:flex-col lg:items-center lg:justify-center m-auto ">
                    <p className=" font-extrabold text-4xl ">Hi, I'm Joseph</p>
                    <p className=" font-extrabold text-4xl ">Fullstack developer </p>
                    <div className=" flex-col pt-4  ">
                        <Link href="/" >About me</Link><br /> 
                        <Link href="/" >About me</Link><br />
                        <Link href="/" >About me</Link><br />
                    </div>
                    
                    
                </div>
                <div className=" flex w-2/5 justify-center m-auto " >
                    <Image src="/me.jpg" alt="a picture of myself" width="300" height="300" />
                </div>
            </div>
        </>
    )
}