import { useEffect } from "react";
import { fetchMovies } from "../../services/apiTrandMovies";
import { useState } from "react";

export const useTrandMovies = () => {
  const [films, setfilms] = useState([]);
  useEffect(() => {
    async function fetchTrandMovies() {
      try {
        const response = await fetchMovies();
        setfilms(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrandMovies();
  }, []);
  return films;
};
