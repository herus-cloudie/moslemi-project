import React from 'react';
// import Icons
import { AiOutlineBarChart } from 'react-icons/ai';
import { BsPinterest, BsTags, BsTelegram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { TfiMenuAlt } from 'react-icons/tfi';
// import Components
import moment from 'moment-jalaali';
import HTMLRenderer from 'react-html-renderer';
import { Link } from 'react-router-dom';

function RightSide({ goalNews }) {
    
  return (
    <div className='flex flex-col items-center w-full md:items-start lg:w-[80%]'>
        <ul className='flex flex-row border-y-2 font-[shabnamMedium] text-xs justify-center md:justify-start border-for-border gap-2 sm:gap-20 py-3'>
            <li><Link to='/' className='hover:text-sky-blue font-[shabnamLight]'>صفحه اصلی</Link></li>
            <li><Link to='/news' className='hover:text-sky-blue font-[shabnamLight]'>اخبار سایت</Link></li>
            <li className='text-gray-88 font-[shabnamLight]'>{goalNews?.title}</li>
        </ul>
        {/* article-content */}
        <div className='flex flex-col mt-10 2xl:gap-20 w-[90%] md:w-full items-start overflow-x-hidden'>
        <h1 className='text-[1.1rem] mr-2 font-extrabold text-gray-77 font-[shabnamMedium] tracking-wide'>{goalNews?.title}</h1>
        {/* article-information */}
        <div className='flex flex-col mr-2 md:flex-row mt-3 gap-5 md:gap-10 text-gray-88'>
            <div className='flex flex-row items-center gap-2'>
            <TfiMenuAlt/>
            <div className='flex flex-row text-[0.9rem] gap-1'>
                <span className='text-gray-500 font-[shabnam]'>دسته بندی:</span>
                <span className='hover:text-sky-blue cursor-pointer font-[shabnam]'>اخبار سایت </span>
            </div>
            </div>
            <div className='flex flex-row items-center gap-1 text-[0.9rem]'>
            <MdDateRange/>
            <span className='flex gap-1 font-[shabnamBold]'>{moment(goalNews?.created_at).format("jYYYY/jMM/jDD")}</span>
            </div>
            <div className='flex flex-row text-[0.9rem] items-center gap-1'>
            <AiOutlineBarChart/>
            <span className='font-[shabnamBold]'>0</span>
            </div>
        </div>
        {/* article-poster and article-text */}
        <div className='mt-7 flex flex-col items-center md:inline-block'>
            <img src={goalNews?.image} alt={goalNews?.title} className='w-[300px] bg-gray-77 float-right ml-0 mb-4 md:ml-4'/>
            <p className='text-gray-66 font-[shabnamMedium] text-justify font-thin text-sm leading-7 px-3'>
            <HTMLRenderer html={goalNews?.body}/>
            </p>
        </div>
        {/* socalMedia */}
        <div className='flex flex-col pl-2 items-center 2xl:items-start  mt-10  gap-5 w-full'>
            <div className='flex flex-col sm:flex-row text-white w-[80%] md:w-full 2xl:w-[70%]'>
            <Link to='https://twitter.com' className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-5 px-5 gap-2 '>
                <BsTwitter className='scale-125'/>
                <span className='text-xs text-center font-[shabnam]'>اشتراک در توییتر</span> 
            </Link>
            <Link className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-dark-blue py-5 px-5 gap-2'  to="https://www.facebook.com">
                <FaFacebookF className='scale-125'/>
            <span className='text-xs text-center font-[shabnam]'> اشتراک در فیسبوک</span>
            </Link>
            <Link to="https://telegram.me" className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-5 px-5 gap-2 '>
                <BsTelegram className='scale-125'/>
            <span className='text-xs text-center font-[shabnam]'> اشتراک در تلگرام</span>
            </Link>
            <Link to="https://pinterest.com/" className='flex flex-col justify-center 2xl:py-5 items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-soft-red py-5 px-5 gap-2 '>
                <BsPinterest className='scale-125'/>
                <span  className='text-xs text-center font-[shabnam]'>اشتراک در پینترست</span>
            </Link>
            </div>
        </div>
        {/* junction-path */}
        <div className='flex flex-col sm:flex-row w-full 2xl:w-[80%] 2xl:justify-between 2xl:py-5 sm:w-auto  items-center 2xl:p-12 gap-4 sm:gap-32 py-5 px-4 my-10 text-white bg-light-blue'>
        <span className='text-[0.9rem] flex text-center font-[shabnam]'>راه آسان تری برای ارتباط با کاربرانمان پیدا کرده ایم :)</span>
        <button className='border-2  text-[0.9rem] border-white py-1 px-3  btn-telegram transition-all'><Link className='font-[shabnamBold]' to='https://telegram.me/nahal_it'>عضویت در کانال </Link></button>
        </div>
        {/* comments */}
        {/* <Comments/> */}
        </div>
    </div>
  )
}

export default RightSide;