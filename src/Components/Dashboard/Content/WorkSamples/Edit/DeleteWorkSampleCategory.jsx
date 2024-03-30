import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteWorkSampleCategories } from "../../../../../features/dashboard/action";

export default function DeleteWorkSampleCategory({setDeleteCategory , workSampleCategories}){
    const dispatch = useDispatch();
    
    const categoryDeleteHandle = (e,id) => {
        e.stopPropagation();
        dispatch(deleteWorkSampleCategories(id))
      }
    
    return(
        <div className='w-full h-full flex flex-col justify-start items-center'>
      <div className='flex flex-col w-full 2xl:w-[70%] opacity-motion'>
      <div className='w-full bg-[#C0D9DB] p-2 flex items-center justify-between'>
            <h1 className='font-semibold text-lg text-stone-800'>دسته بندی ها</h1>
            <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={()=>setDeleteCategory(false)}/>
        </div>
        <div className="flex gap-5 m-3">
            {workSampleCategories.map(item=>{
                return(
                    <div key={item.id} className='flex items-center relative cursor-default rounded-sm justify-center py-2 min-w-fit w-[90px] md:w-[110px] transition-all hover:bg-[#ffffffbe] bg-[#ffffffae]' onClick={()=>setIsEdit({status:true,role})}>
                    <span key={`${item.id}-span-1`} className='text-zinc-700 font-[vasirBold] py-2'>{item.title}</span>
                    <span key={`${item.id}-span-2`} className='text-red-600 absolute top-0 cursor-pointer hover:text-red-500 transition-all left-1' onClick={(e)=>categoryDeleteHandle(e,item.id)}>&#x2716;</span>
                  </div>
                )
            })}
        </div>
      </div>
    </div>
    )
}