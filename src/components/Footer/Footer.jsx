import styles from "./Footer.module.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section id="Kontakt">
        <div className={styles.footer}>
          <div className={styles.logo}>
            <img src={logo} alt="" srcset="" />
          </div>
          <div className={styles.contact}>
            <h3>kontakt</h3>
            <p>
              <i class="fa-solid fa-phone"></i> 326-322-007
            </p>
            <p>
              <i class="fa-brands fa-internet-explorer"></i>{" "}
              www.americapodvezi.com
            </p>  
            <p>
            <i class="fa-solid fa-house"></i>{" "}
            Komenského náměstí 61
            29301 Mladá Boleslav
            </p>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.537979788013!2d14.901665903693214!3d50.412447520590845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470955bee0ab33f5%3A0x7a74a19c4bffae9a!2zQW1lcmljYSDigJ5Qb2QgVsSbxb7DreKAnA!5e0!3m2!1sen!2scz!4v1717438477211!5m2!1sen!2scz"
              width="400"
              height="200"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
