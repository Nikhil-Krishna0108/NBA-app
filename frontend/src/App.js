import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Criteria1 from "./components/Criteria1";
import { Criteria2 } from "./components/Criteria2";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Navbar />} />

        <Route path="/criteria1" element={<Criteria1 />} />
        <Route path="/criteria2" element={<Criteria2 />} />
      </Routes>
    </div>
  );
}

export default App;
