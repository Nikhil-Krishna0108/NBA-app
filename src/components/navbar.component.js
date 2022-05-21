import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Criteria1 from "./criteria1.component";
import Criteria2 from "./criteria2.components";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-sm bg-primary">
          <h2 className="App"> NBA PORTAL </h2>
          <NavLink to={"/"}>
            <button type="button" className="btn btn-light">
              Logout
            </button>
          </NavLink>
        </nav>
        <nav className="navbar navbar-primary bg-light navbar-expand-lg my-5">
          <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Criteria 1
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Criteria 2
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Criteria 3
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Criteria 4
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Criteria 5
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Criteria 6
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <Criteria1 />
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <Criteria2 />
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                3
              </div>
            </div>
          </div>
          {/* <Link to="/dashboard" className="navbar-brand">
          Home
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto"> */}
          {/* <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
            </li> */}

          {/* <li className="navbar-item">
              <Link to="/criteria1" className="criteria1">
                Criteria1
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Criteria 2
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Criteria 3
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Criteria 4
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Criteria 5
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Criteria 6
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Criteria 7
              </Link>
            </li>
          </ul>
        </div> */}
        </nav>
      </>
    );
  }
}
