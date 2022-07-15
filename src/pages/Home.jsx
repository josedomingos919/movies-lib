import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

export const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data?.results);
  };

  useEffect(() => {
    const toRatedUrl = `${moviesURL}top_rated?${apikey}`;
    getTopRatedMovies(toRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <>Carregando...</>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};
