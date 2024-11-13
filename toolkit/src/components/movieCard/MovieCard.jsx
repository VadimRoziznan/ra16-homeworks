import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { usePostContext } from '../PostContext/PostContext';
import { addFavorite, removeFavorite } from '../store/store';
import './movieCard.css';

function MovieCard(props) {
  const {
    Poster, Title, Type, Year, imdbID,
  } = props;
  const { setPosts, setSelectedPost } = usePostContext();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((movie) => movie.imdbID === imdbID);

  useEffect(() => {
    setPosts((prevPosts) => {
      if (!prevPosts.some((post) => post.imdbID === imdbID)) {
        return [...prevPosts, props];
      }
      return prevPosts;
    });
  }, [props, imdbID, setPosts]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(imdbID));
    } else {
      dispatch(addFavorite(props));
    }
  };

  return (
    <div className="card">
      <Link
        className="link"
        to={`/movies/${imdbID}`}
        onClick={() => setSelectedPost(props)}
      >
        <div>
          <img src={Poster} alt={Title} />
        </div>
        <div className="card-content">
          <h3>{Title}</h3>
          <p>{Type}</p>
          <p>{Year}</p>
        </div>
      </Link>
      <button type="button" className="favorite-button" onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default MovieCard;
