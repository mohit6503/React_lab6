import React, { useState } from 'react';
import './Auth.css'; 

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Login:', { usernameOrEmail, password });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username or Email:
          <input
            type="text"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
