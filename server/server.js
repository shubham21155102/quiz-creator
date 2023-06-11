const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// In-memory storage for quiz sessions
let quizSessions = [];

// Create a quiz session
app.post('/api/quiz-sessions', (req, res) => {
  const sessionDetails = req.body;
  quizSessions.push(sessionDetails);
  res.status(201).json({ message: 'Quiz session created successfully' });
});

// Delete a quiz session
app.delete('/api/quiz-sessions/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  quizSessions = quizSessions.filter((session) => session.id !== sessionId);
  res.json({ message: 'Quiz session deleted successfully' });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
