import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRole, getRoles } from '../../../../../features/dashboard/action';
import EditRole from '../EditRole/EditRole';
import { ToastContainer } from 'react-toastify';

function AllRoles() {
  const [isEdit,setIsEdit] = useState({status:false,role:{}});
  const roles = useSelector(state => state.dashboard.roles);
  const loading = useSelector(state => state.dashboard.rolesLoading);
  const permissions = useSelector(state => state.dashboard.permissions);
  const permissionsForEdit = useSelector(state => state.dashboard.permissionsForEdit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoles())
  },[isEdit])

  const roleDeleteHandle = (e,id) => {
    e.stopPropagation();
    dispatch(deleteRole(id))
    setIsEdit({status:false,role:{}})
  }

  return (
    <> 
    {
      !isEdit.status
      ?
      <>
       {
        loading
        ?
        <div className='flex w-full justify-center'>
          <img src="/img/Ripple-0.8s-200px.svg" alt="loading" className='w-[50px]'/>
        </div>
        :
        <div className='flex flex-col justify-start'>
          <span className='w-full text-white font-bold'> تعداد نقش ها ( { roles?.length ?? "" } )</span>
          <div className='flex items-center justify-center md:justify-start flex-wrap gap-5 px-3 py-10'>
            {
              roles?.map(role => (
                <div key={role.id} className='flex items-center relative cursor-default rounded-sm justify-center py-2 min-w-fit w-[90px] md:w-[110px] transition-all hover:bg-[#ffffffbe] bg-[#ffffffae]' onClick={()=>setIsEdit({status:true,role})}>
                  <span key={`${role.id}-span-1`} className='text-zinc-700 font-[vasirBold]'>{role.title}</span>
                  <span key={`${role.id}-span-2`} className='text-red-600 absolute top-0 cursor-pointer hover:text-red-500 transition-all left-1' onClick={(e)=>roleDeleteHandle(e,role.id)}>&#x2716;</span>
                </div>
              ))
            }
          </div>
        </div>
       }
      </>
      :
      <EditRole setIsEdit={setIsEdit} role={isEdit.role} permissions={permissions}/>
    }
    </>
  )
}

export default AllRoles;







