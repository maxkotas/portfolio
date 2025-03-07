import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import Typewriter from "typewriter-effect";

// Logo component with animated typing effect
function AnimatedLogo() {
  return (
    <div className="logo-container">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(90)
            .changeDeleteSpeed(40)
            // First cycle
            .typeString('MK.')
            .pauseFor(1800)
            .deleteAll()
            .pauseFor(300)
            // Second cycle
            .typeString('Max Kotas.')
            .pauseFor(1800)
            .deleteAll()
            .pauseFor(300)
            // Third cycle with creative taglines
            .typeString('Engineering Excellence.')
            .pauseFor(1800)
            .deleteAll()
            .pauseFor(300)
            // Fourth cycle
            .typeString('Control Systems Specialist.')
            .pauseFor(1800)
            .deleteAll()
            .pauseFor(300)
            // Fifth cycle
            .typeString('Innovation in Motion.')
            .pauseFor(1800)
            .deleteAll()
            .pauseFor(300)
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
          cursor: '|',
          wrapperClassName: "logo-text",
          cursorClassName: "logo-cursor"
        }}
      />
    </div>
  );
}

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // Add event listener
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <AnimatedLogo />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
