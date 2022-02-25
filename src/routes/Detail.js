import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  const genres = movie.genres;
  console.log(genres);
  return (
    <div className={styles.Detail__container}>
      <div className={styles.Detail__box}>
        <div>
          <div className={styles.Detail__poster}>
            <img
              className={styles.Detail__coverimg}
              src={movie.medium_cover_image}
              alt={movie.title}
            />
          </div>
          <div className={styles.Detail__description}>
            <h2 className={styles.Detail__title}>{movie.title}</h2>
            <span className={styles.Detail__rating}>
              rating : {movie.rating} / 10
            </span>
            <span className={styles.Detail__runtime}>
              runtime : {movie.runtime} (min)
            </span>
            <ul className={styles.movie__genres}>
              {genres.map((g) => (
                <li className={styles.movie__genre} key={g}>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.Detail__summary}>summary</div>
      </div>
    </div>
  );
}

export default Detail;
