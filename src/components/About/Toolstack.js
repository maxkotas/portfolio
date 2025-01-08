import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiKicad,
  SiWireshark,
  SiVisualstudiocode,
  SiGithub,
  SiXilinx,
  SiArduino,
  SiRaspberrypi,
  SiAltiumdesigner,
  SiEspressif,
} from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";

function Toolstack() {
  const tools = [
    // Hardware Design Tools
    { icon: <SiAltiumdesigner />, name: "Altium Designer" },
    { icon: <SiKicad />, name: "KiCad" },
    { icon: <SiXilinx />, name: "Xilinx ISE" },
    
    // Development Platforms
    { icon: <SiArduino />, name: "Arduino" },
    { icon: <SiRaspberrypi />, name: "Raspberry Pi" },
    { icon: <SiEspressif />, name: "ESP32/8266" },
    
    // Development Tools
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <VscTerminalCmd />, name: "Command Line" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiWireshark />, name: "Wireshark" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tool.name}</Tooltip>}
          >
            <div>{tool.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
