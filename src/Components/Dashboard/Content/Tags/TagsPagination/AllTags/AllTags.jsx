import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletingTag } from '../../../../../../features/dashboard/action';

function AllTags({ currentItems , products , tags }) {
  const [showDeleteIcon,setShowDeleteIcon] = useState('');
  const dispatch = useDispatch();

  function deleteTag(id) {
        dispatch(deletingTag(id))
  }

  return (
    <div className='w-full flex flex-col gap-5 items-center'>
        <span className='w-full text-white font-bold mx-5 md:m-0'> تگ ها ( {tags?.length} )</span>
        <div className='flex flex-wrap items-center gap-3 w-full justify-center'>
            {
                currentItems?.map(tag => (
                    <div className='bg-white flex flex-col px-6 py-3 gap-1 relative' onMouseEnter={()=>setShowDeleteIcon(tag?.id)} onMouseLeave={()=>setShowDeleteIcon('')}>
                        <span className='font-[shabnamBold]'>{products.find(pro => pro.id === tag.product_id)?.title}:</span>
                        <span className='font-[shabnam] bg-slate-500 w-fit p-1 rounded-lg text-sm text-white'>{tag.title}</span>
                        {
                            showDeleteIcon === tag.id
                            ?
                            <span className='absolute text-xs cursor-default top-1 left-1' onClick={()=> deleteTag(tag.id)}>&#10060;</span>
                            :
                            <></>
                        }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AllTags;