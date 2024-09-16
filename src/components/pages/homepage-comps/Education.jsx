// import React, { useState } from 'react';

// const Education = () => {
//   // State to track which card is popped out
//   const [activeCard, setActiveCard] = useState(null);

//   // Function to handle card click
//   const handleCardClick = (cardId) => {
//     // Toggle the active card, if it's already active, set to null
//     setActiveCard(activeCard === cardId ? null : cardId);
//   };

//   return (
//     <div className="min-h-screen bg-black-900 text-white p-10 flex flex-col justify-center items-center">
//       <h1 className="text-4xl font-bold mb-10 text-center text-white">Education</h1>

//       {/* Timeline container */}
//       <div className="relative border-l-4 border-gray-300 dark:border-gray-700">

//         {/* Bachelor's degree */}
//         <div className={`mb-10 ml-10 transition-transform duration-300 ease-out ${activeCard === 'bachelors' ? 'transform scale-105' : ''}`}>
//           <div className="absolute w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full left-[-19px] top-0"></div>
//           <div 
//             className="bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
//             onClick={() => handleCardClick('bachelors')}
//           >
//             <h2 className="text-2xl font-semibold">Bachelor of Engineering in Computer Science</h2>
//             <p className="text-lg mt-2 text-gray-400">Vidyavardhaka College of Engineering (VVCE)</p>
//             <span className="text-gray-400 block mt-2">2015 - 2019</span>
//             <p className="mt-4">
//               I completed my undergraduate studies in Computer Science Engineering. During this time, I gained a solid foundation in algorithms, data structures, and software development.
//             </p>
//           </div>
//         </div>

//         {/* Master's degree */}
//         <div className={`mb-10 ml-10 transition-transform duration-300 ease-out ${activeCard === 'masters' ? 'transform scale-105' : ''}`}>
//           <div className="absolute w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full left-[-19px] top-0"></div>
//           <div 
//             className="bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
//             onClick={() => handleCardClick('masters')}
//           >
//             <h2 className="text-2xl font-semibold">Master of Engineering Science in Data Science</h2>
//             <p className="text-lg mt-2 text-gray-400">University at Buffalo (UB)</p>
//             <span className="text-gray-500 block mt-2">2023 - 2024</span>
//             <p className="mt-4">
//               Currently pursuing my master's degree in Data Science, focusing on machine learning, big data, and advanced analytics to solve complex real-world problems.
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Education;
// import React, { useState } from 'react';

// const Education = () => {
//   // State to track which card is popped out
//   const [activeCard, setActiveCard] = useState(null);

//   // Function to handle card click
//   const handleCardClick = (cardId) => {
//     // Toggle the active card, if it's already active, set to null
//     setActiveCard(activeCard === cardId ? null : cardId);
//   };

//   return (
//     <div className="min-h-screen bg-black-900 text-white p-10 flex flex-col justify-center items-center">
//       <h1 className="education-title mb-10">Education</h1>

//       {/* Timeline container */}
//       <div className="timeline">

        

//         {/* Master's degree */}
//         <div className={`education-box mb-10 ml-10 transition-transform duration-300 ease-out ${activeCard === 'masters' ? 'transform scale-105' : ''}`}>
//           <div className="timeline-dot top-0"></div>
//           <div 
//             className="cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
//             onClick={() => handleCardClick('masters')}
//           >
//             <h2 className="text-2xl font-semibold text-gray-350">Master of Engineering Science in Data Science</h2>
//             <p className="text-lg mt-2 text-gray-300">University at Buffalo (UB)</p>
//             <span className="text-gray-300 block mt-2">2023 - 2024</span>
//             <p className="mt-4 text-gray-300">
//               Currently pursuing my master's degree in Data Science, focusing on machine learning, big data, and advanced analytics to solve complex real-world problems.
//             </p>
//           </div>
//         </div>
//         {/* Bachelor's degree */}
//         <div className={`education-box mb-10 ml-10 transition-transform duration-300 ease-out ${activeCard === 'bachelors' ? 'transform scale-105' : ''}`}>
//           <div className="timeline-dot top-0"></div>
//           <div 
//             className="cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
//             onClick={() => handleCardClick('bachelors')}
//           >
//             <h2 className="text-2xl font-semibold">Bachelor of Engineering in Computer Science</h2>
//             <p className="text-lg mt-2 text-gray-300">Vidyavardhaka College of Engineering (VVCE)</p>
//             <span className="text-gray-300 block mt-2">2015 - 2019</span>
//             <p className="mt-4 text-gray-300">
//               I completed my undergraduate studies in Computer Science Engineering. During this time, I gained a solid foundation in algorithms, data structures, and software development.
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Education;


import React, { useState } from 'react';

const Education = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen bg-black-900 text-white p-10 flex flex-col justify-center items-center">
      <h1 className="education-title mb-10">Education</h1>

      {/* Flexbox container for the education cards */}
      <div className="education-container">
        
        {/* Master's degree card */}
        <div
          className={`education-box ${activeCard === 'masters' ? 'popped-out' : ''}`}
          onClick={() => handleCardClick('masters')}
        >
          <div className="timeline-logo-horizontal">
            <img src="public/images/masters_college.jpg" alt="UB Logo" className="school-logo" />
          </div>
          <div className="education-content">
            <h2 className="text-2xl font-semibold text-gray-350">Master of Engineering Science in Data Science</h2>
            <p className="text-lg mt-2 text-gray-300">University at Buffalo (UB)</p>
            <span className="text-gray-300 block mt-2">2023 - 2024</span>
            {activeCard === 'masters' && (
              <p className="mt-4 text-gray-300">
                Currently pursuing my master's degree in Data Science, focusing on machine learning, big data, and advanced analytics to solve complex real-world problems.
              </p>
            )}
          </div>
        </div>

        {/* Bachelor's degree card */}
        <div
          className={`education-box ${activeCard === 'bachelors' ? 'popped-out' : ''}`}
          onClick={() => handleCardClick('bachelors')}
        >
          <div className="timeline-logo-horizontal">
            <img src="public/images/bachelors_college.png" alt="College Logo" className="school-logo" />
          </div>
          <div className="education-content">
            <h2 className="text-2xl font-semibold">Bachelor of Engineering in Computer Science</h2>
            <p className="text-lg mt-2 text-gray-300">Vidyavardhaka College of Engineering (VVCE)</p>
            <span className="text-gray-300 block mt-2">2015 - 2019</span>
            {activeCard === 'bachelors' && (
              <p className="mt-4 text-gray-300">
                I completed my undergraduate studies in Computer Science Engineering, focusing on algorithms, data structures, and software development.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
