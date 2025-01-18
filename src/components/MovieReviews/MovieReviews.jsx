import { useEffect, useState } from "react";
import { getReviews } from "../../api";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);
  // console.log(`reviews: ${movieReviews}`);

  useEffect(() => {
    try {
      if (!movieId) return;
      const getData = async () => {
        const review = await getReviews(movieId);
        setMovieReviews(review);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieReviews.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieReviews;