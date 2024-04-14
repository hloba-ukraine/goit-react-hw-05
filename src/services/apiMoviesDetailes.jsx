import axios from "axios";

export const fetchMovieDetails = async (id) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWFiNmVlMWIxMWY3YTU1NTE1ZjJlM2VjOTU3ODEwOSIsInN1YiI6IjY2MThhNmRjZGQ3MzFiMDE3ZTBhNzc4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kh7iyGuOTiR1aOOphPyNYmmIisRSkt1wbVvU-jmBWr0",
    },
  };

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}`,
    options
  );

  return data;
};
