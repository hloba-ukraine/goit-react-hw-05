import Navigation from "./Navigation/Navigation";
import Loader from "./Loader/Loader";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
