import moment from "moment-jalaali";
import React from 'react';
import { AiOutlineFile } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsEyeFill, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

function Detail({ blog , users }) {
const title = blog.title.replace(/ /g, '-')
    function findUser(id){
        const user = users?.find(user => user.id === id );
        let fullName = `${user?.first_name} ${user?.last_name}`;
        return fullName;
      }
   

  return (
        <div className="relative flex flex-col justify-between h-[30rem] 2xl:w-[30%] 2xl:h-[35rem] w-full sm:w-[45%] lg:w-[30%] lg:h-[28rem] bg-for-border shadow-[0px_0px_5px_1px_rgba(0,0,0,0.3)]">
            <img src={blog.image} alt="" className="w-full h-[60%] transition-all hover:brightness-105"/>
            <div className="absolute w-full flex justify-center h-full items-end">
            <div className="flex flex-col bg-white justify-between rounded-sm gap-2 px-3 py-3  2xl:py-8 w-[90%] mb-12 h-[60%] lg:h-[63%] 2xl:w-[80%] overflow-hidden">
                <div className="flex flex-col gap-1">
                <div className="flex gap-1 items-center text-sm text-stone-500">
                    <BiTimeFive/>
                    <span className="font-[shabnamBold]">{moment(blog.created_at).format('jYYYY/jMM/jDD')}</span>
                </div>
                <Link  to={`/articles/article/${blog.id}/${title}`}><span className="text-base font-[shabnambold] leading-8 m-0 2xl:text-[1.3rem]">{blog.title}</span></Link>
                </div>
                <p className="line-clamp-4 2xl:text-[1rem] font-[shabnamMedium] text-[#686868] text-justify leading-7 text-sm px-3">{blog.body}</p>
                <div className="w-full flex justify-center mt-2">
                <Link to={`/articles/article/${blog.id}/${title}`}><button type="button" className="text-white px-3 py-1 flex rounded-md text-base font-[shabnamBold] transition-all duration-500 hover:bg-green-600 bg-green-500">بیشتر بخوانید...</button></Link>
                </div>
            </div>
            </div>
            <div className="flex justify-between 2xl:justify-around w-full px-3 pb-3 gap-3 z-10 text-stone-700 text-[0.8rem]">
                <div className="flex gap-1 items-center">
                <BsEyeFill/>
                <span className="font-[vasir] text-stone-600">0</span>
                </div>
                <div className="flex gap-1 items-center cursor-pointer hover:text-green-600">
                <AiOutlineFile/>
                <span className="font-[vasir] text-sm text-stone-600">اخبار سایت</span>
                </div>
                <div className="flex items-center gap-1">
                <BsPerson />
                <span className="font-[vasir] text-sm text-stone-600">{findUser(blog.user_id)}</span>
                </div>
            </div>
        </div>
  )
}

export default Detail;