import React from 'react';
import UserAvatarIcon from '../UserAvatar/UserAvatar';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

function UserPanelHeader({setDropMenu , dropMenu}) {
  
  return (
    <div className='w-full flex items-center justify-between bg-slate-200 py-3 px-5 shadow-[0px_3px_10px_-8px_#000]'>
      {
        dropMenu
        ?
        <AiOutlineClose className='text-2xl text-slate-700 md:hidden' onClick={()=>setDropMenu(false)}/>
        :
        <HiOutlineMenu className='text-2xl text-slate-700 md:hidden' onClick={()=>setDropMenu(true)}/>
      }
      <img src={"/img/plant.png"} alt="plant" className='scale-[1.3]'/>
      <UserAvatarIcon/>
    </div>
  )
}

export default UserPanelHeader;