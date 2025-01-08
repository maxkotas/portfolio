import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { DiPython, DiJavascript1, DiReact, DiNodejs, DiMongodb } from "react-icons/di";
import { SiC, SiCplusplus, SiLabview,} from "react-icons/si";
import { GiCircuitry, GiProcessor, GiRadioTower } from "react-icons/gi";
import { FaMicrochip, FaCode } from "react-icons/fa";

function Techstack() {
  const technologies = [
    // Core EE Skills
    { icon: <GiProcessor />, name: "Control Systems" },
    { icon: <GiCircuitry />, name: "Circuit Design" },
    { icon: <FaMicrochip />, name: "Embedded Systems" },
    { icon: <GiRadioTower />, name: "RF Design" },
    { icon: <SiLabview />, name: "LabVIEW" },
    
    // Programming & Development
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiC />, name: "C Programming" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <FaCode />, name: "Assembly & Verilog" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>}
          >
            <div>{tech.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
