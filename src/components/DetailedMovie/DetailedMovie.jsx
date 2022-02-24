import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../Styles/DetailedMovie.css";
import {MovieInfo} from "./MovieInfo"
import {Actor} from "./Actor"
import {FourColGrid} from "./FourColGrid"

export const DetailedMovie = () => {
  const movieID = useParams();
  const id = movieID.movieId;
  console.log(id);
  console.log(`Movie ID`, movieID);
  const [movie, setMovieData] = useState();
  const [actors,setActors] = useState();

  useEffect(() => {
    getMovieData(id);
    console.log("movie", movie);
  }, []);

  function getMovieData(id) {
    axios
      .get(`https://secure-tor-86460.herokuapp.com/Title/${id}`)
      .then((res) => {
        //  console.log(res);
        setMovieData(res.data);
		setActors(res.data.actorList);
      });
  }

  console.log(movie);
  return (
	  <div className="rmdb-movie">
		  {movie ?
		  <div>
          {/*<Navigation movie={movieName} />*/}
          <MovieInfo movie={movie} />
          {/*<MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />*/}
        </div>
        : null }

		{actors ?
        <div className="rmdb-movie-grid">
			<h1>CAST</h1>
          <FourColGrid header={'Actors'}>
            {actors.map( (element, i) => (
              <Actor key={i} actor={element} />
            ))}
          </FourColGrid>
        </div>
        : null }
	  </div>
  )
};
