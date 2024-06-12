import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"
import AboutUs from "../../components/AboutUs/AboutUs"
import Menu from "../../components/Menu/Menu"
import Footer from "../../components/Footer/Footer"

export default function Home() {
    return(
        <>
            <Hero>
                <Navbar/>
            </Hero>
            <AboutUs/>
            <Menu/>
            <Footer/>
        </>
    )    
}