import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 2000
            }
          },
          color: {
            value: ["#FF6B6B", "#00B894", "#00CEC9"]
          },
          shape: {
            type: ["circle"],
            stroke: {
              width: 1,
              color: "#FF8E8E"
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.3,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#FF6B6B",
            opacity: 0.2,
            width: 1,
            triangles: {
              enable: false
            }
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
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
              distance: 200,
              line_linked: {
                opacity: 0.4
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
