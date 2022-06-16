import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* <nav id="sidebar-wrapper">
        <ul class="sidebar-nav">
          <li class="sidebar-brand">
            <a class="smooth-scroll" href="#Header"></a>
          </li>
          <li class="sidebar-nav-item">
            <a class="smooth-scroll" href="#page-top">
              Home
            </a>
          </li>
          <li class="sidebar-nav-item">
            <a class="smooth-scroll" href="#About">
              About
            </a>
          </li>
          <li class="sidebar-nav-item">
            <a class="smooth-scroll" href="#Services">
              Services
            </a>
          </li>
          <li class="sidebar-nav-item">
            <a class="smooth-scroll" href="#Portfolio">
              Portfolio
            </a>
          </li>
          <li class="sidebar-nav-item">
            <a class="smooth-scroll" href="#Testimonials">
              Testimonials
            </a>
          </li>
          <li class="sidebar-nav-item">
            <a class="smooth-scroll" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav> */}

      <div className="App">
        <h1>DAYANANDA SAGAR COLLEGE OF ENGINEERING</h1>
      </div>

      <section id="Banner" class="content-section">
        <div class="container content-wrap text-center">
          <h1>NBA WEB PORTAL</h1>
          <h3>
            <em>End-to-end application to aid NBA Accreditation process</em>
          </h3>
          <NavLink to={"/login"}>
            <a class="btn btn-primary btn-xl">Login</a>
          </NavLink>
        </div>
        <div class="overlay"></div>
      </section>

      <section id="About" class="content-section">
        <div class="container text-center">
          <div class="row">
            <div class="col-lg-12">
              <div class="block-heading">
                <h2>About NBA Accreditation</h2>
              </div>
              <p class="lead">
                The Government of India, Ministry of Human Resource Development
                has established NAAC under UGC and NBA under AICTE in 1994 to
                look into the quality aspects of HEI and undertake
                accreditation. To maintain quality standards, Engineering
                institutions are now being encouraged to apply for NAAC
                accreditation on an institutional level as well as NBA
                accreditation for individual programmes. NBA accreditation has
                now become a prerequisite for technical institutions to seek
                autonomous status from university/UGC.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              <div class="service-box">
                <div class="service-icon yellow">
                  <div class="front-content">
                    <i class="fa fa-suitcase"></i>
                    <h2>CRITERIA 1</h2>
                  </div>
                </div>
                <div class="service-content">
                  <h3>CRITERIA 1</h3>
                  <p>
                    This Criteria covers in detail about the Vision, Mission And
                    Program Education Objectives
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="service-box">
                <div class="service-icon orange">
                  <div class="front-content">
                    <i class="fa fa-suitcase"></i>
                    <h2>CRITERIA 2</h2>
                  </div>
                </div>
                <div class="service-content">
                  <h3>CRITERIA 2</h3>
                  <p>
                    This Criteria covers in detail about the Program Curriculum
                    and Teaching-learning process
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
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
                    This Criteria covers in detail about the Course Outcomes And
                    Program Outcomes
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="service-box">
                <div class="service-icon grey">
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
            </div>
            <div class="col-md-3 col-sm-6">
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
                    This Criteria covers in detail about Faculty Information and
                    Contribution
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
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
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="service-box ">
                <div class="service-icon red">
                  <div class="front-content">
                    <i class="fa fa-suitcase"></i>
                    <h2>CRITERIA 7</h2>
                  </div>
                </div>
                <div class="service-content">
                  <h3>CRITERIA 7</h3>
                  <p>
                    This Criteria involves details regarding the Continuous
                    Improvement being done
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="service-box ">
                <div class="service-icon red">
                  <div class="front-content">
                    <i class="fa fa-suitcase"></i>
                    <h2>CRITERIA 8</h2>
                  </div>
                </div>
                <div class="service-content">
                  <h3>CRITERIA 8</h3>
                  <p>
                    This Criteria contains detailed information and records of
                    First Year Academics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="content-section text-center" id="Portfolio">
        <div class="container">
          <div class="block-heading">
            <h2>Portfolio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class="portfolio-wrapper clearfix">
            <a
              class="each-portfolio"
              data-fancybox="gallery"
              href="images/p-two.jpeg"
            >
              <div class="content hover-cont-wrap">
                <div class="content-overlay"></div>
                <img class="content-image" src="assets/images/p-two.jpeg" />
                <div class="content-details fadeIn-bottom">
                  <h5 class="p-title">Title</h5>
                  <p class="p-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span class="zoom">
                    <i class="fa fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </a>
            <a
              class="each-portfolio"
              data-fancybox="gallery"
              href="images/p-three.jpeg"
            >
              <div class="content hover-cont-wrap">
                <div class="content-overlay"></div>
                <img class="content-image" src="assets/images/p-three.jpeg" />
                <div class="content-details fadeIn-bottom">
                  <h5 class="p-title">Title</h5>
                  <p class="p-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span class="zoom">
                    <i class="fa fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </a>
            <a
              class="each-portfolio"
              data-fancybox="gallery"
              href="images/p-four.jpeg"
            >
              <div class="content hover-cont-wrap">
                <div class="content-overlay"></div>
                <img class="content-image" src="assets/images/p-four.jpeg" />
                <div class="content-details fadeIn-bottom">
                  <h5 class="p-title">Title</h5>
                  <p class="p-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span class="zoom">
                    <i class="fa fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </a>
            <a
              class="each-portfolio"
              data-fancybox="gallery"
              href="images/p-five.jpeg"
            >
              <div class="content hover-cont-wrap">
                <div class="content-overlay"></div>
                <img class="content-image" src="assets/images/p-five.jpeg" />
                <div class="content-details fadeIn-bottom">
                  <h5 class="p-title">Title</h5>
                  <p class="p-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span class="zoom">
                    <i class="fa fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </a>
            <a
              class="each-portfolio"
              data-fancybox="gallery"
              href="images/p-six.jpeg"
            >
              <div class="content hover-cont-wrap">
                <div class="content-overlay"></div>
                <img class="content-image" src="assets/images/p-six.jpeg" />
                <div class="content-details fadeIn-bottom">
                  <h5 class="p-title">Title</h5>
                  <p class="p-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span class="zoom">
                    <i class="fa fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </a>
            <a
              class="each-portfolio"
              data-fancybox="gallery"
              href="images/p-three.jpeg"
            >
              <div class="content hover-cont-wrap">
                <div class="content-overlay"></div>
                <img class="content-image" src="assets/images/p-three.jpeg" />
                <div class="content-details fadeIn-bottom">
                  <h5 class="p-title">Title</h5>
                  <p class="p-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span class="zoom">
                    <i class="fa fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section> */}

      {/* <section id="Testimonials" class="content-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="block-heading">
                <h2>Testimonials</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div id="customers-testimonials" class="owl-carousel">
                <div class="item">
                  <div class="shadow-effect">
                    <img
                      class="img-circle"
                      src="assets/images/sarah.jpg"
                      alt=""
                    />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                  <div class="testimonial-name">Sarah Jenks</div>
                </div>
                <div class="item">
                  <div class="shadow-effect">
                    <img
                      class="img-circle"
                      src="assets/images/tangelia.jpg"
                      alt=""
                    />
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old
                    </p>
                  </div>
                  <div class="testimonial-name">Tangelia Ekhoff</div>
                </div>
                <div class="item">
                  <div class="shadow-effect">
                    <img
                      class="img-circle"
                      src="assets/images/john-doe.jpg"
                      alt=""
                    />
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.{" "}
                    </p>
                  </div>
                  <div class="testimonial-name">John Doe</div>
                </div>
                <div class="item">
                  <div class="shadow-effect">
                    <img
                      class="img-circle"
                      src="assets/images/amy.jpg"
                      alt=""
                    />
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words
                    </p>
                  </div>
                  <div class="testimonial-name">Amy Tan</div>
                </div>
                <div class="item">
                  <div class="shadow-effect">
                    <img
                      class="img-circle"
                      src="assets/images/daniel.jpg"
                      alt=""
                    />
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy.
                    </p>
                  </div>
                  <div class="testimonial-name">Daniel Felsted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="Contact" class="content-section">
        <div class="container">
          <div class="block-heading">
            <h2>Contact Us</h2>
            <p>For any accreditation related queries</p>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="contact-wrapper">
                <div class="address-block border-bottom">
                  <h3 class="add-title">
                    DAYANANDA SAGAR COLLEGE OF ENGINEERING
                  </h3>
                  <div class="c-detail">
                    <span class="c-icon">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <span class="c-info">
                      DAYANANDA SAGAR COLLEGE OF ENGINEERING, SHAVIGE
                      MALLESHWARA HILLS, KUMARSWAMY LAYOUT, BANGALORE - 560 111
                    </span>
                  </div>
                  <div class="c-detail">
                    <span class="c-icon">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    <span class="c-info">
                      9741882324, 9741889394, 9741214448 +91-80-42161750 / 1
                    </span>
                  </div>
                  <div class="c-detail">
                    <span class="c-icon">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <span class="c-info">admissions@dayanandasagar.edu</span>
                  </div>
                </div>
                <div class="address-block">
                  <h3 class="add-title">
                    COMPUTER SCIENCE AND ENGINEERING DEPT
                  </h3>
                  <div class="c-detail">
                    <span class="c-icon">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <span class="c-info">
                      Dr. Ramesh Babu D. R. Vice-Principal, Professor & Head of
                      the Department.
                    </span>
                  </div>
                  <div class="c-detail">
                    <span class="c-icon">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    <span class="c-info">+91-80-42161726</span>
                  </div>
                  <div class="c-detail">
                    <span class="c-icon">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <span class="c-info"> hod-cse@dayanandasagar.edu</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="form-wrap">
                <form action="javascript:void(0)" method="post">
                  <div class="fname floating-label">
                    <input
                      type="text"
                      class="floating-input"
                      name="full name"
                    />
                    <label for="title">First Name</label>
                  </div>
                  <div class="fname floating-label">
                    <input
                      type="text"
                      class="floating-input"
                      name="full name"
                    />
                    <label for="title">Last Name</label>
                  </div>
                  <div class="email floating-label">
                    <input type="email" class="floating-input" name="email" />
                    <label for="email">Email</label>
                  </div>
                  <div class="contact floating-label">
                    <input type="tel" class="floating-input" name="contact" />
                    <label for="email">Mobile</label>
                  </div>
                  <div class="company floating-label">
                    <textarea
                      type="text"
                      class="floating-input"
                      name="company"
                    ></textarea>
                    <label for="email">Message</label>
                  </div>
                  <div class="submit-btn">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer text-center">
        <div class="container">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a
                class="social-link rounded-circle text-white mr-3"
                href="javascript:void(0)"
              >
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                class="social-link rounded-circle text-white mr-3"
                href="javascript:void(0)"
              >
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                class="social-link rounded-circle text-white"
                href="javascript:void(0)"
              >
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <p class="text-muted small mb-0">Copyright © NBA Web Portal 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
