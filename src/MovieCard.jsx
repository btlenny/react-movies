import { Link } from "react-router-dom"
import './MovieCard.css';

export default function MovieCard( props ) {
    return (
        <>
        <Link to={`/movies/${props.movie.title}`} className="movie-link">
          <div style={{"background": `url(${props.movie.posterPath}) no-repeat center center`, "WebkitBackgroundSize": "cover"}} className="item-card">
            <div className="title">
              <h2>{props.movie.title}</h2>
              <h5>Released: {props.movie.releaseDate}</h5>
            </div>
          </div>
        </Link>
      </>
    );
}