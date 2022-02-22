import { Link } from "react-router-dom";
import Movie from "./Movie";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.footer__container}>
      <h2>Footer Sample</h2>
      <h3>Made by Dozi</h3>
      <FontAwesomeIcon icon={faGithub} />
    </div>
  );
}

export default Footer;
