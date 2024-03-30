import React, { useRef, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addGallery } from '../../../../../features/dashboard/action';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';

function NewGallery({ newImg , setNewImg }) {
  const [imageName,setImageName] = useState('');
  const loading = useSelector(state => state.dashboard.galleryLoading);  
  const titleRef = useRef();
  const imageRef = useRef();
  const dispatch = useDispatch();

  const formKeyNotSubmit = (e) => {
    if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
    {
        e.preventDefault();
        e.stopPropagation()
    }
  }
  
  const addGalleryHandle = e  => {
    e.preventDefault();
    let form = {
        title:titleRef.current.value,
        image:imageName,
    }
    switch(true)
    {
      case form.title === '' : toast.warn('عنوان را وارد کنید')
      break;
      case form.title.length <= 3 : toast.warn('عنوان کوتاه است')
      break; 
      case form.image === '' : toast.warn('تصویر را انتخاب کنید')
      break;
      default : addGalleryFnc(form)
    }
  }

  const addGalleryFnc = form => {
    let formdata = new FormData();
    formdata.append("title",form.title);
    formdata.append("image", imageRef.current.files[0] , form.imageName);
    dispatch(addGallery({id:newImg.id,formdata}))
  }

  return (
    <div className='flex flex-col 2xl:w-[70%] w-full opacity-motion'>
        <div className='w-full bg-[#C0D9DB] p-2 flex items-center justify-between'>
            <h1 className='font-semibold text-lg text-stone-800'>افزودن تصویر</h1>
            <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>setNewImg({status:false,id:""})}/>
        </div>
        <form onSubmit={ e => addGalleryHandle(e)} className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSubmit(e)}>
        {/* title */}
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
            <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
        </div>
        {/* image */}
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="poster" className='font-semibold text-[#2e424a]'>تصویر</label>
            <input  onChange={(e)=>setImageName(e.target.value)} ref={imageRef} type="file" className='p-1 outline-[#0ab694] w-full text-left' required={true} name='poster'/>
        </div>
        <button type='submit' className='w-[50%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-lg py-1 rounded-sm'>
            {
                loading
                ?
                 <img src={"/img/Rolling-0.8s-200px.svg"} alt="loading" className='w-[1.5rem] mx-auto'/>
                :
                <span>افزودن</span>
            }
        </button>
        </form>
    </div>
  )
}

export default NewGallery;