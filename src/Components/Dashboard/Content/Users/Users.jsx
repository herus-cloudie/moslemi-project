import React, { useEffect, useState } from 'react';
import { CgCalendarDates } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { TbAlphabetLatin, TbListDetails } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../../../features/dashboard/action';
import moment from 'moment-jalaali';

function Users({ currentItems , setShowDetails }) {
  const roles = useSelector(state => state.dashboard.roles);
  const dispatch = useDispatch();
  

  const userRemoval = (id) => {
    dispatch(deleteUser(id))
  }

  return (
      <div className='w-full p-10 flex items-center 2xl:w-[70%] flex-col gap-5'>
      <span className='w-full text-white font-bold'>تعداد کاربر ها ( {currentItems !== null ? currentItems.length : 'NaN'} )</span>
      <div className='hidden md:flex bg-[#ffffff69] w-full p-5 text-white text-2xl justify-between'>
        <FaUsers/>
        <TbAlphabetLatin/>
        <MdOutlineAlternateEmail/>
        <CgCalendarDates/>
        <TbListDetails/>
      </div>
      <div className='flex flex-col gap-5 items-center w-full'>
        {
          currentItems.map((user,index) => (
            <div key={user.id} className={`w-[15rem] md:w-full flex flex-col md:flex-row gap-y-3 items-center bg-white hover:bg-[#f1f1f1] text-[#171e28] justify-between px-5 py-4 rounded-xl`} onClick={()=>setShowDetails(user)}>
              <HiUserCircle className='scale-[2.5]'/>
              <h1 className='text-lg font-[shabnambold]'>{user?.first_name} {user?.last_name}</h1>
              <span>{user?.email}</span>
              <span className='font-[shabnam] text-sm'>{roles.find(role => role.id === user?.role_id)?.title}</span>
              <span className='text-sm font-[shabnamBold]'>{moment(user?.created_at).format("jYYYY/jMM/jDD")}</span>
              {/* <div className='flex items-center gap-3'>
                <MdDeleteSweep className='scale-[1.5] hover:text-red-600 text-red-700 transition-all' onClick={()=>userRemoval(user.id)}/>
              </div> */}
            </div>
          ))
        }
      </div>
      </div>
  )
}

export default Users;