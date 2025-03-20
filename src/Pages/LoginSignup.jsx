import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from '../Context/Theme_Context'; // Import the ThemeContext

const LoginSignup = () => {
  const { theme } = useContext(ThemeContext); // Get the current theme from the context
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_SIGNUP_KEY, // Ensure the environment variable is correct
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', password: '' });
      } else {
        const errorData = await response.json();
        console.error('Error data:', errorData);
        setError(errorData.message || 'Failed to send the message. Try again.');
        setSuccess(false);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to send the message. Try again.');
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h1 className="text-center">Sign up</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control username-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Your Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Signup'}
              </button>
              {success === true && (
                <p className="text-success text-center mt-3">
                  Message sent successfully!
                </p>
              )}
              {success === false && (
                <p className="text-danger text-center mt-3">
                  {error}
                </p>
              )}
            </form>
            <p className="text-center mt-3">
              You Don't have an account? <span className="text-primary">Signup Here</span>
            </p>
            <div className="form-check mt-3">
              <input type="checkbox" className="form-check-input" id="termsCheck" />
              <label className="form-check-label" htmlFor="termsCheck">
                By continuing, I agree to the terms of use & privacy policy
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;