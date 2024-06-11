import styles from "./AboutUs.module.css";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <section id="AboutUs">
        <div className={styles.aboutUs}>

          <p className={styles.AboutUsTitle}>O nás</p>
          <div className={styles.aboutUsContent}>
            <div className={styles.aboutUsInfo}>
              <p>
                Vítejte v restauraci America pod věží! Jsme stylová restaurace s
                americkou BBQ kuchyní. Naším cílem je nabídnout Vám jedinečný
                gastronomický zážitek a přenést Vás do atmosféry amerických
                dinerů. Snažíme se, aby každá Vaše návštěva byla pro Vás a Vaši
                společnost příjemným gastronomickým a společenským zážitkem díky
                přátelské obsluze a útulnému prostředí naší restaurace.
              </p>
              <p>
                Naším cílem je nabízet výborná jídla pečlivě připravená z
                čerstvých a autentických surovin za odpovídající cenu. Přijďte
                ochutnat některou z našich ručně připravovaných specialit. Naše
                jídla nejsou pouze o čerstvých ingrediencích, ale také o pohodě
                a dobré náladě.
              </p>
            </div>
            <div className={styles.aboutUsCreds}></div>
            <div className={styles.CredsBoxes}>
              <div className={styles.Box}>
                <i class="fa-solid fa-chair"></i>
                <p>Kapacita <br/> až 100 míst</p>
              </div>
              <div className={styles.Box}>
                <i class="fa-solid fa-face-smile"></i>
                <p>Příjemná <br />obsluha</p>
              </div>
              <div className={styles.Box}>
                <i class="fa-solid fa-burger"></i>
                <p>Nejkvalitnější <br />suroviny</p>
              </div>
              <div className={styles.Box}>
                <i class="fa-solid fa-ranking-star"></i>
                <p>Kvalita, kvantita, prostě domácí je domácí</p>
              </div>
            </div>
            <div className={styles.title}>
            <p>
              Těšíme se na Vaši návštěvu a doufáme, že se Vám trefíme do chutí.
            </p>
            <p>Děkujeme – Vaše America „Pod Věží"</p>
            <Link to="/Open"><button><p>otevírací doba</p></button></Link>
          </div>
          </div>
                  <div className={styles.AboutUsLine}></div>
        </div>

      </section>
    </>
  );
}
