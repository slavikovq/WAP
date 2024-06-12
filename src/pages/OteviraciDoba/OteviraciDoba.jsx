import styles from "./OteviraciDoba.module.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function OteviraciDoba(){
    return(
        <>
        <Navbar />
        <section className={styles.oteviraci}>
            <div className={styles.oteviraciBox}>
                <h1>Otevírací doba</h1>
                <div className={styles.denCas}>
                    <span className={styles.den}>Pondělí</span>
                    <span className={styles.cas}>11:00 - 22:00</span>
                </div>
                <div className={styles.denCas}>
                    <span className={styles.den}>Úterý</span>
                    <span className={styles.cas}>11:00 - 22:00</span>
                </div>
                <div className={styles.denCas}>
                    <span className={styles.den}>Středa</span>
                    <span className={styles.cas}>11:00 - 22:00</span>
                </div>
                <div className={styles.denCas}>
                    <span className={styles.den}>Čtvrtek</span>
                    <span className={styles.cas}>11:00 - 22:00</span>
                </div>
                <div className={styles.denCas}>
                    <span className={styles.den}>Pátek</span>
                    <span className={styles.cas}>11:00 - 22:00</span>
                </div>
                <div className={styles.denCas}>
                    <span className={styles.den}>Sobota</span>
                    <span className={styles.cas}>11:30 - 22:00</span>
                </div>
                <div className={styles.denCas}>
                    <span className={styles.den}>Neděle</span>
                    <span className={styles.cas}>Zavřeno</span>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
}