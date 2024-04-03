import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addProject, addWorkSample, getUsers, getWorkSampleCategories } from '../../../../../features/dashboard/action';

import { Link } from 'react-router-dom';
import Editor from '../../../../Editor/Editor';
import CategoriesBox from '../../../../CategoriesBox/CategoriesBox';
import NewWorkSampleCategory from './NewWorkSampleCategory';
import NewGallery from '../../Products/NewGallery/NewGallery';
import NewWorkSampleGallery from './NewWorkSampleGallery';
import DeleteWorkSampleCategory from '../Edit/DeleteWorkSampleCategory';


function NewWorkSample() {

    const [dropCate,setDropCate] = useState({status:false,value:null,id:""})
    const [addCategory , setAddCategory] = useState(false);
    const [deleteCategory , setDeleteCategory] = useState(false);
    const users = useSelector(state => state.dashboard.users)
    const loading = useSelector(state => state.dashboard.workSamplesLoading);
    const workSampleCategories = useSelector(state => state.dashboard.workSampleCategories)
    const [desc,setDesc] = useState('');
    const [priceValue,setPriceValue] = useState(0);
    const mobile = window.innerWidth < 425 ? true : false;
    const dispatch = useDispatch();
    const titleRef = useRef();
    const workSampleCategoryRef = useRef();
   

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getWorkSampleCategories())
   
    },[])
    useEffect(() => {
        dispatch(getUsers())
        dispatch(getWorkSampleCategories())
    },[addCategory])
    const formKeyNotSubmit = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
        }
    }
    const formSubmitter = (e) => {
        e.preventDefault()
        const dataObj = {
            title:titleRef.current.value,
            work_sample_category_id:workSampleCategoryRef.current.value,
            description:desc,
        }
    //    console.log("data obg : ",dataObj);
        switch(true)
        {
            case dataObj.title.length === 0 : toast.warn("عنوان را وارد کنید");
            break;
            case dataObj.title.length < 3 : toast.warn("عنوان کوتاه است");
            break;
            case dataObj.description.length === 0 : toast.warn("توضیح را وارد کنید");
            break;
            case dataObj.work_sample_category_id === null : toast.warn("دسته بندی را انتخاب کنید");
            break;
            default : sendWorkSample(dataObj)
        }
    }

    const sendWorkSample = (dataObj) => {
        dispatch(addWorkSample(dataObj))
    }

  return (
    <>
   { 
   !addCategory && !deleteCategory?
    <div className='flex flex-col w-full 2xl:w-[70%] opacity-motion'>
        <div className='w-full bg-[#C0D9DB] p-2'>
            <h1 className='font-semibold text-lg text-stone-800'>افزودن</h1>
        </div>
        <form className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSubmit(e)}>
            {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
            </div>
           {/* describe */}
            <Editor setDesc={setDesc}/>
            {/* category */}
             <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="supervisor" className='font-semibold text-[#2e424a]'>دسته بندی نمونه کار</label>
                <select id="workSampleCategory" ref={workSampleCategoryRef} className='py-1'>
                    <option value="null">{"..."}</option>
                    {
                        // workSampleCategories.map(work => ( console.log(work)
                        //     // <option value={work.id}>{work.title}</option>
                        // ))
                    }
                </select>
                <button onClick={()=>{setAddCategory(true)}} className='w-[100%] bg-[#07C7A3] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#0eecc3] text-white py-1 rounded-sm w-[20%] '>
                    اضافه کردن دسته بندی
             </button>
             <button onClick={()=>{setDeleteCategory(true)}} className='w-[100%] bg-[#f92b35] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#f92b00] text-white  py-1 rounded-sm w-[20%] '>
                حذف دسته بندی
             </button>
            </div> 
           <div className='flex w-full flex-col items-center mt-5 gap-3'>
             <div className='flex items-center w-[80%] sm:w-[50%] 2xl:w-[30%] justify-between'>
             <button type='button' onClick={(e) => formSubmitter(e)} className='w-[100%] bg-[#07C7A3] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#0eecc3] text-white font-bold text-xl py-1 rounded-sm'>
                {
                    loading
                    ?<img src="/img/Rolling-0.8s-200px.svg" alt="loading..." className='w-[30px] mx-auto'/>
                    :"ثبت"
                }
             </button>
             </div>
           </div>
        </form>
    </div>
    :addCategory ?
    <NewWorkSampleCategory setAddCategory={setAddCategory} addCategory={addCategory}/>
    : <DeleteWorkSampleCategory setDeleteCategory={setDeleteCategory} workSampleCategories={workSampleCategories}/>
    }
    </>
  )
}

export default NewWorkSample;