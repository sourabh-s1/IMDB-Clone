
//dotenv.config();

import React, { Component } from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
//import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar.component';
import FourColGrid from '../FourColGrid/FourColGrid';
import Actor from '../Actors/Actors';
import Spinner from '../Spinner/Spinner';
import './Movie.styles.css';

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    console.log(movieId);
    if (localStorage.getItem(`${movieId}`)) {
      let state = JSON.parse(localStorage.getItem(`${movieId}`))
      this.setState({ ...state })
    } else {
      this.setState({ loading: true })
      // First fetch the movie ...
      let endpoint = `https://secure-tor-86460.herokuapp.com/Title/${movieId}`;
      this.fetchItems(endpoint);
    }
  }

  fetchItems = (endpoint) => {
    const { movieId } = this.props.match.params;

    fetch(endpoint)
    .then(result => result.json())
    .then(result => {

      if (result.status_code) {
        // If we don't find any movie
        this.setState({ loading: false });
      } else {
        this.setState({ movie: result }, () => {
          // ... then fetch actors in the setState callback function
          let endpoint = ``;
          fetch(endpoint)
          .then(result => result.json())
          .then(result => {

            const directors = result.crew.filter( (member) => member.job === "Director");

            this.setState({
              actors: result.cast,
              directors,
              loading: false
            }, () => {
              localStorage.setItem(`${movieId}`, JSON.stringify(this.state));
            })
          })
        })
      }
    })
    .catch(error => console.error('Error:', error))
  }

  render() {
    const { movieName } = this.props.location;
    const { movie, directors, actors, loading } = this.state;

    return (
      <div className="rmdb-movie">
        {movie ?
        <div>
          {/*<Navigation movie={movieName} />*/}
          <MovieInfo movie={movie} directors={directors} />
          {/*<MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />*/}
        </div>
        : null }
        {actors ?
        <div className="rmdb-movie-grid">
          <FourColGrid header={'Actors'}>
            {actors.map( (element, i) => (
              <Actor key={i} actor={element} />
            ))}
          </FourColGrid>
        </div>
        : null }
        {!actors && !loading ? <h1>No movie found</h1> : null }
        {loading ? <Spinner /> : null}
      </div>
    )
  }
}

export default Movie;