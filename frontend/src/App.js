import "./App.css";
import Home from "./components/Home";
import Landing from "./components/Landing";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <div className="App">
        <h1>DAYANANDA SAGAR COLLEGE OF ENGINEERING</h1>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
