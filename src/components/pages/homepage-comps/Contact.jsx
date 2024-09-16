// import React from 'react'
// import axios from 'axios';
// import Swal from 'sweetalert2'


// const Contact = () => {

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const formData = new FormData(event.target);

//         axios.post('https://getform.io/f/feff19e5-27a9-4f74-be5d-9699c4b245ed', formData)
//             .then(response => {
//                 Swal.fire({
//                     icon: 'success',
//                     iconColor: '#0DFC4B',
//                     title: 'Thank you for contacting me. It will be a pleasure to work with you!',
//                     showConfirmButton: true,
//                     background: '#191a19',
//                     color: '#fff',
//                     confirmButtonColor: '#117911',
//                     backdrop: `
//                         rgba(54, 55, 54,0.4)
//                     `
//                 })
//             })
//             .catch(error => {
//             console.log(error);
//             });
        
//         event.target.reset();
//     }
    

//     return (
//         <section name='Contact' className='relative w-full md:h-screen p-4 text-white h-unset'>
//             <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
//                 <div className='pb-8'>
//                     <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Contact</h2>
//                     <p className='py-6'>Submit the form below to get in touch with me</p>
//                 </div>

//                 <div className='flex justify-center items-center'>
//                     <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-1/2'>
//                         <input 
//                         type="text" 
//                         name='name' placeholder='Enter your name' 
//                         className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color' required/>

//                         <input 
//                         type="email" 
//                         name='email' placeholder='Enter your email' 
//                         className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color' required />

//                         <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color' required></textarea>

//                         <button className='text-black font-semibold bg-gradient-to-t from-green-400 to-primary-color px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Contact
// // Contact.jsx

// import React from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const Contact = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);

//     axios
//       .post('https://getform.io/f/feff19e5-27a9-4f74-be5d-9699c4b245ed', formData)
//       .then((response) => {
//         Swal.fire({
//           icon: 'success',
//           iconColor: '#0DFC4B',
//           title: 'Thank you for contacting me. It will be a pleasure to work with you!',
//           showConfirmButton: true,
//           background: '#191a19',
//           color: '#fff',
//           confirmButtonColor: '#117911',
//           backdrop: `rgba(54, 55, 54,0.4)`,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     event.target.reset();
//   };

//   return (
//     <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//       <div className="pb-8">
//         <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl">
//           Contact
//         </h2>
//         <p className="py-6">Submit the form below to get in touch with me</p>
//       </div>

//       <div className="flex justify-center items-center flex-grow">
//         <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2">
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
//             required
//           />

//           <textarea
//             name="message"
//             rows="10"
//             placeholder="Enter your message"
//             className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
//             required
//           ></textarea>

//           <button className="text-black font-semibold bg-gradient-to-t from-green-400 to-primary-color px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//             Let's talk
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const Contact = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     setIsLoading(true); // Show loading spinner

//     const formData = new FormData(event.target);

//     axios
//       .post('https://getform.io/f/feff19e5-27a9-4f74-be5d-9699c4b245ed', formData)
//       .then((response) => {
//         setIsLoading(false); // Hide loading spinner
//         Swal.fire({
//           icon: 'success',
//           iconColor: '#0DFC4B',
//           title: 'Thank you for contacting me. It will be a pleasure to work with you!',
//           showConfirmButton: true,
//           background: '#191a19',
//           color: '#fff',
//           confirmButtonColor: '#117911',
//           backdrop: `rgba(54, 55, 54,0.4)`,
//         });
//       })
//       .catch((error) => {
//         setIsLoading(false); // Hide loading spinner
//         Swal.fire({
//           icon: 'error',
//           iconColor: '#FF0000',
//           title: 'Oops! Something went wrong.',
//           text: 'Please try again later.',
//           background: '#191a19',
//           color: '#fff',
//           confirmButtonColor: '#d33',
//         });
//         console.log(error);
//       });

//     event.target.reset();
//   };

