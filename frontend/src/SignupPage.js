import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';  // You can also use fetch if you prefer
import './SignupPage.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Sending POST request to backend (replace with your actual endpoint)
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/signup`, {
        email: email,
        password: password,
      });

      // Handle the response (successful signup)
      if (response.status === 201) {
        alert('Signup successful');
      }
    } catch (err) {
      // Handle any errors from the API call
      setError('Signup failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
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
        <input
          type="password"
          className="input-field"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="button">Sign Up</button>
        <p className="helper-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
