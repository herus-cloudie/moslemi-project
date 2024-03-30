import React from 'react';
import { TbPlant } from 'react-icons/tb';
import { TiHome } from 'react-icons/ti';
import { BsPersonFill } from 'react-icons/bs';
import { TfiMenu } from 'react-icons/tfi';
import { Link } from 'react-router-dom';


function Buttons({ dropMenu , setDropMenu }) {
  return (
    <div className='flex flex-row-reverse lg:flex-row items-center gap-3 text-2xl'>
        <TbPlant className='text-green-600 text-2xl hidden sm:block lg:text-4xl'/>
        <Link to={'/'}><TiHome className='text-[#dedede] duration-300 transition-all hover:text-[#fff]'/></Link>
        <Link to={'/userPage/userProfile'}><BsPersonFill className='text-[#dedede] duration-300 transition-all hover:text-[#fff]'/></Link>
        <TfiMenu onClick={()=>setDropMenu(true)} className='text-white static lg:hidden'/>
    </div>
  )
}

export default Buttons;