import styles from "./Hero.module.css" 
import { Link } from "react-router-dom"

export default function Hero(){
    return(
        <>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                            <h3>Vítejte v Americe pod Věží</h3>
                            <h1>Navštivte nás</h1>
                            <button>Dnešní nabídka</button>
                    </div>
                </div>
            </div>
        </>
    )
}