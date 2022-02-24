import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import Loading from "./Loading";
import styles from "./Slide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function Slide({ ytsapi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [slideNum, setSlideNum] = useState(0);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?${ytsapi}&sort_by=years`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const onClickR = () => {
    if (slideNum === 8) {
      return;
    }
    setSlideNum((current) => current + 1);
  };

  const onClickL = () => {
    if (slideNum === 0) {
      return;
    }
    setSlideNum((current) => current - 1);
  };

  console.log(movies);
  return (
    <div className={styles.slide__container}>
      <div className={styles.slide__show}>
        {loading ? (
          <Loading />
        ) : (
          <div
            className={styles.slide__movies}
            style={{ transform: `translateX(${-slideNum * 2 * 216}px)` }}
          >
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
      {loading ? null : (
        <div className={styles.slide__controller}>
          <button className={styles.slide__buttonL} onClick={onClickL}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className={styles.slide__buttonR} onClick={onClickR}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Slide;
