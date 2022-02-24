import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {MovieThumb} from './MovieThumb';
import "../../Styles/DetailedMovie.css";

export const MovieInfo = ({movie}) => (
  <div className="rmdb-movieinfo"
    style={{
      background: "black"
    }}
  >
    <h1 className="movieTitle">{movie.title}</h1>
    <div className="rmdb-movieinfo-content">
      <div className="rmdb-movieinfo-thumb">
        <MovieThumb
          image={movie.image}
          clickable={false}
        />
      </div>
      <div>
      <iframe width="866" height="487" src={movie.trailer.linkEmbed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="rmdb-movieinfo-text">

        <h3>PLOT</h3>
        <p>{movie.plot}</p>
        <h3>IMDB RATING</h3>
        <div className="rmdb-rating">
          <meter min="0" max="100" optimum="100" low="40" high="70" value={ movie.imDbRating * 10}></meter>
          <p className="rmdb-score">{movie.imDbRating}</p>
        </div>
        {/*{directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
        {directors.map( (element, i) => {
          return <p key={i} className="rmdb-director">{element.name}</p>
        })}*/}
      </div>
      {/*<FontAwesome className="fa-film" name="film" size="5x" />*/}
    </div>
  </div>
)
