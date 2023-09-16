import React, { useState } from 'react';
import PropTypes from 'prop-types';
import imdb from '../../assets/imdb.svg';
import tomato from '../../assets/tomato.svg';
import favourite from '../../assets/Favorite.svg';
import favClicked from '../../assets/favClicked.svg'
import '../../css/MovieCard.css';
import genredata from '../../data/genre.json';

const MovieCard = ({ id, title, release_date, rating, genres, year, isTVSeries, backgroundImage, isCurrent, likes }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Map genre IDs to their names
  const genreNames = genres.map((genreId) => {
    const genre = genredata.genres.find((item) => item.id === genreId);
    return genre ? genre.name : '';
  });

  // Extracting the year part from the date string
  const yearPart = year.split('-')[0];

  //Multiply vote_average by 10
  const votingAvg = rating * 10

  const popularity = Math.floor(likes)


  return (
    <div className="movie-card">
      {id === 238 && <div className="tv-series-label">TV SERIES</div>}
      {isFavorite && <img className="fav-button" style={{borderRadius: '50px'}} src={favClicked} />}
      <div className="movie-card-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <button className={`fav-button ${isFavorite ? 'favorited' : ''}`} onClick={toggleFavorite}>
          {isFavorite ? <img src={favourite} /> : <img src={favourite} />}
        </button>
      </div>
      <div className="movie-card-details">
        <p className="movie-year" style={{ color: '#9CA3AF', fontSize: '14px', fontWeight: 500 }}>
            {release_date}
        </p>
        <h2 className="movie-title" style={{ color: '#111827', fontSize: '20px', fontWeight: 500 }}>
          {title}
        </h2>
        <div style={{ display: 'flex', padding: 0, justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <img src={imdb} style={{ height: '35px', width: '35px' }} />
            <p style={{ marginLeft: '10px' }} className="movie-rating">
              {votingAvg}.0/100
            </p>
          </div>
          <div style={{ display: 'flex', padding: 0 }}>
            <img src={tomato} style={{ height: '17px', width: '16px', marginTop: 5 }} />
            <p className="movie-rating" style={{ marginLeft: '5px' }}>
              {popularity}%
            </p>
          </div>
        </div>
        <p className="movie-genres">{genreNames.join(', ')}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
  year: PropTypes.number.isRequired,
  isTVSeries: PropTypes.bool,
  backgroundImage: PropTypes.string.isRequired,
  genredata: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default MovieCard;
