import Cookies from 'js-cookie';
import React from 'react';
import UserInfoDiv from './UserInfoDiv';

function UserProfile() {
  const userInfo = JSON.parse(Cookies.get("user"));

  return (
    <div className='flex w-fill items-center justify-start flex-wrap gap-x-20 gap-y-8 py-5'>
      <UserInfoDiv title={"نام"} value={userInfo.first_name}/>
      <UserInfoDiv title={"نام خانوادگی"} value={userInfo.last_name}/>
      <UserInfoDiv title={"نام کاربری"} value={userInfo.username}/>
      <UserInfoDiv title={"ایمیل"} value={userInfo.email}/>
      <UserInfoDiv title={"شماره موبایل"} value={userInfo.mobile}/>
      <UserInfoDiv title={"کد ملی"} value={userInfo.code_meli || ""}/>
      <UserInfoDiv title={"شماره کارت"} value={userInfo.card_number || ""}/>
    </div>
  )
}

export default UserProfile;