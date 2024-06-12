import styles from "./Hero.module.css" 
import { Link } from "react-router-dom"

export default function Hero({children}){
    return(
        <>
            <div className={styles.hero}>
                {children}
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                            <h3>Vítejte v Americe pod Věží</h3>
                            <h1>Navštivte nás</h1>
                            <div className={styles.buttons}>
                                <a href="https://www.menicka.cz/7509-america-pod-vezi.html"><button>Dnešní nabídka</button></a>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}