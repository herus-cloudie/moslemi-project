import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NewsPagination from './AllNews/NewsPagination/NewsPagination';
import NewNews from './NewNews/NewNews';

function News() {
  const [innerComponent,setInnerComponent] = useState(<></>);
  const Criterion = useSelector(state=> state.dashboard.newsSwitch)
  useEffect(()=>{
    switch(Criterion)
    {
      case "all" : setInnerComponent(<NewsPagination/>);
      break;
      case "new" : setInnerComponent(<NewNews/>);
      break;
      default : setInnerComponent(<></>); 
    }
  },[Criterion])

  return (
    <div className='w-full p-3 md:p-10 flex flex-col items-center'>
      {
        innerComponent
      }
    </div>
  )
}

export default News;