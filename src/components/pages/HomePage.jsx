
// import React, { useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import ParticleNetwork from './3DComponents/ParticleNetwork';
// import NeuralStructure from './3DComponents/NeuralStructure';
// import BloomEffect from './3DComponents/BloomEffect';
// import ParticlesBackground from '../ParticlesBackground';
// import About from './homepage-comps/About';
// import MyProjects from './homepage-comps/MyProjects';
// import Techs from './homepage-comps/Techs';
// import Contact from './homepage-comps/Contact';
// import { Link as ScrollLink } from 'react-scroll';

// function HomePage() {
//   const [expanded, setExpanded] = useState(false);
//   const [showNodes, setShowNodes] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);
//   const [showNeuralStructure, setShowNeuralStructure] = useState(false);
//   const [nameVisible, setNameVisible] = useState(true);

//   const handleClick = () => {
//     if (!expanded) {
//       setExpanded(true);
//       setShowNodes(true);
//       setTimeout(() => setNameVisible(false), 1000); 
//     } else if (!showNeuralStructure) {
//       setShowDetails(true);
//       setShowNeuralStructure(true);
//     }
//   };

//   return (
//     <div className="fullpage-wrapper">
//       {/* Full-page canvas and scrollable content */}
//       <section className="fullpage-section">
//         <div className="particles-background">
//           <ParticlesBackground />
//         </div>

//         <div className="canvas-content">
//           <Canvas
//             style={{ background: 'transparent', width: '100vw', height: '100vh' }}
//             camera={{ position: [0, 0, 100], fov: 60 }}
//             onClick={handleClick}
//           >
//             <ParticleNetwork
//               expanded={expanded}
//               showNodes={showNodes}
//               showDetails={showDetails}
//               showNeuralStructure={showNeuralStructure}
//               nameVisible={nameVisible}
//             />
//             {showNeuralStructure && <NeuralStructure />}
//             <BloomEffect />
//             <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
//           </Canvas>
//         </div>

//         {/* Scroll down icon */}
//         <ScrollLink
//           to="About"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       {/* About section */}
//       <section name="About" className="fullpage-section">
//         <About />
//         <ScrollLink
//           to="Projects"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       {/* Projects section */}
//       <section name="Projects" className="fullpage-section">
//         <MyProjects />
//         <ScrollLink
//           to="Technologies"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       {/* Technologies section */}
//       <section name="Technologies" className="fullpage-section">
//         <Techs />
//         <ScrollLink
//           to="Contact"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       {/* Contact section */}
//       <section name="Contact" className="fullpage-section">
//         <Contact />
//       </section>
//     </div>
//   );
// }

// export default HomePage;
// import React, { useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import ParticleNetwork from './3DComponents/ParticleNetwork';
// import NeuralStructure from './3DComponents/NeuralStructure';
// import BloomEffect from './3DComponents/BloomEffect';
// import ParticlesBackground from '../ParticlesBackground';
// import About from './homepage-comps/About';
// import MyProjects from './homepage-comps/MyProjects';
// import Techs from './homepage-comps/Techs';
// import Contact from './homepage-comps/Contact';
// import GeneralFooter from '../GeneralFooter';  // Import the Footer component
// import { Link as ScrollLink } from 'react-scroll';

// function HomePage() {
//   const [expanded, setExpanded] = useState(false);
//   const [showNodes, setShowNodes] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);
//   const [showNeuralStructure, setShowNeuralStructure] = useState(false);
//   const [nameVisible, setNameVisible] = useState(true);

//   const handleClick = () => {
//     if (!expanded) {
//       setExpanded(true);
//       setShowNodes(true);
//       setTimeout(() => setNameVisible(false), 1000); 
//     } else if (!showNeuralStructure) {
//       setShowDetails(true);
//       setShowNeuralStructure(true);
//     }
//   };

//   return (
//     <div className="fullpage-wrapper">
//       {/* Full-page canvas and scrollable content */}
//       <section className="fullpage-section">
//         <div className="particles-background">
//           <ParticlesBackground />
//         </div>

//         <div className="canvas-content">
//           <Canvas
//             style={{ background: 'transparent', width: '100vw', height: '100vh' }}
//             camera={{ position: [0, 0, 100], fov: 60 }}
//             onClick={handleClick}
//           >
//             <ParticleNetwork
//               expanded={expanded}
//               showNodes={showNodes}
//               showDetails={showDetails}
//               showNeuralStructure={showNeuralStructure}
//               nameVisible={nameVisible}
//             />
//             {showNeuralStructure && <NeuralStructure />}
//             <BloomEffect />
//             <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
//           </Canvas>
//         </div>

//         {/* Scroll down icon */}
//         <ScrollLink
//           to="About"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       {/* About section */}
//       <section name="About" className="fullpage-section">
//         <About />
//         <ScrollLink
//           to="Projects"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       {/* Projects section */}
//       <section name="Projects" className="fullpage-section">
//         <MyProjects />
//         <ScrollLink
//           to="Technologies"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       {/* Technologies section */}
//       <section name="Technologies" className="fullpage-section">
//         <Techs />
//         <ScrollLink
//           to="Contact"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       {/* Contact section */}
//       <section name="Contact" className="fullpage-section">
//         <Contact />
//       </section>

//       {/* Footer appears only after the Contact section */}
//       <GeneralFooter /> {/* Footer positioned after the Contact section */}
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import ParticleNetwork from './3DComponents/ParticleNetwork';
// import NeuralStructure from './3DComponents/NeuralStructure';
// import BloomEffect from './3DComponents/BloomEffect';
// import ParticlesBackground from '../ParticlesBackground';
// import About from './homepage-comps/About';
// import MyProjects from './homepage-comps/MyProjects';
// import Techs from './homepage-comps/Techs';
// import Contact from './homepage-comps/Contact';
// import GeneralFooter from '../GeneralFooter';
// import { Typewriter } from 'react-simple-typewriter';
// import { Link as ScrollLink } from 'react-scroll';

// function HomePage() {
//   const [expanded, setExpanded] = useState(false);
//   const [showNodes, setShowNodes] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);
//   const [showNeuralStructure, setShowNeuralStructure] = useState(false);
//   const [showTypewriter, setShowTypewriter] = useState(true); // Track typewriter visibility

//   const handleClick = () => {
//     if (!expanded) {
//       setExpanded(true);
//       setShowNodes(true);
//       setTimeout(() => setShowTypewriter(true), 1000); // Show typewriter after a delay
//     } else if (!showNeuralStructure) {
//       setShowDetails(true);
//       setShowNeuralStructure(true);
//       setShowTypewriter(false); // Hide typewriter after the second page
//     }
//   };

//   return (
//     <div className="fullpage-wrapper">
//       <section className="fullpage-section">
//         <div className="particles-background">
//           <ParticlesBackground />
//         </div>

//         <div className="canvas-content">
//           <Canvas
//             style={{ background: 'transparent', width: '100vw', height: '100vh' }}
//             camera={{ position: [0, 0, 100], fov: 60 }}
//             onClick={handleClick}
//           >
//             <ParticleNetwork
//               expanded={expanded}
//               showNodes={showNodes}
//               showDetails={showDetails}
//               showNeuralStructure={showNeuralStructure}
//             />
//             {showNeuralStructure && <NeuralStructure />}
//             <BloomEffect />
//             <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
//           </Canvas>
//         </div>

//         {/* Show Typewriter text ONLY on the second page */}
//         {expanded && showTypewriter && (
//   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16">
//     <span className="custom-typewriter">
//       {/* Constant "I am a" */}
//       I am a&nbsp;
//       <Typewriter
//         words={['Data Scientist','Developer', 'Tech Enthusiast']}
//         loop={true}
//         cursor
//         cursorStyle="|"
//         typeSpeed={70}
//         deleteSpeed={50}
//         delaySpeed={1000}
//         className="custom-typewriter" /* Apply the custom CSS class */
//       />
//     </span>
//   </div>
// )}



//         <ScrollLink
//           to="About"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       <section name="About" className="fullpage-section">
//         <About />
//         <ScrollLink
//           to="Projects"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       <section name="Projects" className="fullpage-section">
//         <MyProjects />
//         <ScrollLink
//           to="Technologies"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       <section name="Technologies" className="fullpage-section">
//         <Techs />
//         <ScrollLink
//           to="Contact"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       <section name="Contact" className="fullpage-section">
//         <Contact />
//       </section>

//       <GeneralFooter />
//     </div>
//   );
// }

// export default HomePage;
// import React, { useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import ParticleNetwork from './3DComponents/ParticleNetwork';
// import NeuralStructure from './3DComponents/NeuralStructure';
// import BloomEffect from './3DComponents/BloomEffect';
// import ParticlesBackground from '../ParticlesBackground';
// import About from './homepage-comps/About';
// import MyProjects from './homepage-comps/MyProjects';
// import Techs from './homepage-comps/Techs';
// import Contact from './homepage-comps/Contact';
// import GeneralFooter from '../GeneralFooter';
// import { Typewriter } from 'react-simple-typewriter';
// import { Link as ScrollLink } from 'react-scroll';

// function HomePage() {
//   const [expanded, setExpanded] = useState(false);
//   const [showNodes, setShowNodes] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);
//   const [showNeuralStructure, setShowNeuralStructure] = useState(false);
//   const [showTypewriter, setShowTypewriter] = useState(true); // Track typewriter visibility

//   const handleClick = () => {
//     if (!expanded) {
//       setExpanded(true);
//       setShowNodes(true);
//       setTimeout(() => setShowTypewriter(true), 1000); // Show typewriter after a delay
//     } else if (!showNeuralStructure) {
//       setShowDetails(true);
//       setShowNeuralStructure(true);
//       setShowTypewriter(false); // Hide typewriter after the second page
//     }
//   };

//   return (
//     <div className="fullpage-wrapper">
//       <section className="fullpage-section">
//         <div className="particles-background">
//           <ParticlesBackground />
//         </div>

//         <div className="canvas-content">
//           <Canvas
//             style={{ background: 'transparent', width: '100vw', height: '100vh' }}
//             camera={{ position: [0, 0, 100], fov: 60 }}
//             onClick={handleClick}
//           >
//             <ParticleNetwork
//               expanded={expanded}
//               showNodes={showNodes}
//               showDetails={showDetails}
//               showNeuralStructure={showNeuralStructure}
//             />
//             {showNeuralStructure && <NeuralStructure />}
//             <BloomEffect />
//             <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
//           </Canvas>
//         </div>

//         {/* CTA Button - Click to Explore */}
//         {/* CTA Button - Minimal and Small in Bottom Right Corner */}
// {/* CTA Button - Minimal and Small in Bottom Center */}
// {!expanded && (
//   <div
//     className="absolute bottom-5 left-1/2 transform -translate-x-1/2"  // Center it horizontally
//   >
//     <button
//       onClick={handleClick}
//       className="text-white font-bold hover:text-primary-color transition"
//       style={{
//         position: 'fixed',
//         bottom: '10px',
//         left: '50%',
//         transform: 'translateX(-50%)', // This ensures the button is centered horizontally
//         zIndex: 1000, // Ensures the button stays above other elements
//         fontSize: '0.9em', // Smaller font size for minimal appearance
//         background: 'none', // No background color
//         border: 'none',     // No border
//         cursor: 'pointer',
//          // Optional: Underline to make it look like a link
//       }}
//     >
//       Click to Explore
//     </button>
//   </div>
// )}



//         {/* Show Typewriter text ONLY on the second page */}
//         {expanded && showTypewriter && (
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16">
//             <span className="custom-typewriter">
//               {/* Constant "I am a" */}
//               I am a&nbsp;
//               <Typewriter
//                 words={['Data Scientist', 'Developer', 'Tech Enthusiast']}
//                 loop={true}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={70}
//                 deleteSpeed={50}
//                 delaySpeed={1000}
//                 className="custom-typewriter" /* Apply the custom CSS class */
//               />
//             </span>
//           </div>
//         )}

//         {/* Scroll Down Indicator */}
//         <ScrollLink
//           to="About"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       <section name="About" className="fullpage-section">
//         <About />
//         <ScrollLink
//           to="Projects"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       <section name="Projects" className="fullpage-section">
//         <MyProjects />
//         <ScrollLink
//           to="Technologies"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       <section name="Technologies" className="fullpage-section">
//         <Techs />
//         <ScrollLink
//           to="Contact"
//           smooth
//           duration={500}
//           className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary-color"
//         >
//           <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
//         </ScrollLink>
//       </section>

