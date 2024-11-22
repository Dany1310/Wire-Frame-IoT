import React from 'react';
import {useState}from 'react';
import {useNavigate, Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import Menu from './pages/menu'
import Team1 from './pages/Team1'
import Inicio from './pages/inicio'
import "@fortawesome/fontawesome-free/css/all.min.css"
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/Team1" element={<Team1 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
