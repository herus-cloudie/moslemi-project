import React from 'react';
// import Icons
import { FaLink } from 'react-icons/fa';
import { HiOutlineDocument } from 'react-icons/hi';
// import modules
import { keyWord } from '../../../API/data';
// import Components
import { toast } from 'react-toastify';

function LeftSide() {
  return (
    <div className='flex gap-10 w-[90%] my-5 flex-col mt-10 lg:w-[20%]'>
        <div className='flex gap-2 flex-col 2xl:gap-12'>
        <div className='flex flex-row items-center gap-2 2xl:gap-12 text-sm text-gray-66'>
            <FaLink className='linkImg'/>
            <span className='text-[0.9rem] font-[shabnamBold]'>لینک مطلب:</span>
        </div>
        <div className='flex flex-row gap-2'>
            <div className='bg-gray-88 cursor-pointer 2xl:w-fit 2xl:h-fit hover:bg-gray-white transition-all w-9 justify-center items-center flex p-2 rounded-full' onClick={(e)=>{
                navigator.clipboard.writeText(window.location.href);
                toast.success('لینک کپی شد' , {
                    position: "top-center",
                })
            }}>
            <HiOutlineDocument className='text-white documentImg'/>
            </div>
            <input className='border-2 text-gray-66 rounded border-for-border p-1 outline-none text-xs' type="url" name="" id="" value={window.location.href}/>
        </div>
        </div>
        <div className='flex flex-col items-end text-sm'>
        <span className='py-2 px-4 rounded-t-md font-[shabnamBold]' style={{border:'1px solid #D2D2D2'}}>کلمات کلیدی بلاگ</span>
        <div className='py-2 px-6' style={{border:'1px solid #E9E9E9'}}>
            {
            keyWord.map(item => (
                <span className='text-[0.8rem] text-gray-66 px-1 font-[shabnam] cursor-pointer hover:text-sky-blue'>{item}</span>
            ))
            }
        </div>
        </div>
    </div>
  )
}

export default LeftSide;