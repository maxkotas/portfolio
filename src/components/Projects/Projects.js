import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import GridBackground from "../GridBackground";
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
import spheroRobot from "../../Assets/Projects/sphero_robot.png";

function Projects() {
  // Create an array of projects with their properties
  const projects = [
    {
      imgPath: spheroRobot,
      isBlog: false,
      title: "Spherical Rolling Robot PCB Redesign",
      date: "February 2025", // Added date
      description: "Engineered a complete PCB redesign for a spherical rolling robot using advanced KiCad techniques. The design integrates an ESP32 microcontroller, TB6612FNG dual H-bridge driver, and MPU6050 inertial sensor into a custom multilayer PCB. Implemented a modular architecture with UART and I2C interfaces for seamless communication between components. Optimized signal integrity through careful ground trace routing, proper decoupling, and noise minimization techniques in power and signal lines.",
      demoLink: "https://youtu.be/bdaRhlA1MY4",
      buttonText: "Watch Demo"
    },
    {
      imgPath: fpgaNN,
      isBlog: false,
      title: "FPGA-Accelerated Neural Network for Low-Power Applications",
      date: "February 2025", // Added date
      description: "Designed a hardware-accelerated neural network using HLS4ML and Qkeras for FPGA deployment. The model was quantized for efficient low-power operation and trained on the MNIST dataset for digit recognition. Optimized for embedded systems, the design leverages Xilinx Vivado for hardware synthesis and integration.",
      ghLink: "https://github.com/maxkotas/fpga_accelerated_nn"
    },
    {
      imgPath: drinktable,
      isBlog: false,
      title: "IoT-Integrated Automated Beverage Dispensing Table",
      date: "October 2024", // Added date
      description: "An automated beverage dispensing table integrating IoT with precision mechanical and electrical components. Features MQTT-based communication, stepper-driven linear motion, peristaltic pumps, and a custom PCB. Voice commands control the system to mix drinks with accurate liquid measurements, showcased in a polished furniture-grade design.",
      demoLink: beverageTablePdf
    },
    {
      imgPath: bldcMotorControl,
      isBlog: false,
      title: "BLDC Motor Control Using Six-Step Commutation",
      date: "November 2024", // Added date
      description: "A comprehensive design and implementation of a BLDC motor control system employing six-step trapezoidal voltage modulation. The project integrates Hall sensor feedback, a three-phase inverter, and a DSP-based control platform for both open-loop and closed-loop configurations. Key features include speed regulation via a PI controller, real-time PWM adjustments, and seamless direction reversal.",
      demoLink: bldcMotorReportPdf
    },
    {
      imgPath: thermalPrinterImg,
      isBlog: false,
      title: "Thermal Printer Camera",
      date: "January 2025", // Added date
      description: "A Python-powered application leveraging UART serial communication for seamless integration of a Raspberry Pi camera with a thermal printer. Captures images in real time, processes them for high-contrast thermal printing, and sends them to the printer using optimized ESC/POS commands. This project demonstrates expertise in hardware-software integration, image processing, and serial communication, making it ideal for applications like DIY photo booths, creative printing experiments, or embedded system development.",
      ghLink: "https://github.com/maxkotas/thermal-camera-printer"
    },
    {
      imgPath: flamethrower,
      isBlog: false,
      title: "IoT-Controlled Precision Flamethrower",
      date: "July 2024", // Added date
      description: "Engineered a sophisticated flamethrower system featuring ESP32-based control architecture, precision servo motor actuation for gas flow regulation, and high-voltage electrical ignition. Implemented closed-loop feedback for optimal fuel-air mixture and integrated safety protocols. Features include custom-machined aluminum frame, thermal-resistant barrel design, and wireless control interface for remote operation and monitoring.",
      demoLink: "https://youtube.com/shorts/VDFsreq7z58?si=buAGthARa6xXwSqt",
      buttonText: "Watch Demo"
    },
    {
      imgPath: bldcMotorImg,
      isBlog: false,
      title: "Rotor Position Sensor Design for BLDC Motor Control",
      date: "April 2024", // Added date
      description: "A rotor position sensor design for precise BLDC motor control, integrating Hall effect sensors to detect rotor position and optimize torque generation. The project features innovative placement of Hall sensors, a logic-controlled H-bridge circuit, and a detailed analysis of sensor signals for effective motor drive performance.",
      demoLink: bldcSensorReportPdf
    },
    {
      imgPath: seopipeline,
      isBlog: false,
      title: "SEO Analysis Pipeline",
      date: "January 2025", // Added date
      description: "Developed a sophisticated SEO analysis tool using Python that combines web scraping, natural language processing, and AI. The pipeline crawls competitor websites, generates word clouds for content analysis, and leverages GPT-4 to produce comprehensive LaTeX reports comparing website content against top search results. Features include automated PDF generation, keyword frequency analysis, and actionable SEO recommendations.",
      ghLink: "https://github.com/maxkotas/SEOWordcloud",
      buttonText: "Technical Documentation"
    },
    {
      imgPath: iotPetTracker,
      isBlog: false,
      title: "IoT-Based Pet Tracker: Pet Collar Watchdog",
      date: "November 2024", // Added date
      description: "An innovative pet safety solution featuring GPS tracking, live video streaming, machine learning for safe area optimization, and real-time alerts. The system integrates IoT hardware with an intuitive user interface to monitor pet behavior, refine safe zones dynamically, and ensure peace of mind for pet owners. Key components include a pet collar with GPS, camera, buzzer, and a robust receiver for communication and data handling.",
      demoLink: iotPetTrackerPdf
    },
  ];

  // Helper function to convert date string to a comparable value for sorting
  const getDateValue = (dateStr) => {
    const [month, yearStr] = dateStr.split(' ');
    const year = parseInt(yearStr);
    const months = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3,
      'May': 4, 'June': 5, 'July': 6, 'August': 7,
      'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    return year * 12 + months[month];
  };

  // Sort projects by date (newest first)
  const sortedProjects = [...projects].sort((a, b) => 
    getDateValue(b.date) - getDateValue(a.date)
  );

  return (
    <Container fluid className="project-section">
      <GridBackground />
      <Container>
        <div className="section-title text-center mb-5">
          <div className="section-subtitle-wrapper">
            <span className="section-subtitle">Portfolio</span>
          </div>
          <h1 className="section-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p className="section-description">
            Here are a few projects I've worked on recently.
          </p>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {sortedProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                date={project.date}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                buttonText={project.buttonText}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;