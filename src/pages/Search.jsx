import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { MovieCard } from "../components/MovieCard";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const [topMovies, setTopMovies] = useState([]);

  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data?.results);
  };

  useEffect(() => {
    setTopMovies([]);
    const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryUrl);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {topMovies.length === 0 && <>Carregando...</>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};
