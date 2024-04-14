import { Link, useLocation } from "react-router-dom";
const MovieList = ({ movie }) => {
  const location = useLocation();
  return (
    <ul>
      {movie.map((movie) => (
        <li key={movie.id}>
          <Link state={location} to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
