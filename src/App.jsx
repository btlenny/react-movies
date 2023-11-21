import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar.jsx';
import LoginPage from './LoginPage.jsx';
import MoviesListPage from './MoviesListPage.jsx';
import MoviesDetailPage from './MoviesDetailPage.jsx';
import ActorListPage from './ActorListPage.jsx';
import { movies } from './data.js';


export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <Router>
      <main className="App">
        {user ? (
          <>
            <h1>Welcome, {user}!</h1>
            <NavBar user={user} />
            <Routes>
              {/* Use unique paths for each route */}
              <Route path="/" element={<MoviesListPage movies={movies}/>} />
              <Route path="/movies/:movieName" element={<MoviesDetailPage movies={movies}/>} />
              <Route path="/actors" element={<ActorListPage movies={movies}/>} />
              <Route path="/" element={<div>Home Page Content</div>} />
            </Routes>
          </>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </main>
    </Router>
  );
}

