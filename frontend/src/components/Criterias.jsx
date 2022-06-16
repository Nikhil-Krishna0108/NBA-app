import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function Criterias() {
  return (
    <div className="row">
      <Navbar />
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
                      This Criteria covers in detail about the Vision, Mission
                      And Program Education Objectives
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
                      This Criteria covers in detail about the Program
                      Curriculum and Teaching-learning process
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to="/criteria3">
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
                      This Criteria covers in detail about the Course Outcomes
                      And Program Outcomes
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to="/criteria4">
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
                      This Criteria covers in detail about the Students
                      Performance
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to="/criteria5">
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
                      This Criteria covers in detail about Faculty Information
                      and Contribution
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to="/criteria6">
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
                      This Criteria covers in detail about the Facilities And
                      Technical Support
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

export default Criterias;
