import "../../Styles/DetailedMovie.css";

export const FourColGrid = ({children}) => {
	const renderElements = () => {
		const gridElements = children.map( (element, i) => (
		  <div key={i} className="rmdb-grid-element">
			{element}
		  </div>
		))
		return gridElements;
	  }

	  return (
		<div className="rmdb-grid">
		  {/*{header && !loading ? <h1>{header}</h1> : null}*/}
		  <div className="rmdb-grid-content">
			 {renderElements()}
		  </div>
		</div>
	  )
}