import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://newsletterbackend.onrender.com/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.text();
      setMessage(result);

      // Clear the form field
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setMessage('Subscription failed. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Subscribe to MR Kiksy Newsletter</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <div className="form-group mb-3 w-50">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">Subscribe</button>
      </form>
      {message && <p className="text-center mt-3">{message}</p>}
    </div>
  );
};

export default SubscriptionForm;
