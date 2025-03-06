import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/MaxCutout.png";
import Tilt from "react-parallax-tilt";
import GridBackground from "../GridBackground";
import Home2 from "./Home2";
import Type from "./Type";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <GridBackground />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={7} className="home-header order-2 order-lg-1">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MAX KOTAS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              
              <div className="home-buttons">
                <a href="#about" className="home-button primary-button">
                  About Me
                </a>
                <Link to="/project" className="home-button secondary-button">
                  See My Work
                </Link>
              </div>
            </Col>

            <Col lg={5} className="order-1 order-lg-2" style={{ paddingBottom: 20 }}>
              <Tilt className="home-img-container">
                <img
                  src={homeLogo}
                  alt="Max Kotas"
                  className="img-fluid home-hero-img"
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
