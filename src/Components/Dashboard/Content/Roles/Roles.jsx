import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllRoles from './AllRoles/AllRoles';
import NewRole from './NewRole/NewRole';

function Roles() {
    const [innerComponent,setInnerComponent] = useState(<></>);
    const Criterion = useSelector(state=> state.dashboard.rolesSwitch);
    useEffect(()=>{
        switch(Criterion)
        {
            case 'all' : setInnerComponent(<AllRoles/>);
            break;
            case 'new' : setInnerComponent(<NewRole/>)
            break;
            default : setInnerComponent(<></>)
        }
    },[Criterion])

  return (
    <div className='w-full h-full p-3 md:p-10 flex justify-center items-start'>
        {
            innerComponent
        }
    </div>
  )
}

export default Roles;