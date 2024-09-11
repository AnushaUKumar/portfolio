
// import React, { useState } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import AboutPage from './components/pages/AboutPage';
// import HomePage from './components/pages/HomePage';
// import SocialLinks from './components/SocialLinks';
// import GeneralFooter from './components/GeneralFooter';
// import AllProjectsPage from './components/pages/AllProjectsPage';
// import AllTechsPage from './components/pages/AllTechsPage';
// import ParticlesBackground from './components/ParticlesBackground'; // Import particles background

// function App() {
//   const [showParticles, setShowParticles] = useState(true);  // Toggle for particles
//   const location = useLocation();  // Get the current route location

//   // Conditionally render footer only on specific pages (if not the homepage)
//   const showFooter = location.pathname !== '/'; 

//   return (
//     <div className="relative flex flex-col min-h-screen">
//       {/* Sidebar */}
//       <SocialLinks />

//       {/* Button to toggle particle background */}
//       <button 
//         onClick={() => setShowParticles(!showParticles)} 
//         className="fixed top-5 right-5 p-3 bg-gray-800 text-white rounded-md z-50"
//       >
//         Toggle Particles
//       </button>

//       {/* Particle background */}
//       {showParticles && <ParticlesBackground />}

//       {/* Main content */}
//       <div className="flex-grow page-scrollable">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about-me" element={<AboutPage />} />
//           <Route path="/projects" element={<AllProjectsPage />} />
//           <Route path="/technologies" element={<AllTechsPage />} />
//         </Routes>
//       </div>

//       {/* Conditionally render footer */}
//       {showFooter && <GeneralFooter />}
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import AboutPage from './components/pages/AboutPage';
// import HomePage from './components/pages/HomePage';
// import SocialLinks from './components/SocialLinks';
// import AllProjectsPage from './components/pages/AllProjectsPage';
// import AllTechsPage from './components/pages/AllTechsPage';
// import ParticlesBackground from './components/ParticlesBackground'; // Import particles background

// function App() {
//   const [showParticles, setShowParticles] = useState(true);  // Toggle for particles
//   const location = useLocation();  // Get the current route location

//   return (
//     <div className="relative flex flex-col min-h-screen">
//       {/* Sidebar */}
//       <SocialLinks />

//       {/* Button to toggle particle background */}
//       <button 
//         onClick={() => setShowParticles(!showParticles)} 
//         className="fixed top-5 right-5 p-3 bg-gray-800 text-white rounded-md z-50"
//       >
//         Toggle Particles
//       </button>

//       {/* Particle background */}
//       {showParticles && <ParticlesBackground />}

//       {/* Main content */}
//       <div className="flex-grow page-scrollable">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about-me" element={<AboutPage />} />
//           <Route path="/projects" element={<AllProjectsPage />} />
//           <Route path="/technologies" element={<AllTechsPage />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import the star icon
// import AboutPage from './components/pages/AboutPage';
// import HomePage from './components/pages/HomePage';
// import SocialLinks from './components/SocialLinks';
// import AllProjectsPage from './components/pages/AllProjectsPage';
// import AllTechsPage from './components/pages/AllTechsPage';
// import ParticlesBackground from './components/ParticlesBackground'; // Import particles background

// function App() {
//   const [showParticles, setShowParticles] = useState(true);  // Toggle for particles
//   const location = useLocation();  // Get the current route location

//   return (
//     <div className="relative flex flex-col min-h-screen">
//       {/* Sidebar */}
//       <SocialLinks />

//       {/* Button to toggle particle background */}
//       <button 
//         onClick={() => setShowParticles(!showParticles)} 
//         className="fixed top-5 right-5 p-2 bg-gray-900 text-white rounded-full z-50"
//       >
//         <FontAwesomeIcon icon={faStar} />
//       </button>

//       {/* Particle background */}
//       {showParticles && <ParticlesBackground />}

//       {/* Main content */}
//       <div className="flex-grow page-scrollable">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about-me" element={<AboutPage />} />
//           <Route path="/projects" element={<AllProjectsPage />} />
//           <Route path="/technologies" element={<AllTechsPage />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import the star icon
// import AboutPage from './components/pages/AboutPage';
// import HomePage from './components/pages/HomePage';
// import GeneralFooter from "./components/GeneralFooter"
// import SocialLinks from './components/SocialLinks';
// import AllProjectsPage from './components/pages/AllProjectsPage';
// import AllTechsPage from './components/pages/AllTechsPage';
// import ParticlesBackground from './components/ParticlesBackground'; // Import particles background
// import About from './components/pages/homepage-comps/About.jsx';
// function App() {
//   const [showParticles, setShowParticles] = useState(true);  // Toggle for particles
//   const location = useLocation();  // Get the current route location

//   return (
//     <div className="relative flex flex-col min-h-screen">
//       {/* Sidebar */}
//       <SocialLinks />

//       {/* Button to toggle particle background */}
//       <button 
//         onClick={() => setShowParticles(!showParticles)} 
//         className="fixed top-5 right-5 p-2 text-white rounded-full z-50"
//         style={{ background: 'transparent',
//           border: '0.2px solid white', // Add a white border
//           color: 'gray' // Ensure the icon color is whitev
//         }}  
//         // Set background to transparent
//       >
//         <FontAwesomeIcon icon={faStar} />
//       </button>

//       {/* Particle background */}
//       {showParticles && <ParticlesBackground />}

//       {/* Main content */}
//       <div className="flex-grow page-scrollable">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/About Me" element={<About />} />
//           <Route path="/projects" element={<AllProjectsPage />} />
//           <Route path="/technologies" element={<AllTechsPage />} />
//         </Routes>
        
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage';
import GeneralFooter from "./components/GeneralFooter";
import MobileSocialLinks from './components/pages/homepage-comps/MobileSocialLinks';
import AllProjectsPage from './components/pages/AllProjectsPage';
import AllTechsPage from './components/pages/AllTechsPage';
import ParticlesBackground from './components/ParticlesBackground';
import About from './components/pages/homepage-comps/About.jsx';
import SocialLinks from './components/SocialLinks.jsx';

function App() {
  const [showParticles, setShowParticles] = useState(true);
  const location = useLocation();

  return (
    <div className="fixed flex flex-col min-h-screen">
      
      {/* SocialLinks placed here to ensure it shows on all pages */}
      <SocialLinks/>

      {/* Button to toggle particle background */}
      <button 
        onClick={() => setShowParticles(!showParticles)} 
        className="fixed top-5 right-5 p-2 text-white rounded-full z-50"
        style={{ background: 'transparent', border: '0.2px solid white', color: 'gray' }}  
      >
        <FontAwesomeIcon icon={faStar} />
      </button>

      {/* Particle background */}
      {showParticles && <ParticlesBackground />}

      {/* Main content */}
      <div className="flex-grow page-scrollable">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About Me" element={<About />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/technologies" element={<AllTechsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
