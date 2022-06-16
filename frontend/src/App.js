import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
// import Criteria1 from "./components/Criteria1";
import { Criteria2 } from "./components/Criteria2";

import Landing from "./components/Landing";
import Login from "./components/Login";
// import { Routes, Route } from "react-router-dom";
// import C11table from "./components/C11";
import Criteria1 from "./components/Criteria1";
import { Criteria3 } from "./components/Criteria3";

import { Criteria4 } from "./components/Criteria4";
import { Criteria5 } from "./components/Criteria5";
import { Criteria6 } from "./components/Criteria6";
// import Navbar from './components/Navbar';
import Options from "./components/Options";
import Criterias from "./components/Criterias";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Options />} />
        <Route path="/dashboard" element={<Criterias />} />

        <Route path="/criteria1" element={<Criteria1 />} />
        <Route path="/criteria2" element={<Criteria2 />} />
        <Route path="/criteria3" element={<Criteria3 />} />
        <Route path="/criteria4" element={<Criteria4 />} />
        <Route path="/criteria5" element={<Criteria5 />} />
        <Route path="/criteria6" element={<Criteria6 />} />
      </Routes>
    </div>
  );
}

export default App;