//       <section name="Contact" className="fullpage-section">
//         <Contact />
//       </section>

//       <GeneralFooter />
//     </div>
//   );
// }

//export default HomePage;
// import React, { useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import ParticleNetwork from './3DComponents/ParticleNetwork';
// import NeuralStructure from './3DComponents/NeuralStructure';
// import BloomEffect from './3DComponents/BloomEffect';
// import ParticlesBackground from '../ParticlesBackground';
// import About from './homepage-comps/About';
// import Education from './homepage-comps/Education';
// import Experience from './homepage-comps/Experience';
// import MyProjects from './homepage-comps/MyProjects';
// import Techs from './homepage-comps/Techs';
// import Contact from './homepage-comps/Contact';
// import GeneralFooter from '../GeneralFooter';
// import { Typewriter } from 'react-simple-typewriter';


// function HomePage() {
//   const [expanded, setExpanded] = useState(false);
//   const [showNodes, setShowNodes] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);
//   const [showNeuralStructure, setShowNeuralStructure] = useState(false);
//   const [showTypewriter, setShowTypewriter] = useState(true); // Track typewriter visibility
//   const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
// };
//   const handleClick = () => {
//     if (!expanded) {
//       setExpanded(true);
//       setShowNodes(true);
//       setTimeout(() => setShowTypewriter(true), 1000); // Show typewriter after a delay
//     } else if (!showNeuralStructure) {
//       setShowDetails(true);
//       setShowNeuralStructure(true);
//       setShowTypewriter(false); // Hide typewriter after the second page
//     }
//   };

//   return (
    
//     <div className="fullpage-wrapper">
//       <section className="fullpage-section">
//         <div className="particles-background">
//           <ParticlesBackground />
//         </div>

//         <div className="canvas-content">
//           <Canvas
//             style={{ background: 'transparent', width: '100vw', height: '100vh' }}
//             camera={{ position: [0, 0, 100], fov: 60 }}
//             onClick={handleClick}
//           >
//             <ParticleNetwork
//               expanded={expanded}
//               showNodes={showNodes}
//               showDetails={showDetails}
//               showNeuralStructure={showNeuralStructure}
//             />
//             {showNeuralStructure && <NeuralStructure />}
//             <BloomEffect />
//             <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
//           </Canvas>
//         </div>

//         {/* CTA Button - Minimal and Small in Bottom Center */}
//         {!expanded && (
//           <div
//             className="absolute bottom-5 left-1/2 transform -translate-x-1/2"  // Center it horizontally
//           >
//             <span className="custom-typewriter1">
//               <Typewriter
//                 words={['Click to Explore']}
//                 loop={false}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={70}
//                 deleteSpeed={100}
//                 delaySpeed={500}
//                 className="custom-typewriter" /* Apply the custom CSS class */
//               />
//             </span>
            
//           </div>
//         )}

//         {/* Show Typewriter text ONLY on the second page */}
//         {expanded && showTypewriter && (
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16">
//             <span className="custom-typewriter">
//               {/* Constant "I am a" */}
//               I am a&nbsp;
//               <Typewriter
//                 words={['Data Scientist', 'Developer', 'Tech Enthusiast']}
//                 loop={true}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={70}
//                 deleteSpeed={100}
//                 delaySpeed={500}
//                 className="custom-typewriter" /* Apply the custom CSS class */
//               />
//             </span>
//           </div>
//         )}

        
//         {/* TAP THE NODES PROMPT - AFTER THE SECOND CLICK */}
//         {showNeuralStructure && (
          
//           <div
//             className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center"  // Positioned slightly above the bottom
            
//           >
//             <span className="custom-typewriter1">
//               <Typewriter
//                 words={['Tap the nodes. Its fun!']}
//                 loop={false}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={70}
//                 deleteSpeed={100}
//                 delaySpeed={500}
//                 className="custom-typewriter" /* Apply the custom CSS class */
//               />
//             </span>
//           </div>
          
//         )}
//       </section>

//       <section name="About" className="fullpage-section">
//         <About />
//       </section>
//       <section name="Education" className="fullpage-section">
//         <Education />
//       </section>
//       <section name="Experience" className="fullpage-section">
//         <Experience />
//       </section>
//       <section name="Projects" className="fullpage-section">
//         <MyProjects />
//       </section>

