import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import './MovieInfo.styles.css';

const MovieInfo = ({ movie, directors }) => (
  <div className="rmdb-movieinfo"
    style={{
      background: "black"
    }}
  >
    <h1 className="movieTitle">{movie.title}</h1>
    <div className="rmdb-movieinfo-content">
      <div className="rmdb-movieinfo-thumb">
        <MovieThumb
          image={movie.poster_path ? `https://secure-tor-86460.herokuapp.com/Title/tt1464335` : './images/no_image.jpg'}
          clickable={false}
        />
      </div>
      <div>
      <iframe width="866" height="487" src="https://www.youtube.com/embed/HLr7XDZO3tc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      {/*<div className="rmdb-movieinfo-text">

        <h3>PLOT</h3>
        <p>{movie.overview}</p>
        <h3>IMDB RATING</h3>
        <div className="rmdb-rating">
          <meter min="0" max="100" optimum="100" low="40" high="70" value={ movie.vote_average * 10}></meter>
          <p className="rmdb-score">{movie.vote_average}</p>
        </div>
        {directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
        {directors.map( (element, i) => {
          return <p key={i} className="rmdb-director">{element.name}</p>
        })}
      </div>*/}
      {/*<FontAwesome className="fa-film" name="film" size="5x" />*/}
    </div>
  </div>
)

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array
}

export default MovieInfo;