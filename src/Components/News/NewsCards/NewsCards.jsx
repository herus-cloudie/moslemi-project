import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NewsCards.css';
// import Img from '../../assets/img/6.png';
import {MdPersonPin} from 'react-icons/md';
import { ImEye } from 'react-icons/im';
import HTMLRenderer from 'react-html-renderer';
import { AiFillFolder } from 'react-icons/ai';
import { TfiMenuAlt } from 'react-icons/tfi';

function NewsCards({currentItems}) {
    const navigate = useNavigate();
  return (
    <div className='container mx-auto'>
    <div className='flex sm:flex-wrap flex-col sm:flex-row justify-center gap-3 sm:gap-3 items-center'>
        {
            currentItems?.map(news => (
                <div className='w-[17rem] sm:w-[45%] overflow-hidden rounded-sm justify-between h-[420px] md:w-[30%] lg:w-[23%] 2xl:w-[15%] flex flex-col mb-10' key={news.id} style={{boxShadow:'0px 0px 10px -6px #000'}}>
                    <img onClick={() => navigate(`/news/page/${news.id}`)} src={news.image} alt={news.title} className='hover:brightness-125 max-h-[200px] cursor-pointer transition-all' style={{borderBottom:'1px solid #d7d7d7'}}/>
                    <Link to={`/news/page/${news.id}`} className='py-3 px-2 text-gray-66 font-[shabnamBold] hover:text-gray-88 line-clamp-2 text-base  transition-all'>{news.title}</Link>
                    <div className='text-gray-500 px-2 text-stone-500 font-[shabnamLight] text-xs line-clamp-3 text-justify xl-line-clamp-2  leading-loose'>
                        <HTMLRenderer html={news.body}/>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row text-gray-88 justify-between py-2 px-2  whitespace-normal' style={{borderTop:'1px solid #d7d7d7'}}>
                            <div className='flex flex-row items-center text-sm gap-2'>
                                <AiFillFolder/>
                                <Link to='/#' className='cursor-pointer hover:text-gray-white text-xs'>اخبار سایت</Link>
                            </div>
                            <div className='flex flex-row items-center text-sm gap-2'>
                                <ImEye/>
                                <span>0</span>
                            </div>
                        </div>
                        <button className='flex gap-1 cursor-pointer flex-row w-full text-white  bg-green-bt py-2 px-2 justify-center items-center hover:bg-sky-blue transition-all'>
                            <TfiMenuAlt className=''/>
                            <Link to={`/news/page/${news.id}`} className='text-[0.8rem] font-[shabnamBold]'>مشاهده خبر</Link>
                        </button>
                    </div>
                </div>
            ))
        }
    </div>
</div>
  )
}

export default NewsCards;