import React, { useState } from 'react';

function QuizSessionForm({ onCreateSession }) {
  const [sessionDetails, setSessionDetails] = useState({
    quizName: '',
    timing: '',
    // Add more session details as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSessionDetails((prevSessionDetails) => ({
      ...prevSessionDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateSession(sessionDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Quiz Name:
        <input
          type="text"
          name="quizName"
          value={sessionDetails.quizName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Timing:
        <input
          type="text"
          name="timing"
          value={sessionDetails.timing}
          onChange={handleInputChange}
        />
      </label>
      <br />
      {/* Add more input fields for other session details */}
      <button type="submit">Create Session</button>
    </form>
  );
}

export default QuizSessionForm;
