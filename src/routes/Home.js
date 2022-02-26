import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Recommendation from "../components/Recommendation";
import Slide from "../components/Slide";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <div className={styles.home__container}>
      {Group_key_arr.map((key) => {
        return (
          <div className={styles.home__slide} key={key}>
            <Link to={`/page/${Group_obj[key]}/1`}>
              <div className={styles.home__menu}>
                <div className={styles.home__icon}>
                  <FontAwesomeIcon icon={faClapperboard} />
                </div>
                <h1 className={styles.home__menu__title}>{key}</h1>
              </div>
            </Link>
            <Slide key={key} ytsapi={Group_obj[key]} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
