import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/MaxCutout.png";
import Tilt from "react-parallax-tilt";
import GridBackground from "../GridBackground";
import Home2 from "./Home2";
import Type from "./Type";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function Home() {
  return (
    <section className="homepage-wrapper">
      <div className="hero-section" id="home">
        <GridBackground />
        <Container className="hero-content">
          <Row className="align-items-center hero-row">
            <Col lg={6} className="home-header order-2 order-lg-1">
              <div className="hero-text-container">
                <h1 className="hero-greeting">
                  Hello, I'm
                </h1>
                <h1 className="hero-name">
                  <strong>MAX KOTAS</strong>
                </h1>

                <div className="hero-type-container">
                  <Type />
                </div>
                
                <p className="hero-tagline">
                  Specializing in motor control systems, embedded solutions, 
                  and precision engineering for complex real-world problems.
                </p>
                
                <div className="hero-buttons">
                  <a href="#/about" className="hero-button primary-button">
                    Learn About Me
                  </a>
                  <Link to="/project" className="hero-button secondary-button">
                    View My Projects
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={6} className="order-1 order-lg-2">
              <Tilt className="hero-img-container" tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000}>
                <img
                  src={homeLogo}
                  alt="Max Kotas"
                  className="img-fluid hero-img"
                />
              </Tilt>
            </Col>
          </Row>
          
          <div className="scroll-indicator">
            <a href="#/about" className="scroll-down-link">
              <FaAngleDown className="scroll-down-arrow" />
            </a>
          </div>
        </Container>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
