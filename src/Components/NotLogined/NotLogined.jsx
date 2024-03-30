import React from 'react';
import loginImg from "../../assets/img/mustLogin.jpg";
import { Link } from 'react-router-dom';

function NotLogined() {
  return (
    <div className='w-full'>
        <div className='w-full flex justify-center items-center flex-col py-10 gap-y-5'>
            <h1 className='text-[1.1rem] text-center font-[shabnambold] text-stone-600'>برای دسترسی به این بخش باید در سایت لاگین کرده باشید</h1>
            <img src={loginImg} alt="login" className='w-[10rem] md:w-[20rem]'/>
            <Link to={'/login'}>
               <button className='py-1 font-[shabnambold] text-[#37c085] transition-all duration-500 hover:bg-[#37c085] hover:text-white rounded-sm border-[3px] w-[15rem] sm:w-[30rem] border-[#37c085] '>رفتن به بخش لاگین</button>
            </Link>
        </div>
    </div>
  )
}

export default NotLogined;