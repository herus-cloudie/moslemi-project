import React from 'react';

function UserInfoDiv({ title , value }) {
  return (
    <div className='flex items-center gap-2'>
        <span className='font-[vasirBold] text-[1rem] text-slate-600'>{ `${title}:` }</span>
        <span className='font-[vasirMedium] text-[0.9rem] text-slate-700'>{ value }</span>
    </div>
  )
}

export default UserInfoDiv;