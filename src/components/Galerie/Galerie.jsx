import styles from "./Galerie.module.css" 
import interier1 from "./imgGalerie/interier1.jpg"
import interier2 from "./imgGalerie/interier2.jpg"
import interier3 from "./imgGalerie/interier3.jpg"
import interier4 from "./imgGalerie/interier4.jpg"
import interier5 from "./imgGalerie/interier5.jpg"
import interier6 from "./imgGalerie/interier6.jpg"
import interier7 from "./imgGalerie/interier7.jpg"
import interier8 from "./imgGalerie/interier8.jpg"
import interier9 from "./imgGalerie/interier9.jpg"
import interier10 from "./imgGalerie/interier10.jpg"

import jidlo1 from "./imgGalerie/jidlo1.jpg"
import jidlo2 from "./imgGalerie/jidlo2.jpg"
import jidlo3 from "./imgGalerie/jidlo3.jpg"
import jidlo4 from "./imgGalerie/jidlo4.jpg"
import jidlo5 from "./imgGalerie/jidlo5.jpg"
import jidlo6 from "./imgGalerie/jidlo6.jpg"
import jidlo7 from "./imgGalerie/jidlo7.jpg"
import jidlo8 from "./imgGalerie/jidlo8.jpg"
import jidlo9 from "./imgGalerie/jidlo9.jpg"
import jidlo10 from "./imgGalerie/jidlo10.jpg"

import akce1 from "./imgGalerie/akce1.jpg"
import akce2 from "./imgGalerie/akce2.jpg"
import akce3 from "./imgGalerie/akce3.jpg"
import akce4 from "./imgGalerie/akce4.jpg"
import akce5 from "./imgGalerie/akce5.jpg"
import akce6 from "./imgGalerie/akce6.jpg"
import akce7 from "./imgGalerie/akce7.jpg"
import akce8 from "./imgGalerie/akce8.jpg"
import akce9 from "./imgGalerie/akce9.jpg"
import akce10 from "./imgGalerie/akce10.jpg"



export default function Galerie(){
    return(
        <>
            <div className={styles.GalerieBox}>
                <div className={styles.InterierBox}>
                    <p>Interier</p>
                     <div className={styles.imagesBox}>
                        <a href={interier1} target="_blank"><img src={interier1} alt="" /></a>
                        <a href={interier2} target="_blank"><img src={interier2} alt="" /></a>
                        <a href={interier3} target="_blank"><img src={interier3} alt="" /></a>
                        <a href={interier4} target="_blank"><img src={interier4} alt="" /></a>
                        <a href={interier5} target="_blank"><img src={interier5} alt="" /></a>
                    </div>

                    <div className={styles.imagesBox}>
                        <a href={interier6} target="_blank"><img src={interier6} alt="" /></a>
                        <a href={interier7} target="_blank"><img src={interier7} alt="" /></a>
                        <a href={interier8} target="_blank"><img src={interier8} alt="" /></a>
                        <a href={interier9} target="_blank"><img src={interier9} alt="" /></a>
                        <a href={interier10} target="_blank"><img src={interier10} alt="" /></a>
                    </div>
                </div> 
                
                <div className={styles.InterierBox}>
                    <p>Jídlo</p>
                     <div className={styles.imagesBox}>
                        <a href={jidlo1} target="_blank"><img src={jidlo1} alt="" /></a>
                        <a href={jidlo2} target="_blank"><img src={jidlo2} alt="" /></a>
                        <a href={jidlo3} target="_blank"><img src={jidlo3} alt="" /></a>
                        <a href={jidlo4} target="_blank"><img src={jidlo4} alt="" /></a>
                        <a href={jidlo5} target="_blank"><img src={jidlo5} alt="" /></a>
                    </div>

                    <div className={styles.imagesBox}>
                        <a href={jidlo6} target="_blank"><img src={jidlo6} alt="" /></a>
                        <a href={jidlo7} target="_blank"><img src={jidlo7} alt="" /></a>
                        <a href={jidlo8} target="_blank"><img src={jidlo8} alt="" /></a>
                        <a href={jidlo9} target="_blank"><img src={jidlo9} alt="" /></a>
                        <a href={jidlo10} target="_blank"><img src={jidlo10} alt="" /></a>
                    </div>
                </div> 
                <div className={styles.InterierBox}>
                    <p>Akce</p>
                     <div className={styles.imagesBox}>
                        <a href={akce1} target="_blank"><img src={akce1} alt="" /></a>
                        <a href={akce2} target="_blank"><img src={akce2} alt="" /></a>
                        <a href={akce3} target="_blank"><img src={akce3} alt="" /></a>
                        <a href={akce4} target="_blank"><img src={akce4} alt="" /></a>
                        <a href={akce5} target="_blank"><img src={akce5} alt="" /></a>
                    </div>

                    <div className={styles.imagesBox}>
                        <a href={akce6} target="_blank"><img src={akce6} alt="" /></a>
                        <a href={akce7} target="_blank"><img src={akce7} alt="" /></a>
                        <a href={akce8} target="_blank"><img src={akce8} alt="" /></a>
                        <a href={akce9} target="_blank"><img src={akce9} alt="" /></a>
                        <a href={akce10} target="_blank"><img src={akce10} alt="" /></a>
                    </div>
                </div> 
            </div>
        </>
    )
}
