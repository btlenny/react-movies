import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ user }) => {
    return (
      <nav className="flex-container">
        <ul className="flex=item">
          <li className ="btn">
            <Link to="/">Movies</Link>
          </li>
          <li className ="btn">
            <Link to="/actors">Actors</Link>
          </li>
        </ul>
     
      </nav>
    );
  };
  
  export default NavBar;