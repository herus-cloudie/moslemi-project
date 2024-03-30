import React from 'react';

function NotOrder({ title }) {
  return (
    <div className='w-full flex flex-col items-center py-10 gap-5'>
        <img src="/img/scroll.png" alt="scroll" className='w-[100px] h-[100px]'/>
        <span className='font-[shabnam] text-center'>{title}</span>
    </div>
  )
}

export default NotOrder;