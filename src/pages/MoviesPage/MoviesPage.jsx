import { Field, Form, Formik } from "formik";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import s from "./moviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../../api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const onSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  const initialValues = {
    query,
  };

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.original_title
      .toLowerCase()
      .includes(query.toLocaleLowerCase().trim())
  );

  useEffect(() => {
    try {
      const getData = async () => {
        if (!query) {
          return;
        }
        const data = await getSearchMovie(query);

        if (data.length === 0) {
          setSearchParams([]);
          return;
        }
        setMovies(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [setSearchParams, query]);

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className={s.form}>
          <Field
            name="query"
            className={s.input}
          />
          <button
            type="submit"
            className={s.button}
          >
            Search
          </button>
        </Form>
      </Formik>
      <MovieList
        movies={filteredMovies}
        // setMovies={setMovies}
      />
    </div>
  );
};

export default MoviesPage;