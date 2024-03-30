import React from "react";

const AboutSite = () => {
  return (
    <div className="flex-col w-[80%] sm:w-[80%] lg:w-[70%] sm:flex-row flex-wrap flex lg:gap-1 gap-10   items-center justify-between max-lg:gap-12  bg-[#f3f3f5] py-10 rounded-lg">
        <div className="flex w-fit sm:w-[40%] text-sm  lg:w-[24%] justify-between sm:justify-center items-center gap-2">
        <img alt="aboutSite" src="/img/atry4.png" />
        <div className="flex flex-col items-start gap-1 justify-center">
          <p className="tracking-tighter font-[shabnam]">طراحی استاندارد</p>
          <p className="tracking-tighter font-[shabnam]">طرح ارسالی</p>
        </div>
        </div>
        <div className="flex w-fit sm:w-[40%] text-sm  lg:w-[24%] justify-between sm:justify-center items-center gap-2">
          <img alt="aboutSite" src="/img/atry3.png" />
          <div className="flex flex-col items-start gap-1 justify-center">
            <p className="tracking-tighter font-[shabnam]">پرداخت اقساطی</p>
            <p className="tracking-tighter font-[shabnam]">به صورت آنلاین</p>
          </div>
        </div>
        <div className="flex justify-between w-fit text-sm  sm:w-[40%] lg:w-[24%] sm:justify-center items-center gap-2">
          <img alt="aboutSite" src="/img/atry2.png" />
          <div className="flex flex-col items-start gap-1 justify-center">
            <p className="tracking-tighter font-[shabnam]">تحویل فوری</p>
            <p className="tracking-tighter font-[shabnam]">با بالاترین کیفیت</p>
          </div>
        </div>
        <div className="flex w-fit sm:w-[40%] lg:w-[24%] text-sm  justify-between sm:justify-center items-center gap-2">
          <img alt="aboutSite" src="/img/atry1.png" />
          <div className="flex flex-col items-start gap-1 justify-center">
            <p className="tracking-tighter font-[shabnam]">پشتیبانی قوی</p>
            <p className="tracking-tighter font-[shabnam]">به صورت آنی</p>
          </div>
        </div>
    </div>
  );
};

export default AboutSite;
