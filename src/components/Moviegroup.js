import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Moviegroup.module.css";

function Moviegroup({ id, coverImg, title, runtime, rating, summary }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <div className={styles.container}>
          <img className={styles.coverimg} src={coverImg} alt={title} />
          <div className={styles.description}>
            <div className={styles.title}>
              {title.length > 45 ? `${title.slice(0, 45)}...` : title}
            </div>
            <div className={styles.ratingandruntime}>
              <div className={styles.rating}>{rating} / 10</div>
              <div className={styles.runtime}>{runtime} min</div>
            </div>
            <div className={styles.summary}>
              {summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

Moviegroup.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  runtime: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
};

export default Moviegroup;
