// import React from 'react'
// import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
// import { Link } from 'react-router-dom'
// import { Link as ScrollLink } from 'react-scroll';

// const About = () => {
//     return (
//         <section name="About" 
//         className='relative w-full md:h-screen text-white h-unset'>

//             <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>

//                     <div className='pb-8'>
//                         <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40'>About me</h2>
//                     </div>

//                     <p className="mb-4 py-6">Hey! I'm based on Bogotá and I'm Professional in Audiovisual Media with more than 7 years of experience as a video editor. However, I felt that I had the potential for more, so my intellectual curiosity led me to enter into the world of programming.
//                     </p>

//                     <p>Thanks to my creativity, my attention to detail and my determination, I realized that I have a great talent for developing web applications. I am fascinated by this great world of technologies and possibilities, and I am sure that I will be able to create incredible projects both professionally and personally with you.</p>

//                     <Link to='/about-me' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
//                         See more
//                         <span className=''><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
//                     </Link>
                
//             </div>

//             <ScrollLink to="Projects" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
//                 <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
//             </ScrollLink>
            
//         </section>
        
//     )
// }

// export default About
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <section name="About" className="relative w-full md:h-screen text-white flex items-center justify-center bg-black-900">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/images/profilepic2.jpg" 
            alt="My profile" 
            className="rounded-2xl w-2/3 md:w-full max-w-sm object-cover shadow-2xl shadow-primary-color/20" 
            style={{ filter: 'drop-shadow(0px -4px 4px rgba(255, 255, 237, 9))' }}
          />
        </div>

        {/* Right Side: About Info */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h1>
          
          

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">

            Hey! I'm Anusha Udayakumar, Data enthusiast by day, innovation catalyst by night. With a passion for harnessing the power of data to drive growth and transformation, I bring a unique blend of technical expertise and creative vision to the table. With a strong foundation in machine learning, AI , and web development, I'm driven to harness the power of data for growth and transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
