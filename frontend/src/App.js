import React from "react";
import { Routes, Route } from "react-router-dom";
import C11table from "./components/c11";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/criteria1" element={<C11table />} />
      </Routes>
    </div>
  );
}

export default App;
