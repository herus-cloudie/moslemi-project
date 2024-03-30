import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addworkSampleGalleries } from "../../../../../features/dashboard/action";
import { MdCancel } from "react-icons/md";

export default function NewWorkSampleGallery({setAddGalleries , details}){
    const [imageName,setImageName] = useState('');
    const imageRef = useRef();
    const workSampleGalleries = useSelector(state => state.dashboard.workSampleGalleries)
    const dispatch = useDispatch();

    function addImage(e){
        e.preventDefault()
        let formdata = new FormData();
        formdata.append("image",imageName, `${imageRef.current.value}`);
        formdata.append("title", details.title);
        formdata.append("work_sample_id", details.id);
   
        dispatch(addworkSampleGalleries(formdata))
    }

    return(
        <div className='w-full h-full flex flex-col justify-start items-center'>
      <div className='flex flex-col w-full 2xl:w-[70%] opacity-motion '>
         <div className='w-full bg-[#C0D9DB] p-2 flex items-center justify-between'>
            <h1 className='font-semibold text-lg text-stone-800'>اضافه کردن عکس</h1>
            <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={()=>setAddGalleries(false)}/>
         
        </div>
        <form  className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90'>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="image" className='font-semibold text-[#2e424a]'>تصویر</label>
                    <input onChange={(e)=>{
                        setImageName(e.target.files[0])
                    }} type="file" ref={imageRef} className='p-1 outline-[#0ab694] w-full text-left' required={true} name='image'/>
                </div>
                <button type="submit" onClick={(e)=>{addImage(e)}} className='w-[100%] bg-[#07C7A3] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#0eecc3] text-white font-bold text-xl py-1 rounded-sm'> اضافه کردن </button>
        </form>
        </div>
        </div>
    )
}