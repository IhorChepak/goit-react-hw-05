import { useEffect, useRef, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieById } from "../../api";
import s from "./movieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  // const navigate = useNavigate();

  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      const { data } = await getMovieById(movieId);
      setMovieById(data);
    };
    getData();
  }, [movieId]);

  if (!movieById) {
    return <h2>Loading..</h2>;
  }

  return (
    <div className={s.wraper}>
      {/* <button
        onClick={() => navigate(-1)}
        className={s.btnGoBack}
      >
        Go back
      </button> */}
      <NavLink
        to={goBackRef.current}
        className={s.btnGoBack}
      >
        Go back
      </NavLink>
      <div className={s.contentBox}>
        <img src={`https://image.tmdb.org/t/p/w300/${movieById.poster_path}`} />
        <div className={s.textBox}>
          <h2>{movieById.title}</h2>
          <p>
            User Score:{" "}
            {movieById.popularity ? Math.round(movieById.popularity) : "N/A"}%
          </p>
          <h3>Overview:</h3>
          <p>{movieById.overview}</p>
          <h4>Genres:</h4>
          <p>
            {movieById.genres && movieById.genres.length > 0
              ? movieById.genres.map((genre) => genre.name).join(", ")
              : "No genres available"}
          </p>
        </div>
      </div>{" "}
      <nav>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              to="cast"
              className={s.navLink}
            >
              MovieCast
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              className={s.navLink}
            >
              MovieReviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;