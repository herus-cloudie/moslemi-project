import Cookies from 'js-cookie';
import React, { useEffect, useRef, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteBlog, deleteNews, editBlog, editNews } from '../../../../../features/dashboard/action';
import Editor from '../../../../Editor/Editor';

function EditNews({ isEdit , setIsEdit }) {
    const [imageName,setImageName] = useState('');
    const titleRef = useRef();
    const situationRef = useRef();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.dashboard.editNewsLoading);
    const deleteLoading = useSelector(state => state.dashboard.newsDeleteLoading);
    const deleteSuccess = useSelector(state => state.dashboard.deleteNewsSuccess);
    const [desc,setDesc] = useState(isEdit.body);
    const imageRef = useRef();

    const formKeyNotSubmit = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
        }
    }

    useEffect(()=> {
        if(deleteSuccess){
            setIsEdit('')
        }
    },[deleteSuccess])
    
    const formSubmitter = (e) => {
        e.preventDefault()
        const formData = {
            title:titleRef.current.value,
            image:imageName,
            body:desc,
            is_active:JSON.parse(situationRef.current.value),
            user_id:JSON.parse(Cookies.get('user')).id
        }
        switch(true)
        {
            case formData.title === '' : toast.warn("عنوان را وارد کنید");
            break;
            case formData.title.length < 3 : toast.warn("عنوان کوتاه است");
            break;
            case formData.body === '' : toast.warn("توضیحات را وارد کنید");
            break;
            case formData.body.length < 20 : toast.warn("توضیحات کوتاه است");
            break;
            default : editNewsFnc(formData)
        }
    }

    const editNewsFnc = (form) => {
        let formdata = new FormData();
            formdata.append("title", form.title);
            formdata.append("body", form.body);
            formdata.append("user_id", form.user_id);
            formdata.append("is_active", form.is_active);
            if(form.image !== '') {
                formdata.append("image", form.image , `${imageRef.current.value}`);
            }
        dispatch(editNews({id:isEdit.id,formdata}))
    }


    const articleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteNews(isEdit.id))
    }

  return (
    
    <div className='flex flex-col w-[93%] sm:w-full opacity-motion 2xl:w-[70%]'>
        <div className='w-full bg-[#C0D9DB] p-2 flex items-center justify-between'>
            <h1 className='font-semibold text-lg text-stone-800'>ویرایش مقاله</h1>
            <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>setIsEdit('')}/>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSubmit(e)}>
           {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" defaultValue={isEdit.title} className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
              {/* image */}
              <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="image" className='font-semibold text-[#2e424a]'>تصویر</label>
                <input onChange={(e)=>{
                    setImageName(e.target.files[0])
                }} type="file" ref={imageRef} className='p-1 outline-[#0ab694] w-full text-left' name='image'/>
            </div>
            {/* describe */}
            <Editor setDesc={setDesc} desc={ desc }/>
            {/* situation */}
            <div className='w-full flex justify-start'>
            <div className="w-fit flex flex-col gap-2">
                    <label htmlFor="published" className='font-semibold text-[#2e424a]'>وضعیت مقاله</label>
                    <select  name="published" id="" className="outline-none" ref={situationRef}>
                        {
                            isEdit.is_active === 1
                            ?
                            <>
                                <option value={1}>روشن</option>
                                <option value={0}>خاموش</option>
                            </>
                            :
                            <>
                                <option value={0}>خاموش</option>
                                <option value={1}>روشن</option>
                            </>
                        }
                    </select>
                </div>
            </div>
            <div className='flex flex-col w-full items-center mt-3 gap-2'>
                <button type='button' onClick={(e)=>formSubmitter(e)}  className='w-[50%] 2xl:w-[30%] bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-lg py-1 rounded-sm'>
                    {
                        loading
                        ?<img src={"/img/Rolling-0.8s-200px.svg"} alt="loading" className='w-[1.5rem] mx-auto'/>
                        :<span>ویرایش</span>
                    }
                </button>
                <button type='button' onClick={(e)=>articleDelete(e)}  className='w-[50%] 2xl:w-[30%] bg-[#d91e0a] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#fb250d] text-white font-bold text-lg py-1 rounded-sm'>
                    {
                        deleteLoading
                        ?<img src={"/img/Rolling-0.8s-200px.svg"} alt="loading" className='w-[1.5rem] mx-auto'/>
                        :<span>حذف</span>
                    }
                </button>
            </div>
        </form>
    </div>
  )
}

export default EditNews;