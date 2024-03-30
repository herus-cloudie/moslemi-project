import React from 'react';
import { HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function HomeButton() {
  return (
    <Link to={'/'} className='absolute top-2 right-2 md:top-5 md:right-5 2xl:right-10 2xl:top-10 text-lg text-white bg-slate-800 rounded-full p-2 transition-all duration-500 hover:bg-slate-700 shadow-xl' style={{border:"white 1px solid"}}>
        <HiHome/>
    </Link>
  )
}

export default HomeButton;