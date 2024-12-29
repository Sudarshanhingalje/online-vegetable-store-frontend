import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback:', feedback);
    // Reset form fields after submission
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"         value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
 };
 
 export default FeedbackForm;
 