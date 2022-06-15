import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Options = () => {
  return (
    <div>
      <Navbar />
      <div class="content">
        <p>Welcome, admin </p>

        <div class="text-center">
          <NavLink to="/dashboard">
            <button className="btn btn-primary btn-xl btn-option" type="submit">
              View/Edit Criterias
            </button>
          </NavLink>
        </div>
        <hr />
        <div class="text-center">
          <button className="btn btn-primary btn-xl btn-option" type="submit">
            Check/Update Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
