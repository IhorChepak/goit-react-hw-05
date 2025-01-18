import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "../../api";
import s from "./movieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    try {
      if (!movieId) return;
      const getData = async () => {
        const data = await getCredits(movieId);
        setMovieCast(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  return (
    <div>
      <ul className={s.list}>
        {movieCast.map((item) => {
          return (
            <li
              key={item.id}
              className={s.item}
            >
              <img
                // src={`https://image.tmdb.org/t/p/w92/${item.profile_path}`}
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w92/${item.profile_path}`
                    : defaultImg
                }
                alt="Poster"
                className={s.img}
              />
              <p className={s.text}>{item.name}</p>
              <p className={s.text}>Character: {item.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieCast;