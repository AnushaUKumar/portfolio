import React from 'react'
import { Link } from 'react-router-dom'

import easyshop from '/images/projectsImages/easyshop.webp'
import pokedex from '/images/projectsImages/pokedex.webp'
import acciovocabulary from '/images/projectsImages/acciovocabulary.webp'
import rickandmorty from '/images/projectsImages/rickandmorty.webp'
import academloshop from '/images/projectsImages/academloshop.webp'
import weatherapp from '/images/projectsImages/weatherapp.webp'
import dogsblog from '/images/projectsImages/dogsblog.webp'
import crud from '/images/projectsImages/crud.webp'
import moviepedia from '/images/projectsImages/moviepedia.webp'
import tictactoe from '/images/projectsImages/tictactoe.webp'
import soccerquotes from '/images/projectsImages/soccerquotes.webp'
import fortunecookies from '/images/projectsImages/fortunecookies.webp'
import todomachine from '/images/projectsImages/todomachine.webp'

const AllProjects = () => {

    const projects = [
        {
            id: 1,
            src: easyshop,
            code: 'https://github.com/AnushaUKumar/Tableau_dashboard'
        },
        {
            id: 2,
            src: acciovocabulary,
            code: 'https://github.com/AnushaUKumar/Cinematic_Pulse'
        },
        {
            id: 3,
            src: dogsblog,
            code: 'https://github.com/AnushaUKumar/Championship-Forecaster-F1'
        },
        {
            id: 4,
            src: academloshop,
            code: 'https://github.com/AnushaUKumar/Championship-Forecaster-F1'
        },
        {
            id: 5,
            src: weatherapp,
            code: 'https://github.com/AnushaUKumar/Championship-Forecaster-F1'
        },
        {
            
            id: 6,
            src: rickandmorty,
            code: 'https://github.com/AnushaUKumar/Championship-Forecaster-F1'
        },
       
    ]

    

    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }
    

    return (
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Check out my best web applications here.</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map(({ id, src,code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                    <img loading='lazy' src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default AllProjects
