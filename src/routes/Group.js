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
  }, []);
  return (
    <div>
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
    </div>
  );
}
// const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function Group() {
//   const { group, page } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);

//   const getMovies = async () => {
//     const json = await (
//       await fetch(
//         `https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`
//       )
//     ).json();
//     setMovies(json.data.movies);
//     setLoading(false);
//   };

//   useEffect(() => {
//     setLoading(true);
//     getMovies();
//     return;
//   }, [group, page]);

//   return (
//     <div className={styles.container}>
//       {loading ? (
//         <Load />
//       ) : (
//         <div className={styles.movies}>
//           {movies.map((movie) => (
//             <MovieGroup
//               key={movie.id}
//               id={movie.id}
//               title={movie.title}
//               coverImg={movie.medium_cover_image}
//               rating={movie.rating}
//               runtime={movie.runtime}
//               summary={movie.summary}
//               year={movie.year}
//             />
//           ))}
//         </div>
//       )}
//       {loading ? null : (
//         <div className={styles.footer}>
//           <div className={styles.list}>
//             {List_arr.map((lst) => {
//               return (
//                 <Link key={lst} to={`/page/${group}/${lst}`}>
//                   {lst}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

export default Group;
