import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import LoginPage from './LoginPage.jsx';
import MoviesListPage from './MoviesListPage.jsx';
import MoviesDetailPage from './MoviesDetailPage.jsx';
import ActorListPage from './ActorListPage.jsx';


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
            <NavBar />
            <Routes>
              {/* Use unique paths for each route */}
              <Route path="/movies/" element={<MoviesListPage />} />
              <Route path="/movies/:movieName" element={<MoviesDetailPage />} />
              <Route path="/actors" element={<ActorListPage />} />
            </Routes>
          </>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </main>
    </Router>
  );
}

