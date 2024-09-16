// import React, { useState } from 'react';

// const Experience = () => {
//   // State to track which card is popped out
//   const [activeCard, setActiveCard] = useState(null);

//   // Function to handle card click
//   const handleCardClick = (cardId) => {
//     setActiveCard(activeCard === cardId ? null : cardId);
//   };

//   return (
//     <div className="min-h-screen bg-black-900 text-white p-10 flex flex-col justify-center items-center">
//       <h1 className="experience-title">Experience</h1>


//       {/* Flexbox container for the experience cards */}
//       <div className="experience-container">
//         {/* Verusen */}
//         <div className={`experience-box ${activeCard === 'verusen' ? 'popped-out' : ''}`} onClick={() => handleCardClick('verusen')}>
//           <div className="timeline-logo-horizontal">
//             <img src="public/images/verusen.png" alt="Verusen Logo" className="company-logo" />
//           </div>
//           <div className="experience-content">
//             <h2 className="text-2xl font-semibold text-gray-350 ">Verusen</h2>
//             <p className="text-lg mt-2 text-gray-300">Data Analyst Research Intern</p>
//             <span className="text-gray-300 block mt-2">May 2024 - August 2024, Atlanta, USA</span>
//             {activeCard === 'verusen' && (
//               <p className="mt-4 text-gray-300">
//                 • Optimized PostgreSQL database queries, reducing query execution time by 40% and improving data storage efficiency.<br />
//                 • Developed FastAPI-based microservices to enhance real-time data flow and manage multiple simultaneous requests.
//                 • Engineered Python modules to optimize data analysis and visualization for Exploratory Data Analysis (EDA).<br />
//                 • Implemented OpenAI’s GPT-4 for supply chain recommendations, improving response time by 15% to 3 seconds.
//               </p>
//             )}
//           </div>
//         </div>

//         {/* University at Buffalo */}
//         <div className={`experience-box ${activeCard === 'buffalo' ? 'popped-out' : ''}`} onClick={() => handleCardClick('buffalo')}>
//           <div className="timeline-logo-horizontal">
//             <img src="public/images/masters_college.jpg" alt="Buffalo Logo" className="company-logo" />
//           </div>
//           <div className="experience-content">
//             <h2 className="text-2xl font-semibold text-gray-350">University at Buffalo</h2>
//             <p className="text-lg mt-2 text-gray-300">Graduate Student Assistant</p>
//             <span className="text-gray-300 block mt-2">Jan 2024 - May 2024, New York, USA</span>
//             {activeCard === 'buffalo' && (
//               <p className="mt-4 text-gray-300">
//                 • Fine-tuned biomedical data using XGBoost, improving classification accuracy by 25% on a 100,000-sample dataset.<br />
//                 • Designed CNN-LSTM models for patient outcome prediction, increasing forecast accuracy by 20%.<br />
//                 • Automated ETL pipelines with Pandas and Spark, reducing data preprocessing time from 4 hours to 2 hours
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Tata Consultancy Services */}
//         <div className={`experience-box ${activeCard === 'tcs' ? 'popped-out' : ''}`} onClick={() => handleCardClick('tcs')}>
//           <div className="timeline-logo-horizontal">
//             <img src="public/images/tcs.png" alt="TCS Logo" className="company-logo" />
//           </div>
//           <div className="experience-content">
//             <h2 className="text-2xl text-gray-350 font-semibold">Tata Consultancy Services</h2>
//             <p className="text-lg mt-2 text-gray-300">Data Engineer </p>
//             <span className="text-gray-300 block mt-2">July 2019 - July 2023, Bangalore, India</span>
//             {activeCard === 'tcs' && (
//               <p className="mt-4 text-gray-300">
//                 • Achieved a 60% reduction in data extraction costs by optimizing ETL processes.in a Snowflake environment, utilizing
// Python, SQL in Teradata, and Informatica for efficient data management.
// <br />
//                 • Facilitated code deployment to production by integrating Azure Pipelines with GitHub.<br />
//                 • Boosted data processing efficiency by 37%, refining mathematical functions in Informatica and pipelines with Spark.<br />
// • Demonstrated Agile expertise in Scrum, driving adaptive planning and digital transformation in data engineering.<br />
// • Improved product quality by 49% through data analytics, visualization in PowerBI, Databricks for defect analysis.<br />
// • Revamped customer satisfaction by 13% through collaborative tableau data visualization projects, using Azure’s
// RBAC for enhanced data security and access control.<br />
// • Streamlined metric workflows with SQL stored procedures, cutting annual costs by $93.9k.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
import React, { useState } from 'react';

