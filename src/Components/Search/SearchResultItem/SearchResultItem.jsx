import React from 'react'
import { useNavigate } from 'react-router-dom';
import HTMLRenderer from 'react-html-renderer';

function SearchResultItem({ data , deviceSize , type }) {
  const navigate = useNavigate();
  const transport = () => {
    if(type === "blog") {
      navigate(`article?id=${data.id}`)
    }else {
      navigate(`/shop/product/${data.id}`)
    }
  }

  return (
    <>
     {
       deviceSize === 'small'
       ?
        <div className='flex items-center py-1 px-3 justify-start gap-3 hover:opacity-70' onClick={transport}>
            <img src={data.image} alt={data.title} className='w-[40px] h-[40px] bg-slate-600'/>
            <div className='flex flex-col first-letter w-[70%]'>
              <span className='font-[shabnambold] text-sm'>{data.title}</span>
              <p className='text-xs line-clamp-1'>
                <HTMLRenderer html={data.description || data.body}/>
              </p>
            </div>
        </div>
       :
        <div className='flex items-center px-3 py-2 cursor-pointer justify-start gap-3 hover:opacity-70' style={{borderTop:"1px solid #d9d9d9"}} onClick={transport}>
            <img src={data.image} alt={data.title} className='w-[50px] h-[50px] bg-slate-600' />
            <div className='flex flex-col first-letter w-[85%]'>
              <span className='font-[shabnambold] text-sm'>{data.title}</span>
              <p className='text-xs line-clamp-1'>
                <HTMLRenderer html={data.description || data.body}/>
              </p>
            </div>
        </div>
     }
    </>
  )
}

export default SearchResultItem;