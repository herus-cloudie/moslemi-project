import { React } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import HTMLRenderer from 'react-html-renderer';
import moment from 'moment-jalaali';

function AllNews({ currentItems , newsLength , setIsEdit }) {

  return (
    <div className='w-full flex flex-col gap-5 items-center'>
        <span className='w-full text-white font-bold mx-5 md:m-0'> همه اخبار ( { newsLength } )</span>
        <div className='w-full flex flex-col items-center gap-y-5 2xl:w-[70%]'>
          {
            currentItems.map(news => (
              <div key={news} className='md:w-full gap-5 md:gap-0 w-[90%] sm:w-[60%] cursor-default text-[#1b243e] flex flex-col md:flex-row h-fit hover:bg-[#464e64] duration-300 hover:text-white transition-all shadow-[0px_5px_8px_1px_rgba(0,0,0,0.5)] items-center justify-between md:h-[10rem] py-3 px-3 md:pl-3 md:pr-8   bg-[#f0f6f0] rounded-xl'>
                <img src={`${news.image}`} alt={news.title} className='w-full h-[17rem] md:w-[8rem] md:h-[8rem]'/>
                <div className='flex flex-col gap-1 w-full md:w-[60%]'>
                  <span className='text-xl line-clamp-1  font-[shabnambold]'>{news.title}</span>
                  <p className='line-clamp-3 leading-5 font-[shabnammedium] text-sm opacity-60 text-justify'>
                    <HTMLRenderer html={news.body}/>
                  </p>
                  <span className='text-sm mt-3 font-[shabnambold] opacity-90'>{moment(news.created_at).format('jYYYY/jMM/jDD')}</span>   
                </div>
                <div className='w-full h-fit md:h-full md:w-fit flex flex-row items-center md:flex-col justify-between py-3'>
                  <span className={news.is_active === 1 ? 'rounded-[50%] bg-green-500 p-3' : 'rounded-[50%] bg-red-500 p-3'}></span>
                  <button className='cursor-default hover:scale-110 transition-all  rounded-[50%] text-center bg-[#529b9f] text-white p-1 text-xl' onClick={()=>setIsEdit(news)}>
                    <IoIosArrowBack/>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default AllNews;