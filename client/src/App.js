import React from 'react';
import './App.css';
import { ToastContainer} from "react-toastify";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
