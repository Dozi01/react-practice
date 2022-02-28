import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Group.module.css";
import Loading from "../components/Loading";
import Moviegroup from "../components/Moviegroup";

function Group() {
  const [loading, setLoading] = useState(true);
  const { group } = useParams();
  const [movies, setMovies] = useState([]);
  const movieArr = [];

  const getMovies = async () => {
    for (let i = 1; i < 11; i++) {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?page=${i}&${group}&sort_by=rating`
        )
      ).json();
      json.data.movies.map((movie) => movieArr.push(movie));
    }
    setMovies(movieArr);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, [group]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          {movies.map((movie) => (
            <Moviegroup
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              runtime={movie.runtime}
              rating={movie.rating}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Group;
