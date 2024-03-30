import React from 'react';

function EmptyFavorite({ title }) {
  return (
    <div className='relative w-full min-h-[20rem] items-center flex'>
        <h1 className='font-[shabnambold] text-stone-500 w-full text-center text-[1.2rem]'>هنوز آیتمی را به {title} اضافه نکرده اید</h1>
        <img src={"/img/enviroment_1341950.png"} alt="plant" className='absolute top-5 sm:top-5 left-10 w-[3rem] md:w-[5rem]'/>
        <img src={"/img/enviroment_1341950.png"} alt="plant" className='absolute bottom-0 right-10 w-[3rem] md:w-[5rem] rotate-90'/>
    </div> 
  )
}

export default EmptyFavorite;