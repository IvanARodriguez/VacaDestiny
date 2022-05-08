import './App.css';
import { ToastContainer} from "react-toastify";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import Home from './component/pages/Home.js';
import Login from './component/pages/Login.js';
import Register from './component/pages/Register';

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
