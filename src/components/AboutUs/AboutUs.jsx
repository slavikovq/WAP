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
            <p className={styles.text}><b>Těšíme se na Vaši návštěvu a doufáme, že se Vám trefíme do chutí.</b> - <i>Vaše America „Pod Věží"</i></p>
              <div className={styles.title}>
                <Link to={"/oteviraci-doba"}><button>Otevírací doba</button></Link>
              </div>
          </div>
        </div>

      </section>
    </>
  );
}
