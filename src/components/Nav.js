import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Nav() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Link to={`/`}>Notflix</Link>
        </h1>
        <div className={styles.Nav__option__list}>
          {Group_key_arr.map((key) => {
            return (
              <div className={styles.Link} key={key}>
                <div className={styles.Link_sep}>
                  <Link to={`/page/${Group_obj[key]}/1`}>{key}</Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.icon__list}>
          <div className={styles.icon}>
            <Link to={`/`}>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
          <div className={styles.icon}>
            <Link to={`/`}>
              {" "}
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