//       <section name="Technologies" className="fullpage-section">
//         <Techs />
//       </section>

//       <section name="Contact" className="fullpage-section">
//         <Contact />
//       </section>

//       <GeneralFooter />
//     </div>
//   );
// }

// export default HomePage;


import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ParticleNetwork from './3DComponents/ParticleNetwork';
import NeuralStructure from './3DComponents/NeuralStructure';
import BloomEffect from './3DComponents/BloomEffect';
import ParticlesBackground from '../ParticlesBackground';
import About from './homepage-comps/About';
import Education from './homepage-comps/Education';
import Experience from './homepage-comps/Experience';
import MyProjects from './homepage-comps/MyProjects';
import Techs from './homepage-comps/Techs';
import Contact from './homepage-comps/Contact';
import GeneralFooter from '../GeneralFooter';
import { Typewriter } from 'react-simple-typewriter';

function HomePage() {
  const [expanded, setExpanded] = useState(false);
  const [showNodes, setShowNodes] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showNeuralStructure, setShowNeuralStructure] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [isContactPage, setIsContactPage] = useState(false);

  // Refs for sections
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const techsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Monitor if we are on the "Contact" section based on scroll position
  const handleScroll = () => {
    if (contactRef.current) {
      const contactSectionTop = contactRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (contactSectionTop <= viewportHeight) {
        setIsContactPage(true); // Show footer when in view
      } else {
        setIsContactPage(false);
      }
    }
  };

  // Listen for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Expand function for the neural network section
  const handleClick = () => {
    if (!expanded) {
      setExpanded(true);
      setShowNodes(true);
      setTimeout(() => setShowTypewriter(true), 1000);
    } else if (!showNeuralStructure) {
      setShowDetails(true);
      setShowNeuralStructure(true);
      setShowTypewriter(false);
    }
  };

  return (
    <div className="fullpage-wrapper">
      <section className="fullpage-section">
        <div className="particles-background">
          <ParticlesBackground />
        </div>

        <div className="canvas-content">
          <Canvas
            style={{ background: 'transparent', width: '100vw', height: '100vh' }}
            camera={{ position: [0, 0, 100], fov: 60 }}
            onClick={handleClick}
          >
            <ParticleNetwork
              expanded={expanded}
              showNodes={showNodes}
              showDetails={showDetails}
              showNeuralStructure={showNeuralStructure}
            />
            {showNeuralStructure && <NeuralStructure />}
            <BloomEffect />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          </Canvas>
        </div>

        {!expanded && (
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <span className="custom-typewriter1">
              <Typewriter
                words={['Click to Explore']}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={100}
                delaySpeed={500}
                className="custom-typewriter"
              />
            </span>
          </div>
        )}

        {expanded && showTypewriter && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16">
            <span className="custom-typewriter">
              I am a&nbsp;
              <Typewriter
                words={['Data Scientist', 'Developer', 'Tech Enthusiast']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={40}
                deleteSpeed={50}
                delaySpeed={400}
                className="custom-typewriter"
              />
            </span>
          </div>
        )}

        {showNeuralStructure && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
            <span className="custom-typewriter1">
              <Typewriter
                words={['Tap the nodes. It\'s fun!']}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={100}
                delaySpeed={500}
                className="custom-typewriter"
              />
            </span>
          </div>
        )}
      </section>

      <section ref={aboutRef} name="About" className="fullpage-section">
        <About />
      </section>
      <section ref={educationRef} name="Education" className="fullpage-section">
        <Education />
      </section>
      <section ref={experienceRef} name="Experience" className="fullpage-section">
        <Experience />
      </section>
      <section ref={projectsRef} name="Projects" className="fullpage-section">
        <MyProjects />
      </section>

      <section ref={techsRef} name="Technologies" className="fullpage-section">
        <Techs />
      </section>

      {/* Render the footer ONLY on the "Contact" section */}
      <section ref={contactRef} name="Contact" className="fullpage-section">
        <div className="contact-container">
          <Contact />
        </div>
        <GeneralFooter /> {/* The footer is inside the Contact section */}
      </section>
    </div>
  );
}

export default HomePage;
