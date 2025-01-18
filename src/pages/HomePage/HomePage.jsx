import { useEffect, useState } from "react";
// import { getMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./homePage.module.css";
import { getMovies } from "../../api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getMovies();
      setMovies(response);
    };
    getData();
  }, []);

  return (
    <div className={s.section}>
      <h2>Trending today:</h2>
      <MovieList
        movies={movies}
        setMovies={setMovies}
      />
    </div>
  );
};

export default HomePage;