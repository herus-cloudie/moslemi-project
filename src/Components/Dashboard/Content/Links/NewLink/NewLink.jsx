import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addLink } from '../../../../../features/dashboard/action';

function NewLink() {
    const loading = useSelector(state => state.dashboard.linksLoading);
    const titleRef = useRef();
    const dispatch = useDispatch();

    const formKeyNotSubmit = (e) => {
      if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
      {
          e.preventDefault();
          e.stopPropagation();
          addLinkHandle();
      }
    }
    
    const addLinkHandle =  () => {
      let title = titleRef.current.value;
      switch(true)
      {
        case title === '' : toast.warn('عنوان را وارد کنید')
        break;
        case title.length < 3 : toast.warn('عنوان را کوتاه است')
        break;
        default : dispatch(addLink({title}))
      }
    }

    return (
      <div className='flex flex-col 2xl:w-[70%] w-full opacity-motion'>
          <div className='w-full bg-[#C0D9DB] p-2'>
              <h1 className='font-semibold text-lg text-stone-800'>ایجاد</h1>
          </div>
          <form  className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSubmit(e)}>
          {/* title */}
          <div className='flex flex-col gap-2 w-full'>
              <label htmlFor="tag" className='font-semibold text-[#2e424a]'>عنوان</label>
              <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='tag'/>
          </div>
          <button type='button' className='w-[50%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-lg py-1 rounded-sm' onClick={()=>addLinkHandle()}>
            {
              loading
              ?
              <img src="/img/Rolling-0.8s-200px.svg" alt="loading..." className='w-[30px] mx-auto'/>
              :
              <span>ثبت</span>
            }
          </button>
          </form>
      </div>
    )
}

export default NewLink;