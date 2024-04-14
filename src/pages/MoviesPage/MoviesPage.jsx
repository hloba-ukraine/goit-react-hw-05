import { Form, Formik, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { fetchSearchMovies } from "../../services/apiMoviesSearch";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
export default function MoviesPage() {
  const notify = () => toast("Please enter the search criteria");
  const initialValues = {
    searchTerm: "",
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  //   const [query, setQuery] = useState(null);
  const [films, setFilms] = useState(null);

  const handleSubmit = (values, actions) => {
    if (!values.searchTerm) {
      notify();
      return;
    } else {
      setSearchParams({ query: values.searchTerm });
    }
    actions.resetForm();
  };
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetchSearchMovies(query);
        setFilms(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [query]);
  return (
    <>
      <Toaster />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            id="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="searchTerm"
          />
          <br />
          <button type="submit"> Search</button>
        </Form>
      </Formik>

      {films && <MovieList movie={films} />}
    </>
  );
}
