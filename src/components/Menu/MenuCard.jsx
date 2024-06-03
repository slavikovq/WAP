import styles from "./Menu.module.css" 
import { Link } from "react-router-dom"

export default function MenuCard(props){
    return(
        <>
            <div className={styles.menuCard}>
               <img src={props.foodImage} alt=""/>
                <div className={styles.foodText}>
                    <h3>{props.foodTitle}</h3>
                    <p>{props.foodDescription}</p>
                </div>
            </div>
        </>
    )
}