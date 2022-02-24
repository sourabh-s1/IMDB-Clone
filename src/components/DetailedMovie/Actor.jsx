import "../../Styles/DetailedMovie.css";

export const Actor = ({actor}) => {
	const POSTER_SIZE = "w154";

	return (
		<div className="rmdb-actor">
		  <div className="rmdb-actorimgDiv">
		  <img
			src={actor.image}
			alt="actorthumb"
		  />
		  </div>
		  <div>
		  <div className="rmdb-actor-name">{actor.name}</div>
		  <div className="rmdb-actor-character">{actor.asCharacter}</div>
		  </div>
		</div>
	  )
}