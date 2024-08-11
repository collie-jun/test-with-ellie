import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Callback from './components/callback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/kakao/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
