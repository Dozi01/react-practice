import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import styles from "./Recommendation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Recommendation() {
  const [slideNum, setSlideNum] = useState(0);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return <div></div>;
}

export default Recommendation;
