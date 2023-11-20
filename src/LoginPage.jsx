import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
  
    const handleLogin = () => {
      // Perform any validation if needed
      onLogin(username);
    };
  
    return (
      <div>
        <h2>Login Page</h2>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };

  export default LoginPage;
  