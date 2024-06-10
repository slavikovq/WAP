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
                Naše stylová restaurace s americkou BBQ kuchyní nabízí burgery,
                steaky, pečená žebírka, křidýlka, ryby, saláty, dezerty a
                především naše domácí hranolky. Každý si u nás přijde na své – jak
                milovníci masa, tak vegetariáni.
              </p>
              <p>
                Naše kapacita restaurace je 100 míst, z toho jsou k dispozici dva
                salónky pro pořádání firemních nebo soukromých akcí.
              </p>
              <p>
                Věříme že Vás naše restaurace nadchne svojí kuchyní, designem a
                příjemnou obsluhou.
              </p>
              <p>
                Každý den pro Vás chystáme polední menu z těch nejkvalitnějších
                surovin.
              </p>
              <p>Naše krédo: kvalita, kvantita, prostě domácí je domácí.</p>
              <p>
                Těšíme se na Vaši návštěvu a doufáme, že se Vám trefíme do chutí.
              </p>
              <p>Děkujeme – Vaše America „Pod Věží"</p>
            </div>
            <div className={styles.aboutUsBox}>
              <div className={styles.aboutUsTime}>
                <h1>Otevírací doba</h1>
                <p>Pondělí: 11:00 až 22:00</p>
                <p>Úterý: 11:00 až 22:00</p>
                <p>Středa: 11:00 až 22:00</p>
                <p>Čtvrtek: 11:00 až 22:00</p>
                <p>Pátek: 11:00 až 22:00</p>
                <p>Sobota: 11:30 až 22:00</p>
                <p>Neděle: ZAVŘENO</p>
              </div>
            </div>
          </div>
          <div className={styles.AboutUsLine}></div>
        </div>
      </section>
    </>
  );
}
