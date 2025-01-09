import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/crewvee.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
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
              <ul>
                <li>
                  <b className="purple">Motor Control Systems</b> — Designing
                  and optimizing control systems for precise motor operation in
                  industrial and embedded applications
                </li>
                <li>
                  <b className="purple">Controller Design</b> — Developing
                  advanced control algorithms for dynamic systems
                </li>
                <li>
                  <b className="purple">Embedded Systems</b> — Leveraging
                  microcontrollers and custom hardware to solve real-world
                  challenges
                </li>
                <li>
                  <b className="purple">Verilog and Assembly Programming</b> —
                  Crafting low-level hardware solutions and optimizing
                  performance-critical systems
                </li>
                <li>
                  <b className="purple">Radio Frequency (RF) Design</b> —
                  Innovating in wireless communication and RF circuit
                  development
                </li>
              </ul>
              <br />
              I am particularly enthusiastic about integrating{" "}
              <b className="purple">motor drivers</b> and building{" "}
              <b className="purple">
                control architectures for stepper, DC, and BLDC motors
              </b>. My work often involves ensuring high efficiency, minimal
              latency, and precise operation in various industrial contexts.
              <br />
              <br />
              Tools and technologies I frequently work with include{" "}
              <b className="purple">
                Verilog, Assembly, MATLAB, Simulink, Altium Designer, and C
                programming
              </b>. I also enjoy tackling hardware-software integration
              challenges, ensuring seamless communication between components.
              <br />
              <br />
              From developing <b className="purple">PID controllers</b> for
              precise motor control to designing hardware in Verilog for
              FPGA-based systems, my goal is to create solutions that excel in
              performance and reliability.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let’s <span className="purple">connect</span> and explore new
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
                  href="https://linkedin.com/maxkotas"
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
