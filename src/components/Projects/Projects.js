import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import drinktable from "../../Assets/Projects/drink_table_drawing.png";
import beverageTablePdf from "../../Assets/Projects/beverage_table.pdf";
import seopipeline from "../../Assets/Projects/seopipeline.png";
import flamethrower from "../../Assets/Projects/flamethrower.png";
import bldcMotorReportPdf from "../../Assets/Projects/BLDC_Motor_Control.pdf";
import bldcMotorControl from "../../Assets/Projects/BLDCControl.png";
import bldcMotorImg from "../../Assets/Projects/BLDCMotor.png";
import bldcSensorReportPdf from "../../Assets/Projects/BLDC Motor Control Project.pdf";
import iotPetTrackerPdf from "../../Assets/Projects/WatchDogReport.pdf";
import iotPetTracker from "../../Assets/Projects/iotPetCollar.png";
import fpgaNN from "../../Assets/Projects/fpgaNN.png";
import thermalPrinterImg from "../../Assets/Projects/thermalPrinterImg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={fpgaNN}
                  isBlog={false}
                  title="FPGA-Accelerated Neural Network for Low-Power Applications"
                  description="Designed a hardware-accelerated neural network using HLS4ML and Qkeras for FPGA deployment. The model was quantized for efficient low-power operation and trained on the MNIST dataset for digit recognition. Optimized for embedded systems, the design leverages Xilinx Vivado for hardware synthesis and integration."
                  ghLink="https://github.com/maxkotas/fpga_accelerated_nn"
              />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drinktable}
              isBlog={false}
              title="IoT-Integrated Automated Beverage Dispensing Table"
              description="An automated beverage dispensing table integrating IoT with precision mechanical and electrical components. Features MQTT-based communication, stepper-driven linear motion, peristaltic pumps, and a custom PCB. Voice commands control the system to mix drinks with accurate liquid measurements, showcased in a polished furniture-grade design."
              demoLink={beverageTablePdf}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bldcMotorControl}
              isBlog={false}
              title="BLDC Motor Control Using Six-Step Commutation"
              description="A comprehensive design and implementation of a BLDC motor control system employing six-step trapezoidal voltage modulation. The project integrates Hall sensor feedback, a three-phase inverter, and a DSP-based control platform for both open-loop and closed-loop configurations. Key features include speed regulation via a PI controller, real-time PWM adjustments, and seamless direction reversal."
              demoLink={bldcMotorReportPdf}
            />
          </Col>
          
          <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={thermalPrinterImg}
                  isBlog={false}
                  title="Thermal Printer Camera"
                  description="A Python-powered application for capturing images with a Raspberry Pi camera and printing them on a thermal printer. Features real-time image processing, optimized for ESC/POS thermal printers, making it perfect for DIY photo booths or creative printing experiments."
                  ghLink="https://github.com/maxkotas/thermal-camera-printer"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flamethrower}
              isBlog={false}
              title="IoT-Controlled Precision Flamethrower"
              description="Engineered a sophisticated flamethrower system featuring ESP32-based control architecture, precision servo motor actuation for gas flow regulation, and high-voltage electrical ignition. Implemented closed-loop feedback for optimal fuel-air mixture and integrated safety protocols. Features include custom-machined aluminum frame, thermal-resistant barrel design, and wireless control interface for remote operation and monitoring."
              demoLink="https://youtube.com/shorts/VDFsreq7z58?si=buAGthARa6xXwSqt"
              buttonText="Watch Demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bldcMotorImg}
              isBlog={false}
              title="Rotor Position Sensor Design for BLDC Motor Control"
              description="A rotor position sensor design for precise BLDC motor control, integrating Hall effect sensors to detect rotor position and optimize torque generation. The project features innovative placement of Hall sensors, a logic-controlled H-bridge circuit, and a detailed analysis of sensor signals for effective motor drive performance."
              demoLink={bldcSensorReportPdf}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seopipeline}
              isBlog={false}
              title="SEO Analysis Pipeline"
              description="Developed a sophisticated SEO analysis tool using Python that combines web scraping, natural language processing, and AI. The pipeline crawls competitor websites, generates word clouds for content analysis, and leverages GPT-4 to produce comprehensive LaTeX reports comparing website content against top search results. Features include automated PDF generation, keyword frequency analysis, and actionable SEO recommendations."
              ghLink="https://github.com/maxkotas/SEOWordcloud"
              buttonText="Technical Documentation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iotPetTracker}
              isBlog={false}
              title="IoT-Based Pet Tracker: Pet Collar Watchdog"
              description="An innovative pet safety solution featuring GPS tracking, live video streaming, machine learning for safe area optimization, and real-time alerts. The system integrates IoT hardware with an intuitive user interface to monitor pet behavior, refine safe zones dynamically, and ensure peace of mind for pet owners. Key components include a pet collar with GPS, camera, buzzer, and a robust receiver for communication and data handling."
              demoLink={iotPetTrackerPdf}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
