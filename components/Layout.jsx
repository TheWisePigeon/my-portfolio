import Navbar from "./Navbar"
import Footer from "./Footer"
import Hero from "./Hero"

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Hero />
            <main>{children}</main>
            <Footer />
        </>
    )
}