//   return (
//     <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//       <div className="pb-8 text-center">
//         <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl">
//           Contact
//         </h2>
//         <p className="py-6 text-lg sm:text-xl">
//           Submit the form below to get in touch with me
//         </p>
//       </div>

//       <div className="flex justify-center items-center flex-grow">
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col w-full sm:w-3/4 lg:w-1/2 space-y-6"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
//             required
//           />

//           <textarea
//             name="message"
//             rows="6"
//             placeholder="Enter your message"
//             className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
//             required
//           ></textarea>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="text-black font-semibold bg-gradient-to-t from-green-400 to-primary-color px-6 py-4 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
//           >
//             {isLoading ? (
//               <svg
//                 className="animate-spin h-5 w-5 mr-3"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 30 30"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                 ></path>
//               </svg>
//             ) : (
//               "Let's talk"
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // export default Contact;
// import React, { useState } from 'react';

// const Contact = () => {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [isLoading, setIsLoading] = useState(false);

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     // Simulate form submission (replace with actual API call)
//     setTimeout(() => {
//       setIsLoading(false);
//       alert('Form submitted successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         message: ''
//       });
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-transparent text-white"> {/* Use bg-transparent here */}
//       <div className="form-container w-full max-w-3xl p-8 rounded-lg shadow-lg"> {/* Added form-container class */}
//       <h2 className="contact-heading">
//   Contact
// </h2>
//         <p className="text-center text-gray-400 mb-8">Submit the form below to get in touch with me</p>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="flex flex-col items-center">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Enter your name"
//               className="w-full p-4 max-w-3xl border border-gray-700 rounded-lg bg-transparent text-white focus:outline-none focus:border-green-400"
//             />
//           </div>

//           <div className="flex flex-col items-center">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email"
//               className="w-full p-4 max-w-3xl border border-gray-700 rounded-lg bg-transparent text-white focus:outline-none focus:border-green-400"
//             />
//           </div>

//           <div className="flex flex-col items-center">
//             <textarea
//               name="message"
//               rows="6"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               placeholder="Enter your message"
//               className="w-full p-4 max-w-3xl border border-gray-700 rounded-lg bg-transparent text-white focus:outline-none focus:border-green-400"
//             />
//           </div>

//           <div className="flex justify-center">
//           <button
//   type="submit"
//   disabled={isLoading}
//   className="w-full max-w-xs text-center px-6 py-2 mt-2 rounded-md hover:scale-110 duration-300"
// >
//   <span className="text-gradient">
//     {isLoading ? 'Submitting...' : "Let's Connect"}
//   </span>
// </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Getform endpoint (replace with your Getform.io URL)
    const formEndpoint = 'https://getform.io/f/aejyxzqb';

    axios.post(formEndpoint, formData)
      .then(() => {
        setIsLoading(false);
        alert('Form submitted successfully! You will receive an email confirmation.');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        setIsLoading(false);
        alert('There was an error submitting the form.');
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent text-white">
      <div className="form-container w-full max-w-3xl p-8 rounded-lg shadow-lg">
        <h2 className="contact-heading">Contact</h2>
        <p className="text-center text-gray-300 mb-8">Submit the form below to get in touch with me</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full p-4 max-w-3xl border border-gray-700 rounded-lg bg-transparent text-white focus:outline-none focus:border-cyan-400 border-opacity-70"
            />
          </div>

          <div className="flex flex-col items-center">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full p-4 max-w-3xl border border-gray-700 rounded-lg bg-transparent text-white focus:outline-none focus:border-cyan-400 border-opacity-70"
            />
          </div>

          <div className="flex flex-col items-center">
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
              className="w-full p-4 max-w-3xl border border-gray-700 rounded-lg bg-transparent text-white focus:outline-none focus:border-cyan-400 border-opacity-70"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full max-w-xs text-center px-6 py-2 mt-2 rounded-md hover:scale-110 duration-300"
            >
              <span className="text-gradient">
                {isLoading ? 'Submitting...' : "Let's Connect"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
