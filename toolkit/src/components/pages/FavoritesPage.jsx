import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../movieCard/MovieCard';
import './favoritesPage.css';

function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="favorites-page">
      <h2>Избранные фильмы</h2>
      <div className="movie-list">
        {favorites.map((movie) => (
          <div className="card-container" key={movie.imdbID}>
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
