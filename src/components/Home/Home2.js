import React from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import myImg from "../../Assets/engineering_desk.png";
import roundEngineer from "../../Assets/roundEngineer.png";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaLightbulb, FaTools, FaMicrochip, FaCode, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { DiPython, DiJavascript1, DiReact } from "react-icons/di";
import { SiC, SiCplusplus, SiVisualstudiocode, SiAltiumdesigner, SiKicad } from "react-icons/si";
import { GiRadioTower, GiProcessor, GiCircuitry } from "react-icons/gi";
import { Link } from "react-router-dom";
import GridBackground from "../GridBackground";

function Home2() {
  // Core Technologies
  const technologies = [
    { icon: <GiProcessor />, name: "Control Systems", color: "#FF6B6B" },
    { icon: <GiCircuitry />, name: "Circuit Design", color: "#48CFAD" },
    { icon: <FaMicrochip />, name: "Embedded Systems", color: "#5D9CEC" },
    { icon: <GiRadioTower />, name: "RF Design", color: "#AC92EC" },
    { icon: <SiCplusplus />, name: "C++", color: "#4FC1E9" },
    { icon: <SiC />, name: "C Programming", color: "#A0D568" },
    { icon: <DiPython />, name: "Python", color: "#FFCE54" },
    { icon: <FaCode />, name: "Assembly & Verilog", color: "#EC87C0" },
  ];

  // Tools
  const tools = [
    { icon: <SiAltiumdesigner />, name: "Altium Designer" },
    { icon: <SiKicad />, name: "KiCad" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
  ];

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
      
      {/* ===== MAIN ABOUT SECTION ===== */}
      <Container fluid className="home-about-section">
        <GridBackground />
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
          
          {/* Education Timeline */}
          <Row className="justify-content-center mb-5">
            <Col md={10} lg={8}>
              <div className="timeline">
                {/* Timeline Title */}
                <h3 className="timeline-section-title">Education</h3>
                
                {/* High School */}
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content timeline-card">
                    <h3 className="timeline-title">PISD Academy High School</h3>
                    <div className="timeline-info">
                      <span className="timeline-location">STEM-Based Project-Based Learning School</span>
                    </div>
                    <p className="timeline-text">
                      Focused on hands-on learning in science, technology, engineering, and mathematics (STEM).
                    </p>
                  </div>
                </div>

                {/* Texas A&M University */}
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content timeline-card">
                    <h3 className="timeline-title">Bachelor of Science in Electrical Engineering</h3>
                    <div className="timeline-info">
                      <span className="timeline-year">Graduation: December 2024</span>
                      <span className="timeline-location">Texas A&M University</span>
                    </div>
                    <p className="timeline-text">
                      Minor in Mathematics with a focus on electrical systems and control theory.
                    </p>
                  </div>
                </div>

              </div>
            </Col>
          </Row>
          
          {/* ===== EPIC BIO & CONNECTIONS SECTION ===== */}
          <Row className="bio-section">
            <Col lg={8} className="mx-auto">
              <div className="scroll-to-next-container">
                <a href="#tech" className="scroll-to-next">
                  <FaAngleDown />
                </a>
              </div>
              <div className="bio-mega-container">
                <div className="bio-main-card">
                  <div className="bio-header">
                    <div className="bio-avatar-container">
                      <img src={roundEngineer} className="bio-avatar" alt="Max Kotas" />
                      <div className="bio-avatar-ring"></div>
                    </div>
                    <div className="bio-headline">
                      <h2 className="bio-name">Max Kotas</h2>
                      <p className="bio-location"><span className="location-dot"></span>Dallas, Texas</p>
                    </div>
                  </div>
                  
                  <div className="bio-separator">
                    <span></span>
                  </div>
                  
                  <div className="bio-content">
                    <div className="bio-stats">
                      <div className="bio-stat">
                        <span className="stat-icon">🎓</span>
                        <div className="stat-details">
                          <span className="stat-value">B.S. Electrical Engineering</span>
                          <span className="stat-label">Texas A&M University</span>
                        </div>
                      </div>
                      <div className="bio-stat">
                        <span className="stat-icon">⚡</span>
                        <div className="stat-details">
                          <span className="stat-value">Control Systems Specialist</span>
                          <span className="stat-label">Motor Control | Embedded Systems</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="bio-brief">
                      I transform complex engineering problems into elegant hardware and software solutions, 
                      with a focus on precision control systems and innovative electronic designs.
                    </p>
                    
                    <div className="bio-quote">
                      <blockquote>
                        <p>"Engineering lets me bring the dreams of my childhood to life—turning imagination into reality, one invention at a time."</p>
                      </blockquote>
                    </div>
                  </div>
                </div>
                
                <div className="bio-side-content">
                  <div className="bio-connect-card">
                    <h3 className="connect-title">Connect With Me</h3>
                    <div className="connect-links">
                      <a href="https://github.com/maxkotas" target="_blank" rel="noreferrer" className="connect-button github-button">
                        <AiFillGithub className="connect-icon" />
                        <span>GitHub</span>
                      </a>
                      <a href="https://linkedin.com/in/max-kotas" target="_blank" rel="noreferrer" className="connect-button linkedin-button">
                        <FaLinkedinIn className="connect-icon" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="bio-interests-card">
                    <h3 className="interests-title">Beyond Engineering</h3>
                    <ul className="interests-list">
                      {[
                        "Exploring history and culture through travel",
                        "Hiking through America's National Parks",
                        "Creating melodies on the guitar",
                      ].map((activity, index) => (
                        <li className="interests-item" key={index}>
                          <ImPointRight className="interests-icon" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          
          {/* ===== CORE SKILLS SECTION WITH ANIMATED TECH ICONS ===== */}
          <Row className="skills-section" id="tech">
            <Col lg={10} className="mx-auto">
              <div className="section-title text-center">
                <div className="section-subtitle-wrapper">
                  <span className="section-subtitle">Expertise</span>
                </div>
                <h3 className="section-heading">Core <span className="purple">Technologies</span></h3>
              </div>
              
              <div className="scroll-to-next-container">
                <a href="#specialties" className="scroll-to-next">
                  <FaAngleDown />
                </a>
              </div>
              <div className="tech-grid">
                {technologies.map((tech, index) => (
                  <OverlayTrigger
                    key={index}
                    placement="top"
                    overlay={<Tooltip id={`tooltip-tech-${index}`}>{tech.name}</Tooltip>}
                  >
                    <div className="tech-icon-card" style={{'--hover-color': tech.color}}>
                      <div className="tech-icon-inner">
                        {tech.icon}
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    </div>
                  </OverlayTrigger>
                ))}
              </div>
            </Col>
          </Row>
          
          {/* ===== SPECIALTIES GRID WITH HOVER EFFECTS ===== */}
          <Row className="specialties-section" id="specialties">
            <Col lg={10} className="mx-auto">
              <div className="section-title text-center">
                <div className="section-subtitle-wrapper">
                  <span className="section-subtitle">Professional Focus</span>
                </div>
                <h3 className="section-heading">My <span className="purple">Specialties</span></h3>
              </div>
              
              <div className="scroll-to-next-container">
                <a href="#tools" className="scroll-to-next">
                  <FaAngleDown />
                </a>
              </div>
              <div className="specialties-grid">
                <div className="specialty-card">
                  <div className="specialty-icon-wrapper">
                    <FaTools className="specialty-card-icon" />
                  </div>
                  <h4 className="specialty-card-title">Motor Control Systems</h4>
                  <p className="specialty-card-desc">
                    Designing and optimizing control systems for precise motor operation in
                    industrial and embedded applications with focus on efficiency and reliability.
                  </p>
                </div>
                
                <div className="specialty-card">
                  <div className="specialty-icon-wrapper">
                    <FaLightbulb className="specialty-card-icon" />
                  </div>
                  <h4 className="specialty-card-title">Controller Design</h4>
                  <p className="specialty-card-desc">
                    Developing advanced control algorithms for dynamic systems with
                    focus on performance and reliability. Specialized in PID control and state-space methods.
                  </p>
                </div>
                
                <div className="specialty-card">
                  <div className="specialty-icon-wrapper">
                    <FaMicrochip className="specialty-card-icon" />
                  </div>
                  <h4 className="specialty-card-title">Embedded Systems</h4>
                  <p className="specialty-card-desc">
                    Leveraging microcontrollers and custom hardware to solve real-world
                    challenges. Proficient with ARM architecture, ESP32, and various microcontroller families.
                  </p>
                </div>
                
                <div className="specialty-card">
                  <div className="specialty-icon-wrapper">
                    <FaCode className="specialty-card-icon" />
                  </div>
                  <h4 className="specialty-card-title">FPGA & Low-Level Programming</h4>
                  <p className="specialty-card-desc">
                    Creating hardware solutions in Verilog and optimizing
                    performance-critical systems at the assembly level for maximum efficiency.
                  </p>
                </div>
                
                <div className="specialty-card">
                  <div className="specialty-icon-wrapper">
                    <GiRadioTower className="specialty-card-icon" />
                  </div>
                  <h4 className="specialty-card-title">RF Design</h4>
                  <p className="specialty-card-desc">
                    Innovating in wireless communication and RF circuit
                    development for modern connectivity solutions. Experience with antenna design and signal processing.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          
          {/* ===== TOOLS SECTION ===== */}
          <Row className="tools-section" id="tools">
            <Col lg={10} className="mx-auto">
              <div className="section-title text-center">
                <div className="section-subtitle-wrapper">
                  <span className="section-subtitle">My Arsenal</span>
                </div>
                <h3 className="section-heading">Favorite <span className="purple">Tools</span></h3>
              </div>
              
              <div className="scroll-to-next-container">
                <a href="#education" className="scroll-to-next">
                  <FaAngleDown />
                </a>
              </div>
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <div className="tool-card" key={index}>
                    <div className="tool-icon">{tool.icon}</div>
                    <span className="tool-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          
          {/* ===== EDUCATION & EXPERIENCE SECTION ===== */}
          <Row className="education-section" id="education">
            <Col lg={10} className="mx-auto">
              <div className="timeline-container">
                <div className="section-title text-center">
                  <div className="section-subtitle-wrapper">
                    <span className="section-subtitle">Background</span>
                  </div>
                  <h3 className="section-heading">Education & <span className="purple">Experience</span></h3>
                </div>
                
                <div className="scroll-to-next-container">
                  <a href="#contact" className="scroll-to-next">
                    <FaAngleDown />
                  </a>
                </div>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content timeline-card">
                      <h3 className="timeline-title">Texas A&M University</h3>
                      <div className="timeline-info">
                        <span className="timeline-year">2020 - 2024</span>
                        <span className="timeline-location">College Station, TX</span>
                      </div>
                      <p className="timeline-text">
                        Bachelor of Science in Electrical Engineering with focus on Embedded Design.
                      </p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content timeline-card">
                      <h3 className="timeline-title">Engineering Internship</h3>
                      <div className="timeline-info">
                        <span className="timeline-year">Summer 2022</span>
                        <span className="timeline-location">Texas Instruments</span>
                      </div>
                      <p className="timeline-text">
                        Developed embedded systems solutions and contributed to motor control system design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          
          {/* ===== CTA SECTION ===== */}
          <Row className="cta-section" id="contact">
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
