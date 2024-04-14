import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { fetchMovieDetails } from "../../services/apiMoviesDetailes";
import css from "./MovieDetailsPage.module.css";
import { Link, Routes, Route } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetchMovieDetails(movieId);

        setMovieDetails(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
    console.log(movieDetails);
  }, [movieId]);

  return (
    movieDetails && (
      <div>
        <Link to={backLinkRef.current}>Go back</Link>
        <div className={css.flex}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </div>
          <div>
            <h1>{movieDetails.title}</h1>
            <br></br>

            <h2>Overview: </h2>
            <p>{movieDetails.overview}</p>
            <br></br>
            <h2>Genres:</h2>
            <p>{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
        <div>
          <h2>Additional information:</h2>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Routes>
        </div>
      </div>
    )
  );
}
