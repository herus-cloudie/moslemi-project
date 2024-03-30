import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

function EndBox3({ content }) {
  return (
    <motion.div className='flex flex-col-reverse sm:flex-row w-full items-center end-box bg-green-d5 py-5' whileInView={{y:[200,0],opacity:[0,1]}} transition={{duration:1.5,delay:0.5}} viewport={{once:true}}>
        <div className='flex flex-col items-center gap-5'>
        <span className='px-3 leading-10 font-[shabnam] text-gray-66 text-center'>{content.p}</span>
        <Link to='/order' className='text-white text-center font-[shabnamBold] hover:brightness-105 transition-all bg-green-57C w-[80%] py-2 rounded-md text-sm'>{content.b}</Link>
        </div>
        <img src={"/img/frm-thbt-sfarsh-transformed-min.png"} alt="front" className='w-[20rem]'/>
    </motion.div>
  )
}

export default EndBox3