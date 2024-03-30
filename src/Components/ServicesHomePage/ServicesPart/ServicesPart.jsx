import React from 'react';
import { Link } from 'react-router-dom';

function ServicesPart({title , text , Icon , link}) {
  return (
    <div className="flex flex-col gap-y-1 items-center justify-between w-[90%] h-[17rem] sm:h-[18rem] min-h-fit sm:w-[40%] lg:w-[28%] 2xl:w-[30%]">
        <Link className="flex items-center justify-center">
          <Icon className="text-[#818a91] text-5xl" />
        </Link>
        <Link to={link} className="flex text-center items-center justify-center font-[shabnamBold] font-black tracking-tighter text-xl">{title}</Link>
        <p className="text-justify text-last font-[shabnam] leading-6 text-[0.9rem]">{text}</p>
        <Link
          to={link}
          style={{boxShadow:'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em'}}
          className="bg-[#1ac648] 2xl:py-1 hover:bg-[#23d051] text-[0.8rem] font-[shabnamBold] tracking-normal  transition-all duration-200 text-white px-3 py-3 sm:px-2 sm:py-3 text-center rounded-lg"
        >
          ادامه مطلب و مشاهده کامل جزییات
        </Link>
    </div>
  )
}

export default ServicesPart;