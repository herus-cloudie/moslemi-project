import moment from 'moment-jalaali';
import { Circle } from 'rc-progress';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteWorkSample } from '../../../../../features/dashboard/action';

function AllWorkSamples({  currentItems , setShowDetails , users , categories }) {
  const mobile = window.innerWidth < 768 ? true : false;
  const dispatch = useDispatch();
  function deleteWorkSamples(id){
    dispatch(deleteWorkSample(id));
  }
  return (
    <div className='w-full flex 2xl:w-[70%] flex-col gap-5 mb-5'>
            <span className='w-full text-white font-bold'>تعدادنمونه کار ها ( {currentItems !== null ? currentItems.length : 'NaN'} )</span>
            <div className='w-full flex flex-row flex-wrap justify-center md:justify-start md:flex-col items-center gap-10 md:gap-3'>
                {
                    currentItems.map((worksample,index) => (
                        <div key={index} className='w-[15rem] md:w-full flex gap-y-3 md:flex-row flex-col font-[shabnambold] text-sm transition-all hover:scale-[1.02] hover:opacity-90 cursor-default duration-300 items-center bg-[#ffffffc4] p-3 rounded-sm justify-between' style={{borderRight:mobile?'0px':`5px solid #${worksample.colorCode}`,borderTop:mobile?`5px solid #${worksample.colorCode}`:'0px',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
                            <span className='font-[vasir] w-[10%] line-clamp-1 text-[1rem]'>{worksample.title}</span>
                            <div className='flex items-center gap-1'>
                              <span className='font-[vasir]'>{worksample.category}</span>
                            </div>
                            <span className='font-[vasir]'>
                                <img src={worksample.image} />
                            </span>
                            
                            <span className='font-[shabnamBold]'>{moment(worksample.created_at).format("jYYYY/jMM/jDD")}</span>
                            <div>
                            <span className='bg-[#07C7A3] m-1 p-1' onClick={()=>setShowDetails({status:true,value:worksample})}> ویرایش</span>
                            <span className='bg-[#fe2020] m-1 p-1 ' onClick={()=>deleteWorkSamples(worksample.id)}>حذف</span>
                            </div>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default AllWorkSamples;