const Experience = () => {
  // State to track which card is popped out
  const [activeCard, setActiveCard] = useState(null);

  // Function to handle card click
  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen bg-black-900 text-white p-10 flex flex-col justify-center items-center">
      <h1 className="experience-title">Experience</h1>

      {/* Flexbox container for the experience cards */}
      <div className="experience-container">
        {/* Verusen */}
        <div className={`experience-box ${activeCard === 'verusen' ? 'popped-out' : ''}`} onClick={() => handleCardClick('verusen')}>
          <div className="timeline-logo-horizontal">
            <img src="public/images/verusen.png" alt="Verusen Logo" className="company-logo" />
          </div>
          <div className="experience-content">
            <h2 className="text-2xl font-semibold text-gray-350">Verusen</h2>
            <p className="text-lg mt-2 text-gray-300">Data Analyst Research Intern</p>
            <span className="text-gray-300 block mt-2">May 2024 - August 2024, Atlanta, USA</span>
            {activeCard === 'verusen' && (
              <p className="mt-4 text-gray-300">
                • Optimized PostgreSQL database queries, reducing query execution time by 40% and improving data storage efficiency.<br />
                • Developed FastAPI-based microservices to enhance real-time data flow and manage multiple simultaneous requests.<br />
                • Engineered Python modules to optimize data analysis and visualization for Exploratory Data Analysis (EDA).<br />
                • Implemented OpenAI’s GPT-4 for supply chain recommendations, improving response time by 15% to 3 seconds.
              </p>
            )}
          </div>
        </div>

        {/* University at Buffalo */}
        <div className={`experience-box ${activeCard === 'buffalo' ? 'popped-out' : ''}`} onClick={() => handleCardClick('buffalo')}>
          <div className="timeline-logo-horizontal">
            <img src="public/images/masters_college.jpg" alt="Buffalo Logo" className="company-logo" />
          </div>
          <div className="experience-content">
            <h2 className="text-2xl font-semibold text-gray-350">University at Buffalo</h2>
            <p className="text-lg mt-2 text-gray-300">Graduate Student Assistant</p>
            <span className="text-gray-300 block mt-2">Jan 2024 - May 2024, New York, USA</span>
            {activeCard === 'buffalo' && (
              <p className="mt-4 text-gray-300">
                • Fine-tuned biomedical data using XGBoost, improving classification accuracy by 25% on a 100,000-sample dataset.<br />
                • Designed CNN-LSTM models for patient outcome prediction, increasing forecast accuracy by 20%.<br />
                • Automated ETL pipelines with Pandas and Spark, reducing data preprocessing time from 4 hours to 2 hours.
              </p>
            )}
          </div>
        </div>

        {/* Tata Consultancy Services */}
        <div className={`experience-box ${activeCard === 'tcs' ? 'popped-out' : ''}`} onClick={() => handleCardClick('tcs')}>
          <div className="timeline-logo-horizontal">
            <img src="public/images/tcs.png" alt="TCS Logo" className="company-logo" />
          </div>
          <div className="experience-content">
            <h2 className="text-2xl text-gray-350 font-semibold">Tata Consultancy Services</h2>
            <p className="text-lg mt-2 text-gray-300">Data Engineer </p>
            <span className="text-gray-300 block mt-2">July 2019 - July 2023, Bangalore, India</span>
            {activeCard === 'tcs' && (
              <p className="mt-4 text-gray-300">
                • Achieved a 60% reduction in data extraction costs by optimizing ETL processes in a Snowflake environment, utilizing Python, SQL in Teradata, and Informatica for efficient data management.<br />
                • Facilitated code deployment to production by integrating Azure Pipelines with GitHub.<br />
                • Boosted data processing efficiency by 37%, refining mathematical functions in Informatica and pipelines with Spark.<br />
                • Demonstrated Agile expertise in Scrum, driving adaptive planning and digital transformation in data engineering.<br />
                • Improved product quality by 49% through data analytics, visualization in PowerBI, Databricks for defect analysis.<br />
                • Revamped customer satisfaction by 13% through collaborative Tableau data visualization projects, using Azure’s RBAC for enhanced data security and access control.<br />
                • Streamlined metric workflows with SQL stored procedures, cutting annual costs by $93.9k.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
