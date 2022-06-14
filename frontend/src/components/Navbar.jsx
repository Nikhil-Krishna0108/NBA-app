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
    <div className="row">
      <nav className="navbar fixed-top navbar-expand-sm bg-primary">
        <button class="btn btn-light" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <section id="Services" class="content-section text-center">
        <div class="container">
          <div class="block-heading">
            <h2>Criterias for NBA Accreditation</h2>
            <p>
              The accreditation process involves the fulfillment of a set amount
              of criterias displayed below
            </p>
          </div>
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <NavLink to="/criteria1">
                <div class="service-box ">
                  <div class="service-icon red">
                    <div class="front-content">
                      <i class="fa fa-suitcase"></i>
                      <h2>CRITERIA 1</h2>
                    </div>
                  </div>
                  <div class="service-content">
                    <h3>CRITERIA 1</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>

            <div class="col-md-3 col-sm-6">
              <NavLink to="/criteria2">
                <div class="service-box ">
                  <div class="service-icon red">
                    <div class="front-content">
                      <i class="fa fa-suitcase"></i>
                      <h2>CRITERIA 2</h2>
                    </div>
                  </div>
                  <div class="service-content">
                    <h3>CRITERIA 2</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to="/criteria1">
                <div class="service-box ">
                  <div class="service-icon red">
                    <div class="front-content">
                      <i class="fa fa-suitcase"></i>
                      <h2>CRITERIA 3</h2>
                    </div>
                  </div>
                  <div class="service-content">
                    <h3>CRITERIA 3</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to="/criteria1">
                <div class="service-box ">
                  <div class="service-icon red">
                    <div class="front-content">
                      <i class="fa fa-suitcase"></i>
                      <h2>CRITERIA 4</h2>
                    </div>
                  </div>
                  <div class="service-content">
                    <h3>CRITERIA 4</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to="/criteria1">
                <div class="service-box ">
                  <div class="service-icon red">
                    <div class="front-content">
                      <i class="fa fa-suitcase"></i>
                      <h2>CRITERIA 5</h2>
                    </div>
                  </div>
                  <div class="service-content">
                    <h3>CRITERIA 5</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to="/criteria1">
                <div class="service-box ">
                  <div class="service-icon red">
                    <div class="front-content">
                      <i class="fa fa-suitcase"></i>
                      <h2>CRITERIA 6</h2>
                    </div>
                  </div>
                  <div class="service-content">
                    <h3>CRITERIA 6</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
