import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function EndBox1({ content }) {
  return (
    <motion.div initial={{translateY:200,opacity:0}} viewport={{once:true}} transition={{duration:1}} whileInView={{translateY:0,opacity:1}} className='bg-blue-db py-10 px-3 flex w-full flex-col sm:flex-row items-center justify-around'>
    <img src={"/img/frm-thbt-sfarsh-transformed-min.png"} alt="store" className='w-[50%] sm:w-[20%]'/>
    <div className='w-[80%] flex flex-col items-center gap-5 2xl:gap-[3rem]'>
      <p className='store-text'>{content.p}</p>
    <Link to={content?.link}>
     <button className='text-white bg-green-57C  w-72 text-base font-[shabnamBold] 2xl:py-3 2xl:w-[50rem] sm:w-[30rem] py-1 rounded-md hover:brightness-105 transition-all'>{content.b}</button>
    </Link>
    </div>
  </motion.div>
  )
}

export default EndBox1;