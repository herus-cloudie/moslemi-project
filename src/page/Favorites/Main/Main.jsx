import React, { useState } from 'react';
import FArticles from '../FArticles/FArticles';
import FProducts from '../FProducts/FProducts';
import { useLocation } from 'react-router-dom';


function Main() {
    const [show,setShow] = useState('favArticles');
    const location = useLocation();
    const urlPath = location.pathname;

  return (
    <div className='container mx-auto'>
        <div className='w-full flex justify-center items-start my-10'>
            <table className={urlPath === '/userPage/favorites' ? 'w-[100%] flex overflow-hidden flex-col' : 'w-[90%] sm:w-[70%] md:w-[90%] lg:w-[75%] 2xl:w-[50%] flex overflow-hidden flex-col'}>
                <thead className='flex w-full gap-[0.1rem]'>
                    <tr className='w-1/2 flex'>
                        <td className='w-full'>
                        <div className='frame'><button className="custom-btn btn-5" style={{backgroundColor:show ===  'favArticles' ? '#d0ffce' : ''}} onClick={()=>setShow('favArticles')}><span>مقالات</span></button></div>
                        </td>
                    </tr>
                    <tr className='w-1/2 flex'>
                        <td className='w-full'>
                        <div className='frame'><button className="custom-btn btn-5" style={{backgroundColor:show ===  'favProducts' ? '#d0ffce' : ''}} onClick={()=>setShow('favProducts')}><span>محصولات</span></button></div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        show === 'favArticles'
                        ? <FArticles/>
                        : <FProducts/>
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Main;