import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movie__container}>
      <Link to={`/movie/${id}`}>
        <img className={styles.movie__img} src={coverImg} alt={title} />
        <div className={styles.movie__description}>
          <h2 className={styles.movie__title}>{title}</h2>
          {/* <p className={styles.movie__summary}>{summary}</p> */}
          <ul className={styles.movie__genres}>
            {genres.map((g) => (
              <li className={styles.movie__genre} key={g}>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string.isRequired),
};

export default Movie;
