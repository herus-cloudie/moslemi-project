import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addRole } from '../../../../../features/dashboard/action';
import InteractiveButton from './InteractiveButton/InteractiveButton';


function NewRole() {
    const [activePermissions,setActivePermissions] = useState([]);
    const permissions = useSelector(state => state.dashboard.permissions);
    const Loading = useSelector(state => state.dashboard.rolesLoading);
    const titleRef = useRef();
    const dispatch = useDispatch();
    
    const addPermission = (permission) => {

      if(!activePermissions.includes(permission))
      {
        setActivePermissions(pre => [...pre,permission]);
      }
      else
      {
        setActivePermissions(activePermissions.filter(item => item !== permission));
      }
    }
    
    const formKeyNotSubmit = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
        }
    }

    const formSubmitter = () => {
        const formData = {
          title:titleRef.current.value,
          permissions:activePermissions
        }
        switch(true)
        {
          case formData.title.length === 0 : toast.warn('عنوان را وارد کنید');
          break;
          case formData.title.length < 3 : toast.warn('عنوان کوتاه است');
          break;
          default : dispatch(addRole(formData));
        }
    }

  return (
    <div className='w-full h-full flex flex-col justify-start items-center'>
      <div className='flex flex-col w-full 2xl:w-[70%] opacity-motion'>
        <div className='w-full bg-[#C0D9DB] p-2'>
            <h1 className='font-semibold text-lg text-stone-800'>نقش جدید</h1>
        </div>
        <form  className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSubmit(e)}>
            {/* title */}
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
            <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
        </div>
          {/* permissions */}
        <div className='flex flex-col gap-5 w-full'>
          <label htmlFor="permissions" className='font-semibold text-[#2e424a]'>وظایف</label>
          <div className='flex items-center flex-wrap gap-x-10 gap-y-10'>
              {
                  permissions.map(item => (
                      <InteractiveButton item={item} setPermission={addPermission}/>
                  ))
              }
          </div>
          <div>

          </div>
        </div>
        <button onClick={(e)=>formSubmitter()} type='button' className='w-[80%] flex justify-center sm:w-[50%] 2xl:w-[30%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-lg py-1 rounded-sm'>
          {
            Loading
            ?
            <img src="/img/Rolling-0.8s-200px.svg" alt="loading" className='w-[30px]'/>
            :
            <span>ثبت</span>
          }
        </button>
        </form>
      </div>
    </div>
  )
}

export default NewRole;