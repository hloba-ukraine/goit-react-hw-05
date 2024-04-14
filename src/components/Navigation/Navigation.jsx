import { NavLink, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import clsx from "clsx";
import css from "./Navigation.module.css";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export default function Navigation() {
  const addActiveClass = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={addActiveClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={addActiveClass}>
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>
    </header>
  );
}
