import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Electrical Engineer",
          "Circuit Designer",
          "Control Systems Specialist",
          "Motor Control Expert",
          "Embedded Systems Developer",
          "Power Electronics Engineer",
          "RF Design Innovator"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        delay: 80,
        pauseFor: 1500,
        cursor: "|",
        wrapperClassName: "typewriter-wrapper",
        cursorClassName: "typewriter-cursor"
      }}
    />
  );
}

export default Type;
