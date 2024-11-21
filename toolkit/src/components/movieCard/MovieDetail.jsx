import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import apiService from '../services/apiService';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import './movieDetail.css';

function MovieDetail() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiService.getDataById(imdbID);
        if (data.Response !== 'False') {
          setMovie(data);
        } else {
          setError('Movie not found');
        }
      } catch (Error) {
        console.error('Failed to fetch movie details:', Error);
        setError('Failed to fetch movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [imdbID]);

  if (loading) {
    return <div><LoadingSpinner /></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const {
    Actors, Awards, BoxOffice, Country, DVD, Director, Genre, Language, Metascore,
    Plot, Poster, Production, Rated, Ratings, Released, Response, Runtime, Title,
    Type, Website, Writer, Year, imdbRating, imdbVotes,
  } = movie;

  return (
    <div className="movie-detail">
      <h1>{Title}</h1>
      <img src={Poster} alt={Title} />
      <p>
        <b>Actor: </b>
        {Actors}
      </p>
      <p>
        <b>Awards: </b>
        {Awards}
      </p>
      <p>
        <b>BoxOffice: </b>
        {BoxOffice}
      </p>
      <p>
        <b>Country: </b>
        {Country}
      </p>
      <p>
        <b>DVD: </b>
        {DVD}
      </p>
      <p>
        <b>Director: </b>
        {Director}
      </p>
      <p>
        <b>Genre: </b>
        {Genre}
      </p>
      <p>
        <b>Language: </b>
        {Language}
      </p>
      <p>
        <b>Metascore: </b>
        {Metascore}
      </p>
      <p>
        <b>Plot: </b>
        {Plot}
      </p>
      <p>
        <b>Production: </b>
        {Production}
      </p>
      <p>
        <b>Rated: </b>
        {Rated}
      </p>
      <p>
        <b>Ratings: </b>
        {Ratings && Ratings.length > 0 ? (
          <ul>
            {Ratings.map((rating) => (
              <li key={uuidv4()}>
                {rating.Source}
                :
                {rating.Value}
              </li>
            ))}
          </ul>
        ) : (
          <span>No Ratings Available</span>
        )}
      </p>
      <p>
        <b>Released: </b>
        {Released}
      </p>
      <p>
        <b>Response: </b>
        {Response}
      </p>
      <p>
        <b>Runtime: </b>
        {Runtime}
      </p>
      <p>
        <b>Title: </b>
        {Title}
      </p>
      <p>
        <b>Type: </b>
        {Type}
      </p>
      <p>
        <b>Website: </b>
        {Website}
      </p>
      <p>
        <b>Writer: </b>
        {Writer}
      </p>
      <p>
        <b>Year: </b>
        {Year}
      </p>
      <p>
        <b>imdbRating: </b>
        {imdbRating}
      </p>
      <p>
        <b>imdbVotes: </b>
        {imdbVotes}
      </p>
    </div>
  );
}

export default MovieDetail;
