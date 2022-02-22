import { Link } from "react-router-dom";
import Movie from "./Movie";
import styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Nav() {
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <Link to={`/`}>Notflix</Link>
        </h2>
        <ul className={styles.Nav__option__list}>
          <li>
            <Link to={`/`}>High Rating</Link>
          </li>
          <li>
            <Link to={`/`}>Romance</Link>
          </li>
          <li>
            <Link to={`/`}>Thriller</Link>
          </li>
          <li>
            <Link to={`/`}>Animation</Link>
          </li>
        </ul>
        <ul className={styles.icon__list}>
          <li>
            <Link to={`/`}>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
          <li>
            <Link to={`/`}>
              {" "}
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
