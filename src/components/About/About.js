import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GridBackground from "../GridBackground";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/roundEngineer.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <GridBackground />
      <Container>
        <div className="section-title text-center mb-5">
          <div className="section-subtitle-wrapper">
            <span className="section-subtitle">Know Me Better</span>
          </div>
          <h1 className="section-heading">
            About <strong className="purple">Me</strong>
          </h1>
        </div>
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
        <div className="section-title text-center mb-4 mt-5">
          <div className="section-subtitle-wrapper">
            <span className="section-subtitle">What I Know</span>
          </div>
          <h2 className="section-heading">
            Professional <strong className="purple">Skillset</strong>
          </h2>
        </div>

        <Techstack />

        <div className="section-title text-center mb-4 mt-5">
          <div className="section-subtitle-wrapper">
            <span className="section-subtitle">My Arsenal</span>
          </div>
          <h2 className="section-heading">
            <strong className="purple">Tools</strong> I Use
          </h2>
        </div>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
