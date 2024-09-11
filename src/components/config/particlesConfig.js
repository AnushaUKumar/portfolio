// const particlesConfig = {
//     particles: {
//       number: {
//         value: 70,
//         density: {
//           enable: true,
//           value_area: 800,
//         },
//       },
//       color: {
//         value: "#FFFFFF", // Change to white color for particles
//       },
//       shape: {
//         type: "circle",
//         stroke: {
//           width: 0,
//           color: "#000000",
//         },
//         polygon: {
//           nb_sides: 5,
//         },
//         image: {
//           src: "img/github.svg",
//           width: 100,
//           height: 100,
//         },
//       },
//       opacity: {
//         value: 0.5,
//         random: false,
//         anim: {
//           enable: false,
//           speed: 1,
//           opacity_min: 0.1,
//           sync: false,
//         },
//       },
//       size: {
//         value: 3,
//         random: true,
//         anim: {
//           enable: false,
//           speed: 40,
//           size_min: 0.1,
//           sync: false,
//         },
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: "#FFFFFF", // Change to white color for connecting lines
//         opacity: 0.1,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 2,
//         direction: "none",
//         random: false,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//         attract: {
//           enable: false,
//           rotateX: 600,
//           rotateY: 1200,
//         },
//       },
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: {
//           enable: true,
//           mode: "repulse",
//         },
//         onclick: {
//           enable: true,
//           mode: "push",
//         },
//         resize: true,
//       },
//       modes: {
//         grab: {
//           distance: 400,
//           line_linked: {
//             opacity: 1,
//           },
//         },
//         bubble: {
//           distance: 400,
//           size: 40,
//           duration: 2,
//           opacity: 8,
//           speed: 3,
//         },
//         repulse: {
//           distance: 100,
//           duration: 0.4,
//         },
//         push: {
//           particles_nb: 4,
//         },
//         remove: {
//           particles_nb: 2,
//         },
//       },
//     },
//     retina_detect: true,
//   };
  
//   export default particlesConfig;
// const particlesConfig = {
//     particles: {
//       number: {
//         value: 70,
//         density: {
//           enable: true,
//           value_area: 800,
//         },
//       },
//       color: {
//         value: "#FFFFFF", // White particles
//       },
//       shape: {
//         type: "circle",
//         stroke: {
//           width: 0,
//           color: "#000000",
//         },
//         polygon: {
//           nb_sides: 5,
//         },
//         image: {
//           src: "img/github.svg",
//           width: 100,
//           height: 100,
//         },
//       },
//       opacity: {
//         value: 0.5,
//         random: false,
//         anim: {
//           enable: false,
//           speed: 1,
//           opacity_min: 0.1,
//           sync: false,
//         },
//       },
//       size: {
//         value: 3,
//         random: true,
//         anim: {
//           enable: false,
//           speed: 40,
//           size_min: 0.1,
//           sync: false,
//         },
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: "#FFFFFF", // White lines
//         opacity: 0.1,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 1, // Lower speed to simulate gentle movement
//         direction: "none",
//         random: false,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//         attract: {
//           enable: false,
//           rotateX: 600,
//           rotateY: 1200,
//         },
//       },
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: {
//           enable: false, // Disable direct hover interaction
//         },
//         onclick: {
//           enable: false, // Disable direct click interaction
//         },
//         resize: true,
//         onmousemove: {
//           enable: true,
//         },
//       },
//       modes: {
//         repulse: {
//           distance: 100,
//           duration: 0.4,
//         },
//         parallax: {
//           enable: true,
//           smooth: 10, // Smooth movement
//           speed: 5,  // Adjust this for how fast you want particles to move relative to the cursor
//         },
//       },
//     },
//     retina_detect: true,
//   };
  
//   export default particlesConfig;


const particlesConfigBasic = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.6,
    },
    size: {
      value: 1,
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outMode: "bounce",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  detectRetina: true,
};

export default particlesConfigBasic;