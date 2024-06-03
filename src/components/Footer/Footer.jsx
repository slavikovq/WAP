import styles from "./Footer.module.css" 
import logo from "../../img/logo.png"
import { Link } from "react-router-dom"


export default function Footer(){
    return(
        <>
            <div className={styles.footer}>
                <div className={styles.logo}>
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className={styles.contact}>
                    <h3>kontakt</h3>
                    <p><i class="fa-solid fa-phone"></i> 326-322-007</p>
                    <p><i class="fa-brands fa-internet-explorer"></i> www.americapodvezi.com</p>

                </div>
                <div className={styles.map}>
                    <iframe src="https://en.frame.mapy.cz/s/fupukaraze" width="400" height="200" frameborder="0"></iframe>
                </div>
            </div>
        </>
    )
}