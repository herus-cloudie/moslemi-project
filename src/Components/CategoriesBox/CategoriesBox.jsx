import React , { useState } from 'react'
import { useSelector } from 'react-redux';
import { MdKeyboardArrowLeft } from 'react-icons/md';

function CategoriesBox({ dropCate , setDropCate }) {
    const [childList,setChildList] = useState(false);
    const [childList_2,setChildList_2] = useState(false);
    const [goalCate,setGoalCate] = useState(null);
    const [goalChild,setGoalChild] = useState(null);
    const categories = useSelector(state => state.dashboard.categories);
    const cateList = categories !== null && categories !== undefined ? categories : [{title:'دسته بندی بار گیری نشده است!',category_id:null,}]

    const liHandler = (value) => {
        setChildList(true);
        const item = categories.filter(cate => cate.category_id === null).find(cate => cate.title === value);
        setGoalCate(item)
    }

    const liHandler_2 = (id) => {
        setChildList_2(true);
        const item = categories.find(cate => cate.id === id);
        setGoalChild(item)
    }

  return (
    <div className='w-full flex justify-start items-start gap-3'>
            <div className='flex flex-col gap-3 justify-center items-start'>
            <button type='button' onClick={()=>{
                setDropCate({status:!dropCate.status,value:dropCate.value,id:dropCate.id})
                setChildList(false)
                setChildList_2(false)
            }} className='text-sm w-fit bg-yellow-600 py-1 px-2 border-2 border-[#BABCBE] hover:bg-yellow-500 transition-all rounded-md text-white font-bold'>دسته بندی ها</button>
            {
                dropCate.value !== null
                ? <div className='bg-transparent p-1 w-fit rounded-sm font-bold text-white border-dashed border-white border-2'>{dropCate.value}</div>
                :<span className='text-rose-600 font-bold'>دسته بندی انتخاب نشده!</span>
            }
            </div>
            <ul className='bg-white px-2 cate-scroll overflow-hidden max-h-[10rem] overflow-y-scroll transition-all duration-300 rounded-sm' style={{height:dropCate.status?'fit-content':'0px',padding:dropCate.status?'3px':'0px'}}>
                {
                    cateList.filter(cate => cate.category_id === null).map((cate,i)=>(
                        <li key={i} className='cursor-pointer flex items-center gap-1 hover:text-purple-600 hover:font-bold transition-all'
                        onClick={()=>{
                            setDropCate({status:false,value:cate.title,id:cate.id})
                            setChildList(false)
                            setChildList_2(false)
                        }}
                        onMouseEnter={(e)=>{
                            liHandler(cate.title)
                            setChildList_2(false)
                        }}
                        >
                        {
                            cateList.find(item => item.category_id === cate.id) !== undefined
                            ? 
                            <>
                            <span>{cate.title}</span>
                            <MdKeyboardArrowLeft/>
                            </>                              
                            :
                            <span>{cate.title}</span>
                        }
                        </li>
                    ))
                }
            </ul>
            {
                goalCate !== null
                ? 
            <ul className='bg-white px-2 rounded-sm transition-all duration-300 cate-scroll overflow-hidden max-h-[10rem] overflow-y-scroll' style={{height:childList?'fit-content':'0px'}}>
                {
                    categories.filter(cate => cate.category_id === goalCate.id).map((item,i)=>(
                        <li key={i}
                        onClick={()=>{
                            setDropCate({status:false,value:item.title,id:item.id})
                            setChildList(false)
                            setChildList_2(false)
                        }}
                        onMouseEnter={(e)=>{
                            liHandler_2(item.id)
                            setChildList_2(true)
                        }}  className='cursor-pointer hover:text-orange-600 hover:font-bold transition-all flex items-center gap-1'>
                            {
                                cateList.find(cate => cate.category_id === item.id ) !== undefined
                                ?
                                <>
                                <span>{item.title}</span>
                                <MdKeyboardArrowLeft/>
                                </>
                                :
                                <span>{item.title}</span>
                            }
                        </li>
                    ))
                }
            </ul>
            : <></>
            }
            {
            goalChild !== null
            ?
            <ul className='bg-white px-2 rounded-sm transition-all duration-300 cate-scroll overflow-hidden max-h-[10rem] overflow-y-scroll' style={{height:childList_2?'fit-content':'0px'}}>
            {
                categories.filter(cate => cate.category_id === goalChild.id).map((item,i)=>(
                    <li key={i} onClick={()=>{
                        setDropCate({status:false,value:item.title,id:item.id})
                        setChildList(false)
                        setChildList_2(false)
                    }} className='cursor-pointer hover:text-lime-600 hover:font-bold transition-all'>{item.title}</li>
                ))
            }
            </ul>
            :
            <></>
            }
    </div>
  )
}

export default CategoriesBox