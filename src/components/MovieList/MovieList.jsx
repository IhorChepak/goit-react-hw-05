import { Link, useLocation } from "react-router-dom";
import s from "./movieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={s.movies_list}>
      <ul className={s.list}>
        {movies.map((item, index) => (
          <li key={item.id}>
            <Link
              to={`/movies/${item.id}-${index}`}
              className={s.link}
              state={location}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;