import React, { useEffect, useRef, useState } from 'react';
import { TbHandFinger } from 'react-icons/tb';


function ScrollTop() {

    let [ScrollY,setScrollY] = useState(0);

      window.addEventListener("scroll",(e)=>{
        setScrollY(window.scrollY)
      })

    const scrollToTop = () => {
      window.scrollTo(0,0)
    }
  return (
    <>{
      ScrollY > 1000 
      ? <button className={'text-white bottom-10 z-[100] fixed rounded-md left-5 bg-green-600 hover:bg-green-500 transition-all duration-300 cursor-pointer text-[1.8rem] sm:text-[2rem] flex w-fit h-fit'} style={{border:'1px solid #fff'}} onClick={scrollToTop}><TbHandFinger className='m-1'/></button>
      : null
    }</>
  )
}

export default ScrollTop;

