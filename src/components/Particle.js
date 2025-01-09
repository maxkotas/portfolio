import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          color: {
            value: ["#add8e6", "#87CEEB", "#00BFFF"]
          },
          shape: {
            type: ["circle", "triangle"],
            stroke: {
              width: 1,
              color: "#add8e6"
            }
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 0.3,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#add8e6",
            opacity: 0.5,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.1
            }
          },
          move: {
            enable: true,
            speed: 0.8,
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
              mode: ["grab", "bubble"]
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
                opacity: 0.8
              }
            },
            bubble: {
              distance: 250,
              size: 10,
              duration: 2,
              opacity: 0.8,
              speed: 3
            },
            push: {
              particles_nb: 3
            }
          }
        },
        retina_detect: true
      }}
    />
  );
}

export default Particle;
