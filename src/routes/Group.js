import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Group.module.css";
import Loading from "../components/Loading";
import Movie from "../components/Movie";

function Group() {
  const [loading, setLoading] = useState(true);
  const { group, page } = useParams();
  const [movies, setMovies] = useState([]);
  const [slideNum, setSlideNum] = useState(0);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?${page}&${group}&sort_by=rating`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [group, page]);
  console.log("group: " + group + " pages:" + page);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
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
  );
}

export default Group;
