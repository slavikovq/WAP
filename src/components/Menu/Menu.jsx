import styles from "./Menu.module.css" 
import burgers from "./imgMenu/burgers.jpg"
import nevimcotojelol from "./imgMenu/nevimcotojelol.jpg"
import drinks from "./imgMenu/drinks.jpg"
import { Link } from "react-router-dom"

export default function Menu(){
    return(
        <>
        <div id="Menu">
            <p>Menu</p>
            <div className={styles.box}>
                <div className={styles.Menu}>
                    <div className={styles.MenuCard}>
                        <img src={burgers} alt="" srcset="" />
                        <p>Stálé menu</p>
                        <Link to={"/Food"}><button>Zobrazit více</button></Link>
                    </div>
                    <div className={styles.MenuCard}>
                        <img src={nevimcotojelol} alt="" srcset="" />
                        <p>Denní menu</p>
                        <a href="https://www.menicka.cz/7509-america-pod-vezi.html"><button>Zobrazit více</button></a>                    
                    </div>
                    <div className={styles.MenuCard}>
                        <img src={drinks} alt="" srcset="" />
                        <p>Nápoje</p>
                        <Link to={"/Drinks"}><button>Zobrazit více</button></Link>            
                    </div>
                </div>
                <div className={styles.MenuLine}></div>
            </div>
         </div>
        </>
    )
}