import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from 'pages/HomePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <main className="flex min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;