import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [loggedin, setLoggedin] = useState(true);
  let navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (token === null) {
    setLoggedin(false);
  }

  if (loggedin === false) {
    return (
      <h5>
        Please login <NavLink to="/login"> Login </NavLink>
      </h5>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedin(false);
    return navigate("/");
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm bg-primary">
        <h2> NBA WEB PORTAL </h2>
        <button class="btn btn-light" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
