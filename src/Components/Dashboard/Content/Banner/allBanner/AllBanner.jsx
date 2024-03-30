import { React, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';
import { deleteBanner } from '../../../../../features/dashboard/action';
import moment from 'moment-jalaali';
import EditBanner from '../EditBanner/EditBanner';

function AllBanner({ currentItems , bannersLength }) {
  const dispatch = useDispatch();
  const [edit , setEdit] = useState({});
 

function deleteBanners(id){
  dispatch(deleteBanner(id))
}

  return (
    <>
    {
      Object.keys(edit).length === 0 ? <div className='w-full flex flex-col gap-5 items-center'>
      <span className='w-full text-white font-bold mx-5 md:m-0'> همه بنر ها ( {currentItems.length} )</span>
      <div className='w-full flex flex-col items-center gap-y-5 2xl:w-[70%]'>
        {
          currentItems.map((banner,index) => (
            
            <div key={index} className='md:w-full gap-5 md:gap-0 w-[90%] sm:w-[60%] cursor-default text-[#1b243e]  h-fit hover:bg-[#464e64] duration-300 hover:text-white transition-all shadow-[0px_5px_8px_1px_rgba(0,0,0,0.5)] items-center justify-between py-3 px-3 md:pl-3 md:pr-8 bg-[#f0f6f0] rounded-xl'  >
              <div className='flex flex-col md:flex-row items-center justify-between'>
              <div className='flex flex-col md:flex-row items-center justify-between w-[70%]'>
              <img src={`${banner?.image}`} alt={banner?.title} className='w-full h-[17rem] md:w-[8rem] md:h-[8rem]'/>
              <div className='flex flex-col gap-1 w-full md:w-[40%]'>
                <span className='text-xl line-clamp-1  font-[shabnambold]'>{banner?.title}</span>  
                
              </div>
            
              </div>
              <div>
              <div className="btn bg-slate-500 p-1 cursor-default rounded-xl text-white hover:bg-white  hover:text-[#000]" onClick={() => setEdit(banner)} > ویرایش </div>
              <div className="btn bg-rose-500 p-1 cursor-default rounded-xl text-white hover:bg-rose-400  hover:text-[#000] my-2" onClick={()=>deleteBanners(banner?.id)} > حذف </div>
              </div>
            </div>
            <div className='justify-between flex'>
            <span className='text-sm mt-3 font-[shabnambold] opacity-90'> ایجاد: {moment(banner?.created_at).format('jYYYY/jMM/jDD')} </span>
            <span className='text-sm mt-3 font-[shabnambold] opacity-90'>ویرایش : {moment(banner?.update_at).format('jYYYY/jMM/jDD')}</span>
            
              </div>
            </div>
          ))
        }
      </div>
  </div>
  : 
  <EditBanner edit={edit} setEdit={setEdit}/>
    }
    </>
  )
}

export default AllBanner;