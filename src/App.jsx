import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";
import { lazy } from "react";
import { Suspense } from "react";

const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/movies"
            element={<MoviesPage />}
          />
          <Route
            path="/movies/:movieId"
            element={<MovieDetailsPage />}
          >
            <Route
              path="cast"
              element={<MovieCast />}
            />
            <Route
              path="reviews"
              element={<MovieReviews />}
            />
          </Route>
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;