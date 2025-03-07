import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/engineering_desk.png";
import roundEngineer from "../../Assets/roundEngineer.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaLightbulb, FaTools, FaMicrochip, FaCode, FaBroadcastTower } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home2() {
  return (
    <section className="home-about-wrapper" id="about">
      {/* Hero divider */}
      <div className="section-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path 
            fill="#ffffff" 
            fillOpacity="0.7"
            d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,42.7C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z">
          </path>
        </svg>
      </div>
      
      {/* Main about section */}
      <Container fluid className="home-about-section">
        <Container>
          {/* Section title */}
          <Row className="justify-content-center">
            <Col md={10} lg={8} className="text-center">
              <div className="section-title">
                <div className="section-subtitle-wrapper">
                  <span className="section-subtitle">Get to know</span>
                </div>
                <h2 className="section-heading">About <span className="purple">Me</span></h2>
              </div>
            </Col>
          </Row>
          
          {/* Profile image with card overlay */}
          <Row className="profile-showcase">
            <Col md={10} lg={8} xl={6} className="mx-auto">
              <div className="profile-card">
                <div className="profile-card-inner">
                  <div className="profile-background"></div>
                  <div className="profile-content">
                    <div className="profile-image-wrapper">
                      <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.04} transitionSpeed={2500}>
                        <img src={roundEngineer} className="profile-image" alt="Max Kotas" />
                      </Tilt>
                    </div>
                    <h3 className="profile-name">Max Kotas</h3>
                    <p className="profile-title">Electrical Engineer <span>& Control Systems Specialist</span></p>
                    <div className="profile-social">
                      <a
                        href="https://github.com/maxkotas"
                        target="_blank"
                        rel="noreferrer"
                        className="profile-social-icon"
                        aria-label="GitHub"
                      >
                        <AiFillGithub />
                      </a>
                      <a
                        href="https://linkedin.com/in/max-kotas"
                        target="_blank"
                        rel="noreferrer"
                        className="profile-social-icon"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          
          {/* Bio section */}
          <Row className="bio-section">
            <Col lg={10} className="mx-auto">
              <div className="bio-content">
                <p className="bio-intro">
                  My journey in engineering has been driven by a passion for innovation, 
                  problem-solving, and precision. I thrive on creating solutions that 
                  combine hardware and software to solve complex engineering challenges.
                </p>
              </div>
            </Col>
          </Row>
          
          {/* Specialties grid */}
          <Row className="specialties-section">
            <Col lg={10} className="mx-auto">
              <h3 className="specialties-title">My Specialties</h3>
              <div className="specialties-grid">
                <div className="specialty-card">
                  <div className="specialty-icon-wrapper">
                    <FaTools className="specialty-card-icon" />
                  </div>
                  <h4 className="specialty-card-title">Motor Control Systems</h4>
                  <p className="specialty-card-desc">
                    Designing and optimizing control systems for precise motor operation in
                    industrial and embedded applications
                  </p>
                </div>
                
                <div className="specialty-card">
                  <div className="specialty-icon-wrapper">
                    <FaLightbulb className="specialty-card-icon" />
                  </div>
                  <h4 className="specialty-card-title">Controller Design</h4>
                  <p className="specialty-card-desc">
                    Developing advanced control algorithms for dynamic systems with
                    focus on performance and reliability
                  </p>
                </div>
                
                <div className="specialty-card">
                  <div className="specialty-icon-wrapper">
                    <FaMicrochip className="specialty-card-icon" />
                  </div>
                  <h4 className="specialty-card-title">Embedded Systems</h4>
                  <p className="specialty-card-desc">
                    Leveraging microcontrollers and custom hardware to solve real-world
                    challenges and create intelligent solutions
                  </p>
                </div>
                
                <div className="specialty-card">
                  <div className="specialty-icon-wrapper">
                    <FaCode className="specialty-card-icon" />
                  </div>
                  <h4 className="specialty-card-title">FPGA & Low-Level Programming</h4>
                  <p className="specialty-card-desc">
                    Crafting hardware solutions in Verilog and optimizing
                    performance-critical systems at the assembly level
                  </p>
                </div>
                
                <div className="specialty-card">
                  <div className="specialty-icon-wrapper">
                    <FaBroadcastTower className="specialty-card-icon" />
                  </div>
                  <h4 className="specialty-card-title">RF Design</h4>
                  <p className="specialty-card-desc">
                    Innovating in wireless communication and RF circuit
                    development for modern connectivity solutions
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          
          {/* CTA section */}
          <Row className="cta-section">
            <Col md={10} lg={8} className="mx-auto text-center">
              <div className="cta-content">
                <h3 className="cta-title">Interested in working together?</h3>
                <p className="cta-text">
                  Check out my projects and professional experience, or get in touch to discuss potential collaborations.
                </p>
                <div className="cta-buttons">
                  <Link to="/project" className="cta-button primary-button">
                    View Projects
                  </Link>
                  <Link to="/resume" className="cta-button secondary-button">
                    See Resume
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      
      {/* Footer divider */}
      <div className="section-divider bottom-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path 
            fill="#ffffff" 
            fillOpacity="0.7"
            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
          </path>
        </svg>
      </div>
    </section>
  );
}
export default Home2;
