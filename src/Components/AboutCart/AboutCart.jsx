import React from 'react'

function AboutCart({ img , userName , role }) {
  return (
    <div className='w-[320px] h-[300px] shadow-md rounded-sm overflow-hidden flex flex-col items-center'> 
        <img className='w-full z-10' src={img} alt="member" />
        <div className='w-[400px] z-20 gap-1 py-3 h-[700px] flex flex-col items-center justify-center rounded-[45%] bg-white relative bottom-[15px]'>
            <span className='font-[vasirBold] text-zinc-800'>{userName}</span>
            <span className='font-[vasir] text-zinc-600 text-[0.9rem]'>{role}</span>
        </div>
    </div>
  )
}

export default AboutCart