import React from 'react';
import { useParams } from 'react-router-dom';
import { usePostContext } from '../PostContext/PostContext';
import './movieDetail.css';

function MovieDetail() {
  const { imdbID } = useParams();
  const { selectedPost } = usePostContext();

  if (!selectedPost || selectedPost.imdbID !== imdbID) {
    return <div>Loading...</div>;
  }

  const {
    Poster, Title, Type, Year,
  } = selectedPost;

  return (
    <div className="movie-detail">
      <h1>{Title}</h1>
      <img src={Poster} alt={Title} />
      <p>
        Type:
        {Type}
      </p>
      <p>
        Year:
        {Year}
      </p>
    </div>
  );
}

export default MovieDetail;
