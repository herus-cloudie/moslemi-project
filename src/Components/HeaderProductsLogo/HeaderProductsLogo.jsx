import React from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";
import { RiWordpressFill } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';

function HeaderProductsLogo() {
    const location = useLocation();
    const urlPath = location.pathname;

  return (
    <>
     {
        urlPath !== '/shop' 
        ?
        <div className="flex justify-center mt-10">
            <div>
            <div className="border-l-2 gap-1 border-dotted cursor-default border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
                <BsWordpress className="text-[2rem] text-[#57C053] transition-all duration-300" />
                <Link to={"/shop?category=قالب وردپرس"} className="text-[#191919] hover:text-[#64d24b] transition-all text-[0.9rem] font-[shabnamthin] tracking-tighter">قالب وردپرس</Link>
            </div>
            </div>
            <div>
            <div className="border-l-2 gap-1 border-dotted cursor-default border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
                <AiFillHtml5 className="text-[2rem] text-[#57C053] transition-all duration-300" />
                <Link to={"/shop?category=قالب html"} className="text-[#191919] hover:text-[#64d24b] transition-all text-[0.9rem] font-[shabnamThin] tracking-tighter">قالب html</Link>
            </div>
            </div>
            <div>
            <div className="border-l-2 gap-1 cursor-default border-dotted border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
                <RiWordpressFill className="text-[2rem] text-[#57C053] transition-all duration-300" />
                <Link to={"/shop?category=پلاگین وردپرس"} className="text-[#191919] hover:text-[#64d24b] transition-all text-[0.9rem] font-[shabnamThin] tracking-tighter">پلاگین وردپرس</Link>
            </div>
            </div>
            <div>
            <div className="px-4 py-3 flex gap-1 cursor-default flex-col items-center justify-center">
                <FaAndroid className="text-[2rem] text-[#57C053]  transition-all duration-300" />
                <Link to={"/shop?category=محصولات اپلیکیشن"} className="text-[#191919] hover:text-[#64d24b] transition-all text-[0.9rem] font-[shabnamThin] tracking-tighter">محصولات اپلیکیشن</Link>
            </div>
            </div>
        </div>
        :
        <></>
     }
    </>
  )
}

export default HeaderProductsLogo