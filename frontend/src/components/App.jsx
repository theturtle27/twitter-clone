import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { check } from "../login";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={check() ? <MainPage /> : <Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
