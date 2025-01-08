import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          color: {
            value: "#add8e6"  // light blue
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#add8e6",  // light blue
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            push: {
              particles_nb: 1
            }
          }
        },
        retina_detect: true
      }}
    />
  );
}

export default Particle;
