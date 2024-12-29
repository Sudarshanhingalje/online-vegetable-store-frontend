import React from 'react';
import './FeedbackList.css';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';

const Feedback = () => {
  return (
    <div className="feedback">
      <h2>Feedback</h2>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default Feedback;
