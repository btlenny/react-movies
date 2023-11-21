import './MoviesListPage.css';
import MovieCard from './MovieCard.jsx';


export default function MoviesListPage(props) {
    return (
      <div className="container">
      {
        props.movies.map(movie => {
          return <MovieCard key={movie.title} movie={movie} />
        })
      }
    </div>
      );
}
