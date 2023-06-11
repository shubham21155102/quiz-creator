import React, { useState } from 'react';
import './QuizSessionManagement.css'; // Import the CSS file

const QuizSessionManagement = () => {
  const [sessionName, setSessionName] = useState('');
  const [quizSessions, setQuizSessions] = useState([
    { id: 1, name: 'Quiz Session 1' },
    { id: 2, name: 'Quiz Session 2' },
    { id: 3, name: 'Quiz Session 3' },
  ]);

  const [editingSessionId, setEditingSessionId] = useState(null);

  const handleSessionNameChange = (e) => {
    setSessionName(e.target.value);
  };

  const handleCreateSession = () => {
    if (sessionName) {
      const newSession = {
        id: quizSessions.length + 1,
        name: sessionName,
      };
      setQuizSessions([...quizSessions, newSession]);
      setSessionName('');
    }
  };

  const handleEditSession = (sessionId) => {
    setEditingSessionId(sessionId);
    const session = quizSessions.find((session) => session.id === sessionId);
    setSessionName(session.name);
  };

  const handleUpdateSession = () => {
    const updatedSessions = quizSessions.map((session) =>
      session.id === editingSessionId ? { ...session, name: sessionName } : session
    );
    setQuizSessions(updatedSessions);
    setSessionName('');
    setEditingSessionId(null);
  };

  const handleDeleteSession = (sessionId) => {
    const updatedSessions = quizSessions.filter((session) => session.id !== sessionId);
    setQuizSessions(updatedSessions);
    setEditingSessionId(null);
  };

  return (
    <div className="container">
      <h2>Quiz Session Management</h2>

      {/* Quiz session creation form */}
      <div className="form-group">
        <label className="label" htmlFor="sessionName">
          Session Name
        </label>
        <input
          className="input"
          type="text"
          id="sessionName"
          value={sessionName}
          onChange={handleSessionNameChange}
        />
      </div>

      {editingSessionId ? (
        <>
          <button className="button" onClick={handleUpdateSession}>
            Update Session
          </button>
          <button className="button" onClick={() => setEditingSessionId(null)}>
            Cancel
          </button>
        </>
      ) : (
        <button className="button" onClick={handleCreateSession}>
          Create Session
        </button>
      )}

      {/* Quiz session list */}
      <h3>Quiz Sessions</h3>
      {quizSessions.map((session) => (
        <div className="quiz-session" key={session.id}>
          <div className="quiz-session__details">
            <span className="quiz-session__id">Session ID: {session.id}</span>
            <div className="quiz-session__actions">
              <button className="button edit-button" onClick={() => handleEditSession(session.id)}>
                Edit
              </button>
              <button className="button delete-button" onClick={() => handleDeleteSession(session.id)}>
                Delete
              </button>
            </div>
          </div>
          <div className="quiz-session__name">
            Session Name: {editingSessionId === session.id ? (
              <input
                type="text"
                value={sessionName}
                onChange={handleSessionNameChange}
              />
            ) : (
              session.name
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizSessionManagement;
