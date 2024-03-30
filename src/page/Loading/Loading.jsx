import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className='w-full fixed justify-center items-center z-[150] min-h-screen bg-white opacity-70 flex top-0 left-0'>
        <div className='Loading-box flex flex-row justify-center w-1/4  h-10 items-center gap-5'>
            <div className='h-full bg-green-teal'></div>
            <div className='h-full bg-green-teal'></div>
            <div className='h-full bg-green-teal'></div>
            <div className='h-full bg-green-teal'></div>
            <div className='h-full bg-green-teal'></div>
        </div>
    </div>
  )
}

export default Loading;