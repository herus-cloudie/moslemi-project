import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LinksPagination from './LinksPagination/LinksPagination';
import NewLink from './NewLink/NewLink';

function Links() {
    const [innerComponent,setInnerComponent] = useState(<></>);
    const Criterion = useSelector(state=> state.dashboard.linksSwitch);
    useEffect(()=>{
        switch(Criterion)
        {
            case 'all' : setInnerComponent(<LinksPagination/>);
            break;
            case 'new' : setInnerComponent(<NewLink/>)
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

export default Links;