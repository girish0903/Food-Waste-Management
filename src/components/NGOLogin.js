import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NGOLogin.css'

function NGOLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here for NGOs
    console.log('NGO Login:', { email, password });
    // Redirect to NGO page after successful login
    navigate('/ngo');
  };

  return (
    <div>
      <h2>NGO Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default NGOLogin;
