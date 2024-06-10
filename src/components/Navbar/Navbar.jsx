import logo from "../../img/logo.png"
import styles from "./Navbar.module.css" 
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';


export default function Navbar(){
    
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
            </nav>
        </>
    )
}