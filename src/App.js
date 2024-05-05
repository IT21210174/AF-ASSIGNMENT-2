import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//import LoginForm from '../pages/login';
import About from './pages/about';
import Home from './pages/Homepage';
import MasRoverPhoto from './pages/MasRoverPhoto';
import PictureOfDay from './pages/apod';
import LoginForm from './pages/Login';
import Epic from './pages/Epic';
import Register from './pages/Register';
// import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/" element={<LoginForm />} />
        <Route path="/apod" element={<PictureOfDay />} />
        <Route path="/MasRoverPhoto" element={<MasRoverPhoto />} />
        <Route path="/Epic" element={<Epic/>} />
        <Route path="/Register" element={<Register/>} />
       
      </Routes>
    </Router>
  );
}

export default App;
