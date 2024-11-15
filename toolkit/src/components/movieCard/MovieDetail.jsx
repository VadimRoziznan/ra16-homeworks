import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../services/apiService';
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
        console.log(data);
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const {
    Actor, Awards, BoxOffice, Country, DVD, Director, Genre, Language, Metascore,
    Plot, Poster, Production, Rated, Ratings, Released, Response, Runtime, Title,
    Type, Website, Writer, Year, imdbRating, imdbVotes,
  } = movie;

  return (
    <div className="movie-detail">
      <h1>{Title}</h1>
      <img src={Poster} alt={Title} />
      <p>
        Actor:
        {Actor}
      </p>
      <p>
        Awards:
        {Awards}
      </p>
      <p>
        BoxOffice:
        {BoxOffice}
      </p>
      <p>
        Country:
        {Country}
      </p>
      <p>
        DVD:
        {DVD}
      </p>
      <p>
        Director:
        {Director}
      </p>
      <p>
        Genre:
        {Genre}
      </p>
      <p>
        Language:
        {Language}
      </p>
      <p>
        Metascore:
        {Metascore}
      </p>
      <p>
        Plot:
        {Plot}
      </p>
      <p>
        Production:
        {Production}
      </p>
      <p>
        Rated:
        {Rated}
      </p>
      <p>
        Ratings:
        {Ratings && Ratings.length > 0 ? (
          <ul>
            {Ratings.map((rating, index) => (
            /* eslint-disable react/jsx-props-no-spreading */
              <li key={index}>{rating.Source}: {rating.Value}</li>
            ))}
          </ul>
        ) : (
          <span>No Ratings Available</span>
        )}
      </p>
      <p>
        Released:
        {Released}
      </p>
      <p>
        Response:
        {Response}
      </p>
      <p>
        Runtime:
        {Runtime}
      </p>
      <p>
        Title:
        {Title}
      </p>
      <p>
        Type:
        {Type}
      </p>
      <p>
        Website:
        {Website}
      </p>
      <p>
        Writer:
        {Writer}
      </p>
      <p>
        Year:
        {Year}
      </p>
      <p>
        imdbRating:
        {imdbRating}
      </p>
      <p>
        imdbVotes:
        {imdbVotes}
      </p>
    </div>
  );
}

export default MovieDetail;
