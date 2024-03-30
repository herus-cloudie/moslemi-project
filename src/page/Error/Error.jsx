import React from 'react';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  }

  return (
    <div className='w-full Error-container h-screen flex justify-center items-center flex-col'>
        <h1 className='m-0 p-0 text-[#1aaba9] font-bold text-2xl'>صحفه مورد نظر پیدا نشد!</h1>
        <img src={"/img/animation_640_licugqts.gif"} alt="404" className=' w-[40%] sm:w-[30%]'/>
        <button onClick={handleClick} className='text-sm text-[#22939F] 2xl:w-[25rem] 2xl:py-1 w-[100%] px-10 sm:w-[25rem] rounded-sm transition-all hover:bg-[#22939F] hover:text-white duration-500  font-bold py-1' style={{border:'solid 1px #22939F'}}>بازگشت به صفحه قبلی</button>
    </div>
  )
}

export default Error;