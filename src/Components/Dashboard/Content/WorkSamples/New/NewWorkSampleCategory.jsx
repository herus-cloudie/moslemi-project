import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWorkSampleCategories, getWorkSampleCategories } from "../../../../../features/dashboard/action";
import Loading from "../../../../../page/Loading/Loading";
import { MdCancel } from "react-icons/md";

export default function NewWorkSampleCategory({setAddCategory}){
    const [activePermissions,setActivePermissions] = useState([]);
    const permissions = useSelector(state => state.dashboard.permissions);
    const workSamplesLoading = useSelector(state => state.dashboard.workSamplesLoading);
    const workSampleCategories = useSelector(state => state.dashboard.workSampleCategories);
    const titleRef = useRef();
    const categoryRef = useRef();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getWorkSampleCategories())
    },[])
    const formKeyNotSubmit = (e) => {
        if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
        {
            e.preventDefault();
            e.stopPropagation()
        }
    }

    const formSubmitter = () => {
      // console.log(categoryRef.current.value)
        const formData = {
          title:titleRef.current.value,
          work_sample_category_id:categoryRef.current.value == "null" ? "" :categoryRef.current.value ,
          permissions:activePermissions
        }
        switch(true)
        {
          case formData.title.length === 0 : toast.warn('عنوان را وارد کنید');
          break;
          case formData.title.length < 3 : toast.warn('عنوان کوتاه است');
          break;
          default : dispatch(addWorkSampleCategories(formData));
        }
    }

  return (
    <div className='w-full h-full flex flex-col justify-start items-center'>
      <div className='flex flex-col w-full 2xl:w-[70%] opacity-motion'>
      <div className='w-full bg-[#C0D9DB] p-2 flex items-center justify-between'>
            <h1 className='font-semibold text-lg text-stone-800'>دسته بندی جدید</h1>
            <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={()=>setAddCategory(false)}/>
        </div>
        <form  className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSubmit(e)}>
            {/* title */}
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="title" className='font-semibold text-[#2e424a]'>عنوان</label>
            <input type="text" className='p-1  outline-[#0ab694] w-full' ref={titleRef} required={true} name='title'/>
        </div>
      
        <div>
        <label htmlFor="workSamplesCategory" className='font-semibold text-[#2e424a] w-[80%] '>اضافه کردن به دسته بندی های پیشین</label>
                <select id="workSamplesCategory" ref={categoryRef} className='py-1'>
                    <option value="null">{"..."}</option>
                    {
                        workSampleCategories.map(work => (
                            <option value={work.id}>{work.title}</option>
                        ))
                    }
                </select>

        </div>
        <button onClick={(e)=>formSubmitter()} type='button' className='w-[80%] flex justify-center sm:w-[50%] 2xl:w-[30%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-lg py-1 rounded-sm'>
          {
            // Loading
            // ?
            // <img src="/img/Rolling-0.8s-200px.svg" alt="loading" className='w-[30px]'/>
            // :
            <span>ثبت</span>
          }
        </button>
        </form>
      </div>
    </div>
  )
}