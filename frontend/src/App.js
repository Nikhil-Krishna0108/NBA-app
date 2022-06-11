import React from "react";
import { Routes, Route } from "react-router-dom";
import C11table from "./components/C11";
import { Criteria1 } from "./components/Criteria1";
import { Criteria2 } from "./components/Criteria2";
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/criteria1" element={<Criteria1 />} />
        <Route path="/criteria2" element={<Criteria2 />} />
      </Routes>
    </div>
  );
}

export default App;
