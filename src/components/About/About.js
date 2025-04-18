import React from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import GridBackground from "../GridBackground";
import roundEngineer from "../../Assets/roundEngineer.png";
import { ImPointRight } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaLightbulb, FaTools, FaMicrochip, FaCode } from "react-icons/fa";
import { DiPython, DiJavascript1, DiReact, DiNodejs, DiMongodb } from "react-icons/di";
import { 
  SiC, SiCplusplus, SiVisualstudiocode, SiAltiumdesigner, SiKicad, 
  SiLabview, SiWireshark, SiGithub, SiXilinx, SiArduino, SiRaspberrypi, SiEspressif 
} from "react-icons/si";
import { GiRadioTower, GiProcessor, GiCircuitry } from "react-icons/gi";
import { VscTerminalCmd } from "react-icons/vsc";
import { Link } from "react-router-dom";

function About() {
  // Core Technologies
  const coreTechnologies = [
    { icon: <GiProcessor />, name: "Control Systems", color: "#FF6B6B" },
    { icon: <GiCircuitry />, name: "Circuit Design", color: "#48CFAD" },
    { icon: <FaMicrochip />, name: "Embedded Systems", color: "#5D9CEC" },
    { icon: <GiRadioTower />, name: "RF Design", color: "#AC92EC" },
    { icon: <SiCplusplus />, name: "C++", color: "#4FC1E9" },
    { icon: <SiC />, name: "C Programming", color: "#A0D568" },
    { icon: <DiPython />, name: "Python", color: "#FFCE54" },
    { icon: <FaCode />, name: "Assembly & Verilog", color: "#EC87C0" },
  ];

  // Tech Stack
  const techStack = [
    // Core EE Skills
    { icon: <GiProcessor />, name: "Control Systems", color: "#FF6B6B" },
    { icon: <GiCircuitry />, name: "Circuit Design", color: "#48CFAD" },
    { icon: <FaMicrochip />, name: "Embedded Systems", color: "#5D9CEC" },
    { icon: <GiRadioTower />, name: "RF Design", color: "#AC92EC" },
    { icon: <SiLabview />, name: "LabVIEW", color: "#FF8E53" },
    
    // Programming & Development
    { icon: <SiCplusplus />, name: "C++", color: "#4FC1E9" },
    { icon: <SiC />, name: "C Programming", color: "#A0D568" },
    { icon: <DiPython />, name: "Python", color: "#FFCE54" },
    { icon: <DiJavascript1 />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <DiReact />, name: "React", color: "#61DAFB" },
    { icon: <DiNodejs />, name: "Node.js", color: "#68A063" },
    { icon: <DiMongodb />, name: "MongoDB", color: "#4DB33D" },
  ];

  // Tool Stack
  const toolStack = [
    // Hardware Design Tools
    { icon: <SiAltiumdesigner />, name: "Altium Designer", color: "#A5915F" },
    { icon: <SiKicad />, name: "KiCad", color: "#314CB0" },
    { icon: <SiXilinx />, name: "Xilinx ISE", color: "#E01F27" },
    
    // Development Platforms
    { icon: <SiArduino />, name: "Arduino", color: "#00979D" },
    { icon: <SiRaspberrypi />, name: "Raspberry Pi", color: "#A22846" },
    { icon: <SiEspressif />, name: "ESP32/8266", color: "#E7352C" },
    
    // Development Tools
    { icon: <SiVisualstudiocode />, name: "VS Code", color: "#007ACC" },
    { icon: <VscTerminalCmd />, name: "Command Line", color: "#4CAF50" },
    { icon: <SiGithub />, name: "GitHub", color: "#24292E" },
    { icon: <SiWireshark />, name: "Wireshark", color: "#1679A7" },
  ];

  return (
    <Container fluid className="about-section">
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
        
        {/* Bio Section */}
        <Row className="bio-section">
          <Col lg={8} className="mx-auto">
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
        
        {/* Tech Stack Section */}
        <Row className="skills-section" id="tech">
          <Col lg={10} className="mx-auto">
            <div className="section-title text-center">
              <div className="section-subtitle-wrapper">
                <span className="section-subtitle">What I Know</span>
              </div>
              <h3 className="section-heading">Professional <span className="purple">Skillset</span></h3>
            </div>
            
            <div className="tech-grid">
              {techStack.map((tech, index) => (
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
        
        {/* Tool Stack Section */}
        <Row className="skills-section" id="tools">
          <Col lg={10} className="mx-auto">
            <div className="section-title text-center">
              <div className="section-subtitle-wrapper">
                <span className="section-subtitle">My Arsenal</span>
              </div>
              <h3 className="section-heading"><span className="purple">Tools</span> I Use</h3>
            </div>
            
            <div className="tech-grid">
              {toolStack.map((tool, index) => (
                <OverlayTrigger
                  key={index}
                  placement="top"
                  overlay={<Tooltip id={`tooltip-tooltip-${index}`}>{tool.name}</Tooltip>}
                >
                  <div className="tech-icon-card" style={{'--hover-color': tool.color}}>
                    <div className="tech-icon-inner">
                      {tool.icon}
                      <span className="tech-name">{tool.name}</span>
                    </div>
                  </div>
                </OverlayTrigger>
              ))}
            </div>
          </Col>
        </Row>
        
        {/* Specialties Section */}
        <Row className="specialties-section" id="specialties">
          <Col lg={10} className="mx-auto">
            <div className="section-title text-center">
              <div className="section-subtitle-wrapper">
                <span className="section-subtitle">Professional Focus</span>
              </div>
              <h3 className="section-heading">My <span className="purple">Specialties</span></h3>
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
        
        {/* Education & Experience Section */}
        <Row className="education-section" id="education">
          <Col lg={10} className="mx-auto">
            <div className="timeline-container">
              <div className="section-title text-center">
                <div className="section-subtitle-wrapper">
                  <span className="section-subtitle">Background</span>
                </div>
                <h3 className="section-heading">Education & <span className="purple">Experience</span></h3>
              </div>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content timeline-card">
                    <h3 className="timeline-title">Texas A&M University</h3>
                    <div className="timeline-info">
                      <span className="timeline-year">2019 - 2023</span>
                      <span className="timeline-location">College Station, TX</span>
                    </div>
                    <p className="timeline-text">
                      Bachelor of Science in Electrical Engineering with focus on Control Systems and Embedded Design.
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
        
        {/* CTA Section */}
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
  );
}

export default About;
