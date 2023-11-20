import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/actors">Actors</Link>
          </li>
        </ul>
        {user && <p>Welcome, {user}!</p>}
      </nav>
    );
  };
  
  export default NavBar;