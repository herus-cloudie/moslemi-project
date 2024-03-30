import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import NewTag from './NewTag/NewTag';
import TagsPagination from './TagsPagination/TagsPagination';

function Tags() {
    const [innerComponent,setInnerComponent] = useState(<></>);
    const Criterion = useSelector(state=> state.dashboard.tagsSwitch);
    useEffect(()=>{
        switch(Criterion)
        {
            case 'all' : setInnerComponent(<TagsPagination/>);
            break;
            case 'new' : setInnerComponent(<NewTag/>)
            break;
            default : setInnerComponent(<></>)
        }
    },[Criterion])

  return (
    <div className='container mx-auto h-full p-3 md:p-10 flex flex-col justify-between items-center'>
        {
            innerComponent
        }
    </div>
  )
}

export default Tags;