import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const OurPlans = () => {
  return (
    <div className="flex items-center justify-center gap-[30px] flex-wrap w-full">
      <div className="w-[90%]  min-h-fit sm:w-[300px] flex pb-5 flex-col items-center justify-between h-[530px] bg-[#F3F3F5] border border-solid border-[#dbdbdb]">
        <div className="flex flex-col w-full items-center bg-[#8E8C8C] text-white py-4 px-2 gap-1">
          <p className="font-[shabnamBold] text-2xl tracking-tighter">پلن کسب و کار خانگی</p>
          <p className="font-semibold">برای بیزینس های کوچک و خانگی</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-3 my-3">
            <p className="font-[shabnamBold] text-3xl text-[#707070]">بین ۳ تا ۷</p>
            <p className="font-[shabnamBold] text-[#8781BD] tracking-normal">میلیون تومان</p>
          </div>
          <div className="px-5 mt-3 flex flex-col gap-y-2 tracking-tighter">
            <div className="flex items-center gap-1">
              <AiFillCheckCircle className="text-[#8781BD]" />
              <p>دامین رایگان IR</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillCheckCircle className="text-[#8781BD]" />
              <p>6 ماه پشتیبانی رایگان</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillCheckCircle className="text-[#8781BD]" />
              <p>طراحی سایت با وردپرس</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillCheckCircle className="text-[#8781BD]" />
              <p>طراحی لوگو سایت</p>
            </div>
            <p>طراحیکارت ویزیت</p>
            <p>تولید محتوا در ابتدای کسب و کار</p>
            <p>مناسب کسب و کار های کوچک</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-9 gap-1">
            <Link to={"/our-business-plans"}>
              <button className="bg-[#56C253] font-[shabnamBold]  hover:bg-[#63df5f] transition-all duration-200 px-3 min-w-fit  w-[70%] md:w-fit md:px-16 py-[0.4rem] rounded-lg text-white tracking-wide text-lg">
                خرید این پلن
              </button>
            </Link>
            <p className="mt-2 font-[shabnamBold] text-slate-500">این طرح شامل بروزرسانی های رایگان است.</p>
          </div>
        </div>
      </div>
      <div className="w-[90%]  min-h-fit sm:w-[300px] flex pb-5 flex-col items-center overflow-hidden justify-between h-[530px] bg-[#F3F3F5] border border-solid border-[#dbdbdb]">
        <div className="flex flex-col w-full items-center bg-[#8E8C8C] text-white py-4 px-2 gap-1">
          <p className="font-[shabnamBold] text-2xl tracking-tighter">پلن کسب و کار نوپا</p>
          <p className="font-bold">برای بیزینس های تازه تاسیس</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-3 my-3">
            <p className="font-[shabnamBold] text-3xl text-[#707070]">بین ۷ تا ۱۶</p>
            <p className="font-[shabnamBold] text-[#8781BD] tracking-normal">میلیون تومان</p>
          </div>
          <div className="px-5 mt-3 flex flex-col gap-y-2 tracking-tighter min-h-fit">
            <div className="flex items-center gap-1">
              <AiFillCheckCircle className="text-[#8781BD]" />
              <p>دامین رایگان IR</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillCheckCircle className="text-[#8781BD]" />
              <p>6 ماه پشتیبانی رایگان</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillCheckCircle className="text-[#8781BD]" />
              <p>طراحی سایت متناسب با سلیقه شما</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillCheckCircle className="text-[#8781BD]" />
              <p>طراحی لوگو و بنر های وب سایت</p>
            </div>
            <p>تولید محتوا در ابتدای کسب و کار</p>
            <p>طراحی موشن گرافیک برای تبلیغ سایت</p>
            <p>مناسب کسب و کار های تازه تاسیس</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-9 gap-1">
            <Link to={"/our-business-plans"}>
                <button className="bg-[#56C253] font-[shabnamBold]  hover:bg-[#63df5f] transition-all duration-200 px-3 min-w-fit  w-[70%] md:w-fit md:px-16 py-[0.4rem] rounded-lg text-white tracking-wide text-lg">
                  خرید این پلن
                </button>
              </Link>
            <p className="mt-2 font-[shabnamBold] text-slate-500">این طرح شامل بروزرسانی های رایگان است.</p>
          </div>
        </div>
      </div>
      <div className="w-[90%]  min-h-fit sm:w-[300px] flex pb-5 flex-col items-center justify-between h-[530px] bg-[#F3F3F5] border border-solid border-[#dbdbdb]">
        <div className="flex flex-col w-full items-center bg-[#8E8C8C] text-white py-4 px-2 gap-1">
          <p className="font-[shabnamBold] text-2xl tracking-tighter">پلن کسب و کار حرفه ای</p>
          <p className="font-bold">برای بیزینس های تجاری و حرفه ای</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-3 my-3">
            <p className="font-[shabnamBold] text-3xl text-[#707070]">بین ۲۶ تا ۵۳</p>
            <p className="font-[shabnamBold] text-[#8781BD] tracking-normal">میلیون تومان</p>
          </div>
          <div className="px-5 mt-3 flex flex-col gap-y-2 tracking-tighter">
            <div className="flex items-center gap-1">
              <AiFillCheckCircle className="text-[#8781BD]" />
              <p>دامین رایگان IR</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillCheckCircle className="text-[#8781BD]" />
              <p>6 ماه پشتیبانی رایگان</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillCheckCircle className="text-[#8781BD]" />
              <p>طراحی وب سایت حرفه ای</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillCheckCircle className="text-[#8781BD]" />
              <p>طراحی اپلیکیشن موبایل</p>
            </div>
            <p>طراحی موشن گرافیک برای تبلیغ سایت</p>
            <p>طراحی لوگو و بنرهای سایت</p>
            <p>مناسب کسب و کار های بزرگ و حرفه ای</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-9 gap-1">
            <Link to={"/our-business-plans"}>
                <button className="bg-[#56C253] font-[shabnamBold]  hover:bg-[#63df5f] transition-all duration-200 px-3 min-w-fit  w-[70%] md:w-fit md:px-16 py-[0.4rem] rounded-lg text-white tracking-wide text-lg">
                  خرید این پلن
                </button>
              </Link>
            <p className="mt-2 font-[shabnamBold] text-slate-500">این طرح شامل بروزرسانی های رایگان است.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPlans;


