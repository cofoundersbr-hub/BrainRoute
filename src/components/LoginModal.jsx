import React, { useState } from 'react';
import './LoginModal.css';

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend logic, just UI handling
    console.log('Login/Signup attempt:', { email, password, isSignUp });
    // In a real app, you would send this to a backend
    alert(isSignUp ? 'Sign up successful!' : 'Login successful!');
    handleClose();
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setIsSignUp(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-btn" onClick={handleClose}>&times;</button>

        {/* Modal Title */}
        <h2 className="modal-title">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h2>
        <p className="modal-subtitle">
          {isSignUp ? 'Sign up to get started' : 'Sign in to your account'}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        {/* Toggle Between Login and Signup */}
        <p className="toggle-text">
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Login' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  );
}
