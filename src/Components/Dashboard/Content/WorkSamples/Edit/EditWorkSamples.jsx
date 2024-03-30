import moment from 'moment-jalaali';
import React, { useEffect, useRef, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteworkSampleGalleries, editProject, editWorkSample, getworkSampleGalleriesDetail } from '../../../../../features/dashboard/action';
import { setScrollUp } from '../../../../../features/dashboard/dashboardSlice';
import CategoriesBox from '../../../../CategoriesBox/CategoriesBox';
import Editor from '../../../../Editor/Editor';
import NewWorkSampleGallery from '../New/NewWorkSampleGallery';

function EditWorkSamples({ details , setShowDetails , categories}) {
    // console.log(details);
    const [dropCate,setDropCate] = useState({status:false,value:categories.find(cate => cate.id === details.category_id)?.title,id:categories.find(cate => cate.id === details.category_id)?.id})
    const [desc,setDesc] = useState(details?.description);
    const loading = useSelector(state => state.dashboard.workSamplesLoading);
    const workSampleGalleriesDetail = useSelector(state => state.dashboard.workSampleGalleriesDetail);
    const dispatch = useDispatch();
    const titleRef = useRef();
    const categoryRef  = useRef();
    const [addGalleries , setAddGalleries] = useState(false)
    useEffect(()=>{
        dispatch(getworkSampleGalleriesDetail(details.id))
        
    },[])
    const formKeyNotSubmit = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
        }
    }
    function galleriesDeleteHandle(e, id){
            e.stopPropagation();
            dispatch(deleteworkSampleGalleries(id))
    }
    const formSubmitter = (e) => {
        e.preventDefault()
        const dataObj = {
            title:titleRef.current.value,
            description:desc,
            work_sample_category_id:categoryRef.current.value,
            id:details.id
        }
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
            default : sendWorkSamples(dataObj)
        }
    }

    const sendWorkSamples = (dataObj) => {
        dispatch(editWorkSample(dataObj))
    }

  return (
    <>
    {
        addGalleries ? 
        <NewWorkSampleGallery setAddGalleries={setAddGalleries} details={details} /> 
        :
<div className='flex flex-col w-full 2xl:w-[70%] opacity-motion'>
        <div className='w-full bg-[#C0D9DB] p-2 flex justify-between items-center'>
            <h1 className='font-semibold text-lg text-stone-800'>جزئیات</h1>
            <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>{
                setShowDetails({status:false,value:''});
                dispatch(setScrollUp())
            }}/>
        </div>
        <form onSubmit={formSubmitter} className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSubmit(e)}>
            {/* title */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
                <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title' defaultValue={details.title}/>
            </div>
            {/* category */}
            <div className='flex flex-col gap-2 w-full'>
                <label htmlFor="category" className='font-semibold text-[#2e424a]'>دسته بندی</label>
                <select id="category" ref={categoryRef} className='py-1'>
                    <option value={categories.find(category => category.id === details.work_sample_category_id)?.id} >{`${categories.find(category => category.id === details.work_sample_category_id).title}`}</option>
                    {
                        categories?.map(category => (
                            <option value={category.id}>{`${category.title}`}</option>
                        ))
                    }
                </select>
            </div>
           {/* describe */}
            <Editor setDesc={setDesc} desc={desc}/>

            {/* pictures */}
            <label  className='font-semibold text-[#2e424a]' > تصاویر </label>
            <div className='flex gap-4 flex-wrap relative items-center justify-center'>
            
                    {workSampleGalleriesDetail.map(item =>{
                        return( 
                            <div  key={item.id} className="w-[50%] gap-4 relative">
                            <span  className='text-red-600 absolute top-0 cursor-pointer hover:text-red-500 transition-all left-1' onClick={(e)=>galleriesDeleteHandle(e,item.id)}>&#x2716;</span>
                                <img  src={item.image} />
                            </div>
                        )
                    })}
                    </div>
            <button onClick={()=>{setAddGalleries(true)}} className='w-[100%] bg-[#07C7A3] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#0eecc3] text-white font-bold text-xl py-1 rounded-sm w-[30%] '>
                    اضافه کردن عکس
            </button>
            {/* created */}
            <div className='w-full flex items-center gap-3'>
             <label htmlFor="create" className='font-semibold text-[#2e424a]'>تاریخ ایجاد:</label>
             <span className='font-[shabnamBold]'>{moment(details?.created_at).format("jYYYY/jMM/jDD")}</span>
            </div>
                {/* updated */}
            <div className='w-full flex items-center gap-3'>
             <label htmlFor="update" className='font-semibold text-[#2e424a]'>تاریخ بروزرسانی:</label>
             <span className='font-[shabnamBold]'>{moment(details?.updated_at).format("jYYYY/jMM/jDD")}</span>
            </div>
           <div className='flex w-full flex-col items-center mt-5 gap-3'>
             <div className='flex items-center 2xl:w-[30%] w-[80%] sm:w-[50%] justify-between'>
             <button type='submit' className='w-[100%] bg-[#ddb730] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#fdc702] text-white font-bold text-lg py-1 rounded-sm'>
                {
                    loading
                    ?<img src="/img/Rolling-0.8s-200px.svg" alt="loading..." className='w-[30px] mx-auto'/>
                    :"ویرایش"
                }
             </button>
             </div>
           </div>
        </form>
    </div>
    }
    
    </>
  )
}

export default EditWorkSamples;