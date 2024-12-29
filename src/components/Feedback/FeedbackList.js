import React from 'react';
import './FeedbackList.css';

const FeedbackList = () => {
  const feedbacks = [
    { id: 1, name: 'John Doe', feedback: 'Great service!' },
    { id: 2, name: 'Jane Smith', feedback: 'Loved the products!' },
  ];

  return (
    <div className="feedback-list">
      <h2>Feedback List</h2>
      <ul>
        {feedbacks.map((item) => (
          <li key={item.id}>
            <strong>{item.name}:</strong> {item.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
