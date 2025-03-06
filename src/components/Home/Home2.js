import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/engineering_desk.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="d-none d-lg-block my-auto">
            <div className="about-img-container">
              <img src={myImg} className="img-fluid rounded-custom about-img" alt="Max at work" />
            </div>
          </Col>
          <Col lg={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey in engineering has been driven by a passion for{" "}
              <b className="purple">
                innovation, problem-solving, and precision
              </b>.
              <br />
              <br />
              I specialize in:
              <div className="specialty-container">
                <div className="specialty-item">
                  <span className="specialty-icon">⚙️</span>
                  <b className="purple">Motor Control Systems</b> — Designing
                  and optimizing control systems for precise motor operation in
                  industrial and embedded applications
                </div>
                <div className="specialty-item">
                  <span className="specialty-icon">🎮</span>
                  <b className="purple">Controller Design</b> — Developing
                  advanced control algorithms for dynamic systems
                </div>
                <div className="specialty-item">
                  <span className="specialty-icon">💻</span>
                  <b className="purple">Embedded Systems</b> — Leveraging
                  microcontrollers and custom hardware to solve real-world
                  challenges
                </div>
                <div className="specialty-item">
                  <span className="specialty-icon">⌨️</span>
                  <b className="purple">Verilog and Assembly Programming</b> —
                  Crafting low-level hardware solutions and optimizing
                  performance-critical systems
                </div>
                <div className="specialty-item">
                  <span className="specialty-icon">📡</span>
                  <b className="purple">Radio Frequency (RF) Design</b> —
                  Innovating in wireless communication and RF circuit
                  development
                </div>
              </div>
              <br />
              I am particularly enthusiastic about integrating{" "}
              <b className="purple">motor drivers</b> and building{" "}
              <b className="purple">
                control architectures for stepper, DC, and BLDC motors
              </b>. My work often involves ensuring high efficiency, minimal
              latency, and precise operation in various industrial contexts.
              <br />
              <br />
              From developing <b className="purple">PID controllers</b> for
              precise motor control to designing hardware in Verilog for
              FPGA-based systems, my goal is to create solutions that excel in
              performance and reliability.
            </p>
          </Col>
          <Col sm={12} className="d-block d-lg-none my-4">
            <div className="about-img-container-mobile">
              <img src={myImg} className="img-fluid rounded-custom about-img" alt="Max at work" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let's <span className="purple">connect</span> and explore new
              possibilities!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/maxkotas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/max-kotas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
