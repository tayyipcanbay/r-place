import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './pages/welcome';
import Canvas from './pages/canvas';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/canvas" element={<Canvas/>}/>
      </Routes>
    </Router>
  );
}

export default App;
