import styles from "./Menu.module.css" 
import { Link } from "react-router-dom"
import MenuCard from "./MenuCard"
import salmon from "../../img/salmon.png"
import ribs from "../../img/ribs.jpg"
import quesadilla from "../../img/quesadilla.png"

export default function Menu(){
    return(
        <>
            <div className={styles.menu}>
            <p>Menu</p>
                <div>   
                    <h1>Dnešní menu</h1>
                    <div className={styles.menuBox}>
                        <MenuCard foodImage={salmon} foodTitle="Salmon 74" foodDescription="150g filet z lososa připravený na grilu s bylinkovým máslem"/>
                        <MenuCard foodImage={quesadilla} foodTitle="Quesadilla" foodDescription="Grilovaná mexická tortilla plněná kuřecím prsíčkem, karamelizovanou cibulkou, jalapeño papričkami, opečenou slaninkou a čedarem + dip - zakysaná smetana, BBQ, nachos"/>
                        <MenuCard foodImage={ribs} foodTitle="Pečená vepřová žebírka" foodDescription="600g nakládaná žebírka v naší BBQ marinádě, s domácími hranolky a salát coleslaw"/>
                    </div>
                    <button className={styles.buttonMore}>Zobrazit více</button>
                </div>
                <div>
                <h1>Stálé menu</h1>
                    <div className={styles.menuBox}>
                        <MenuCard foodImage={salmon} foodTitle="Salmon 74" foodDescription="150g filet z lososa připravený na grilu s bylinkovým máslem"/>
                        <MenuCard foodImage={salmon} foodTitle="Salmon 74" foodDescription="150g filet z lososa připravený na grilu s bylinkovým máslem"/>
                        <MenuCard foodImage={salmon} foodTitle="Salmon 74" foodDescription="150g filet z lososa připravený na grilu s bylinkovým máslem"/>
                        </div>
                    <button className={styles.buttonMore}>Zobrazit více</button>
                </div>
                <div>
                <h1>Nápoje</h1>
                    <div className={styles.menuBox}>
                        <MenuCard foodImage={salmon} foodTitle="Salmon 74" foodDescription="150g filet z lososa připravený na grilu s bylinkovým máslem"/>
                        <MenuCard foodImage={salmon} foodTitle="Salmon 74" foodDescription="150g filet z lososa připravený na grilu s bylinkovým máslem"/>
                        <MenuCard foodImage={salmon} foodTitle="Salmon 74" foodDescription="150g filet z lososa připravený na grilu s bylinkovým máslem"/>
                        </div>
                        <button className={styles.buttonMore}>Zobrazit více</button>
                </div>
                <div className={styles.MenuLine}></div>
            </div>
        </>
    )
}