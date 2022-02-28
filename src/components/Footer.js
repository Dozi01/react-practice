import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>Copyright belongs to Dozi</div>
    </div>
  );
}

export default Footer;
