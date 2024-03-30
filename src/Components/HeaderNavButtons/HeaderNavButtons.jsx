import React from 'react';
import { AiFillDashboard } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaSpa, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function HeaderNavButtons({ loginStatus , roleId }) {
  return (
    <div className="flex items-center justify-center xl:gap-x-3 lg:gap-x-3">
        {
        loginStatus
        ?
        <></>
        :
        <Link to={'/login'} className="flex flex-row-reverse items-center justify-center py-2 px-1 xl:px-3 rounded-md bg-[#57C053] hover:bg-[#62d15e] text-white gap-x-2" style={{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
        <span className="text-sm font-[shabnamMedium] tracking-tight">ورود و عضویت</span>
        <BsPerson className="text-base" />
        </Link>
        }
        {
        roleId !== '' && roleId === 1 || roleId === 5
        ?
        <Link to={'/dashboard'} className="flex flex-row-reverse w-[7rem] min-w-fit items-center justify-center py-2 px-1 rounded-md bg-[#57C053] hover:bg-[#62d15e] text-white gap-x-2" style={{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
        <span className="text-sm font-[shabnamMedium] tracking-tight">پنل مدیریت</span>
        <AiFillDashboard className="text-lg" />
        </Link>
        :
        <></>
        }
        {
        roleId !== '' && roleId !== 1  
        ?
        <Link to={'/userPage/userProfile'} className="flex flex-row-reverse w-[7rem] min-w-fit items-center justify-center py-2 px-1 xl:px-3 rounded-md bg-[#57C053] hover:bg-[#62d15e] text-white gap-x-2" style={{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
        <span className="text-sm font-[shabnamMedium] tracking-tight">پنل کاربری</span>
        <FaUserCircle className="text-lg" />
        </Link>
        :
        <></>
        }
    </div>
  )
}

export default HeaderNavButtons