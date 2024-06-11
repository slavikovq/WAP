import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <>
      <section id="AboutUs">
        <div className={styles.aboutUs}>
          <p>O nás</p>
          <div className={styles.aboutUsContent}>
            <div className={styles.aboutUsInfo}>
              <p>
                Vítejte v restauraci America pod věží! Jsme první americká
                restaurace na Mělnicku, zaměřená na šťavnaté burgery, lahodná
                žebírka a další typická americká jídla. Naším cílem je nabídnout
                Vám jedinečný gastronomický zážitek a přenést Vás do atmosféry
                amerických dinerů. Snažíme se, aby každá Vaše návštěva byla pro
                Vás a Vaši společnost příjemným gastronomickým a společenským
                zážitkem díky přátelské obsluze a stylovému prostředí naší
                restaurace.
              </p>

              <p>
                Naším cílem je nabízet výborná jídla pečlivě připravená z
                čerstvých a autentických surovin za odpovídající cenu. Přijďte
                ochutnat některou z našich ručně připravovaných specialit. Naše
                jídla nejsou pouze o čerstvých ingrediencích, ale také o pohodě
                a dobré náladě. Udělejte si proto na Vaši návštěvu chvíli času,
                abyste si mohli Váš pokrm opravdu vychutnat a nejlépe jej zapít
                vynikajícím tuzemským nebo zahraničním pivem z naší nabídky.
              </p>
              <div className={styles.aboutUsCreds}></div>
              <div className={styles.CredsBoxes}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <p>
                Těšíme se na Vaši návštěvu a doufáme, že se Vám trefíme do
                chutí.
              </p>
              <p>Děkujeme – Vaše America „Pod Věží"</p>
            </div>
          </div>
          <div className={styles.AboutUsLine}></div>
        </div>
      </section>
    </>
  );
}
