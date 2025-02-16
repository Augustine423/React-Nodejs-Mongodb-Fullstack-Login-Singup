// LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import axios from 'axios';  // axios for making HTTP requests
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // useNavigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending POST request to backend for login
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {
        email: email,
        password: password,
      });

      // If login is successful
      if (response.status === 200) {
        alert('Login successful');
        navigate('/dashboard');  // Redirect to dashboard or home page after successful login
      }
    } catch (err) {
      // Handle any errors from the API call (e.g., invalid credentials)
      const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
      setError(errorMessage);
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="button">Login</button>
        <p className="helper-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
