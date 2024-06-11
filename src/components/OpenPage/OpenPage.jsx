import styles from "./OpenPage.module.css" 
import { Link } from "react-router-dom"

export default function OpenPage(){
    return(
        <>
            <div className={styles.OpenPage}>
                <div className={styles.OpenTime}> 
                    <p>Pondělí: 11:00 až 22:00</p>
                    <p>Úterý: 11:00 až 22:00</p>
                    <p>Středa: 11:00 až 22:00</p>
                    <p>Čtvrtek: 11:00 až 22:00</p>
                    <p>Pátek: 11:00 až 22:00</p>
                    <p>Sobota: 11:30 až 22:00</p>
                    <p>Neděle: ZAVŘENO</p>
                </div>
            </div>
        </>
    )
}