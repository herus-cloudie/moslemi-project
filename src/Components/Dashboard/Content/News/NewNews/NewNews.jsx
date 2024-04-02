import Cookies from 'js-cookie';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addBlog, addNews } from '../../../../../features/dashboard/action';
import Editor from '../../../../Editor/Editor';

function NewNews() {

    const [imageName,setImageName] = useState('');
    const [desc,setDesc] = useState('');
    const titleRef = useRef();
    const situationRef = useRef();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.dashboard.newsLoading);
    const imageRef = useRef();
    const formKeyNotSubmit = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
        }
    }

    const formSubmitter = (e) => {
        e.preventDefault()
        const formData = {
            title: titleRef.current.value,
            body: desc,
            is_active: JSON.parse(situationRef.current.value),
            user_id: JSON.parse(Cookies.get('user')).id,
            image:imageName
        }
        switch(true)
        {
            case formData.title === '' : toast.warn("عنوان را وارد کنید");
            break;
            case formData.title.length < 3 : toast.warn("عنوان کوتاه است");
            break;
            case formData.image === '' : toast.warn("تصویر را وارد کنید");
            break;
            case formData.body === '' : toast.warn("توصیحات را وارد کنید");
            break;
            default : sendArticle(formData)
        }
    }

    const sendArticle = (form) => {
        let formdata = new FormData();
            formdata.append("title", form.title);
            formdata.append("body", form.body);
            formdata.append("user_id", form.user_id );
            formdata.append("is_active", form.is_active);
            formdata.append("image", form.image , `${imageRef.current.value}`);
            dispatch(addNews(formdata))
    }

    return (
    
    <div className='flex flex-col w-[93%] sm:w-full opacity-motion 2xl:w-[70%]'>
        <div className='w-full bg-[#C0D9DB] p-2'>
            <h1 className='font-semibold text-lg text-stone-800'>اخبار جدید</h1>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSubmit(e)}>
           {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
               {/* image */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="image" className='font-semibold text-[#2e424a]'>تصویر</label>
                <input onChange={(e)=>{
                    setImageName(e.target.files[0])
                }} type="file" ref={imageRef} className='p-1 outline-[#0ab694] w-full text-left' required={true} name='image'/>
            </div>
            {/* describe */}
            <Editor setDesc={setDesc}/>
            {/* situation */}
            <div className='w-full flex justify-start'>
            <div className="w-fit flex flex-col gap-2">
                    <label htmlFor="published" className='font-semibold text-[#2e424a]'>وضعیت خبر</label>
                    <select  name="published" id="" className="outline-none" ref={situationRef}>
                        <option value={1}>روشن</option>
                        <option value={0}>خاموش</option>
                    </select>
                </div>
            </div>
            <button type='button' onClick={(e)=>formSubmitter(e)}  className='w-[80%] md:w-[50%] 2xl:w-[30%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-xl py-1 rounded-sm'>
                {
                    loading
                    ?<img src={"/img/Rolling-0.8s-200px.svg"} alt="loading" className='w-[1.5rem] mx-auto'/>
                    :<span>ثبت</span>
                }
            </button>
        </form>
    </div>
  )
}

export default NewNews;