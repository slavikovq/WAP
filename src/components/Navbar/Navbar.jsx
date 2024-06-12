import logo from "../../img/logo.png"
import styles from "./Navbar.module.css" 
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';


export default function Navbar(){
    let active = false

    const openNav = () => {
        const nav = document.getElementById("navResp")

        if(!active){
            active = true
            nav.style.right = "0"
        } else{
            active = false
            nav.style.right = "-100%"
        }
    }
    
    return(
        <>
            <nav className={styles.nav}>
                <div className={styles.navBox1}>
                    <Link to={"/"}><img src={logo} alt="logo" className={styles.navLogo} /></Link>
                </div>
                <div className={styles.navBox2}>
                    <ul className={styles.navLinks}>
                        <Link to={"/"}><li>Domů</li></Link>
                        <HashLink to='/#AboutUs'><li>O nás</li></HashLink>
                        <HashLink to='/#Menu'><li>Menu</li></HashLink>
                        <Link to={"/Galerie"}><li>Galerie</li></Link>
                        <HashLink to='/#Kontakt'><li>Kontakt</li></HashLink>
                    </ul>
                </div>
                <div className={styles.navBox3}>
                    <div className={styles.navSocials}>
                        <Link to={"https://www.instagram.com/americapodvezi/"} ><i class="fa-brands fa-instagram"></i></Link>
                        <Link to={"https://www.facebook.com/profile.php?id=100063543104526"}><i class="fa-brands fa-square-facebook"></i></Link>
                    </div>
                </div>
                <div className={styles.navContainerBtn}>
                    <i class="fa-solid fa-bars" id={styles.navMenuBtn} onClick={openNav}></i>
                </div>
                <div className={styles.navbarResponsive} id="navResp">
                    <div className={styles.navbarResponsiveClose}>
                        <i class="fa-solid fa-xmark" onClick={openNav}></i>
                    </div>
                    <ul className={styles.navbarResponsiveNav}>
                        <Link to={"/"}><li>Domů</li></Link>
                        <HashLink to='/#AboutUs'><li>Menu</li></HashLink>
                        <HashLink to='/#Menu'><li>O nás</li></HashLink>
                        <Link to={"/Galerie"}><li>Galerie</li></Link>
                        <HashLink to='/#Kontakt'><li>Kontakt</li></HashLink>
                        <hr />
                        <div className={styles.navbarResponsiveLinks}>
                            <Link to={"https://www.instagram.com/americapodvezi/"} ><i class="fa-brands fa-instagram"></i></Link>
                            <Link to={"https://www.facebook.com/profile.php?id=100063543104526"}><i class="fa-brands fa-square-facebook"></i></Link>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}