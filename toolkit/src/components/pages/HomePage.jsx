import React, { useState } from 'react';
import Search from '../search/Search';
import apiService from '../services/apiService';
import MovieCard from '../movieCard/MovieCard';
import './homePage.css';
import { usePostContext } from '../PostContext/PostContext';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';

function HomePage() {
  const { posts, setPosts } = usePostContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchTerm) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await apiService.getData(searchTerm);
      if (data.Response === 'False') {
        setError('Ничего не найдено');
        setPosts([]);
      } else {
        setPosts(data.Search || []);
      }
    } catch (caughtError) {
      setError(caughtError.message);
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <p>
          Ошибка:
          {error}
        </p>
      ) : (
        <div className="movie-list">
          {posts.map((item) => (
            /* eslint-disable react/jsx-props-no-spreading */
            <div className="card-container" key={item.imdbID}><MovieCard {...item} /></div>
          ))}
        </div>
      )}
    </>
  );
}

export default HomePage;
