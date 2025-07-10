import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import { Helmet } from "react-helmet";

import Hero from "../components/hero";
import Contact from "../components/contact";
import Footer from "../components/footer";
import "./home.css";
import logo from "../assets/logo_2.jpg";

const Home = (props) => {
  const history = useHistory();
  return (
    <div className="home-container1">
      <header className="home-container2">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              alt="Logo"
              src={logo}
              className="home-image1"
              style={{ cursor: "pointer" }}
              onClick={() => history.replace(window.location.pathname)}
            />
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "white",
                fontFamily:
                  "'Eurostile Extended', Eurostile, 'Arial Narrow', Arial, sans-serif",
              }}
            >
              Arys Garage
            </span>
          </div>
          <div className="home-container3">
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() =>
                (window.location.href =
                  "https://wellfound.com/company/arys-garage")
              }
            >
              Careers
            </button>
            {/* <button type="button" className="button">
              Careers
            </button> */}
            {/* <div data-thq="thq-navbar-nav" className="home-desktop-menu"></div> */}
          </div>
          {/* <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div> */}
          {/* <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img
                  alt="EV Company Logo"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&amp;force_format=original"
                  className="home-logo"
                />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links">
                <span className="thq-link thq-body-small">Home</span>
                <span className="thq-link thq-body-small">About Us</span>
                <span className="thq-link thq-body-small">Services</span>
                <span className="thq-link thq-body-small">Contact Us</span>
                <span className="thq-link thq-body-small">Link5</span>
              </nav>
            </div>
            <div className="home-buttons">
              <button className="thq-button-filled">Login</button>
              <button className="thq-button-outline">Register</button>
            </div>
          </div> */}
        </header>
      </header>
      <Hero
        heading1="Arys Garage"
        action1="Learn More"
        text={
          <Fragment>
            <span
              className="home-text10"
              style={{ display: "block", textAlign: "left" }}
            >
              <br className="home-text12" />
              <span className="home-text14">
                At Arys , we believe the future of performance lives on two
                wheels — and it's electric.
                <br />
                <br />
                Born out of a passion for speed, design, and clean energy, Arys
                Garage is building India’s next generation of high-performance
                electric bikes. We're not here to make just another EV — we're
                here to redefine what a performance bike should feel like in the
                electric era.
                <br />
                <br />
                Every machine that rolls out of our garage is engineered for
                power, precision, and thrill. With cutting-edge battery systems,
                high-torque motors, and lightweight builds, our bikes are built
                for riders who demand more — more speed, more control, and more
                connection to the road, without the noise and emissions of
                traditional engines.
                <br />
                <br />
                We’re a team of engineers, designers, and riders who grew up
                loving combustion but chose to build a smarter, faster, cleaner
                future. At Arys Garage, the garage isn't just a place — it's a
                mindset. It’s where bold ideas meet brutal testing, and where
                raw performance is fine-tuned to perfection.
                <br />
                <br />
                Join us as we ride into the future — full throttle, fully
                electric.
                <br />
                <b>This is Arys Garage. Performance has a new pulse.</b>
              </span>
            </span>
          </Fragment>
        }
        rootClassName="heroroot-class-name"
      ></Hero>
      <div id="contact">
        <Contact />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
