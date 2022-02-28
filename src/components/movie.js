import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, runtime, rating }) {
  return (
    <div className={styles.container}>
      <Link to={`/movie/${id}`}>
        <img className={styles.img} src={coverImg} alt={title} />
        <div className={styles.description}>
          <div className={styles.title__container}>
            <h2 className={styles.title}>
              {title.length > 35 ? `${title.slice(0, 35)}...` : title}
            </h2>
          </div>
          <div className={styles.ratingandruntime}>
            <div className={styles.rating}>rating : {rating} / 10</div>
            <div className={styles.runtime}>runtime : {runtime}min</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  runtime: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
};

export default Movie;
