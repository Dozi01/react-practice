import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import Loading from "../components/Loading";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  const genres = movie.genres;
  const bgImgUrl = movie.background_image_original;

  const bgImg = {
    backgroundImage: `url(${bgImgUrl})`,
    backgroundSize: "cover",
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div className={styles.bgimg} style={bgImg}></div>
          <div className={styles.box}>
            <div className={styles.movieinfo}>
              <div className={styles.poster}>
                <img
                  className={styles.coverimg}
                  src={movie.medium_cover_image}
                  alt={movie.title}
                />
              </div>
              <div className={styles.description}>
                <h2 className={styles.title}>{movie.title}</h2>
                <div className={styles.rating}>
                  rating : {movie.rating} / 10
                </div>
                <div className={styles.runtime}>
                  runtime : {movie.runtime} min
                </div>

                <ul className={styles.movie__genres}>
                  {genres &&
                    genres.map((g) => (
                      <li className={styles.movie__genre} key={g}>
                        {g}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className={styles.summary}>{movie.description_intro}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
