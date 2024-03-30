import React from "react";

import moment from "moment-jalaali";

import { FaUsers } from "react-icons/fa";
import { TbAlphabetLatin } from "react-icons/tb";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { HiUserCircle } from "react-icons/hi";

const Supervisors = ({ supervisors, currentItems, setShowDetails }) => {
  return (
    <div className="space-y-5 p-5">
      <div className="text-xl font-bold text-white">
        تعداد سرپرست‌ها ( {supervisors.length} )
      </div>
      <div className="hidden w-full text-2xl text-white bg-[#ffffff69] p-5 md:flex justify-between">
        <FaUsers />
        <TbAlphabetLatin />
        <MdOutlineAlternateEmail />
        <CgCalendarDates />
      </div>
      <div className="space-y-5">
        {currentItems.length !== 0 &&
          currentItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-[#171e28] bg-white p-5 rounded-xl cursor-pointer hover:bg-[#f1f1f1] md:flex-row justify-between"
              onClick={() => setShowDetails(item)}
            >
              <HiUserCircle size={40} />
              <h1 className="text-lg font-[shabnambold]">
                {item.first_name} {item.last_name}
              </h1>
              <span>{item.email}</span>
              <span className="text-sm font-[shabnamBold]">
                {moment(item.created_at).format("jYYYY/jMM/jDD")}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Supervisors;
