import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SecondPage from './SecondPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial */}
        <Route path="/second" element={<SecondPage />} /> {/* Segunda página */}
      </Routes>
    </Router>
  );
}

export default App;


