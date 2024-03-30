import React, { useState } from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFillBriefcaseFill, BsHeart, BsYoutube } from "react-icons/bs";
import { FaSeedling, FaServer, FaTelegramPlane } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { RiSendBackward } from "react-icons/ri";
import { SiAparat } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  const [Footer, setFooter] = useState(false);

  const SiteCreateOnEnterMouse = () => {
    setFooter(true);
  };
  const SiteCreateOnOutMouse = () => {
    setFooter(false);
  };
  return (
    <div className="text-[#ccc] footer-border border-black 2xl:justify-center left-0 bg-[#223621] whitespace-nowrap px-48 max-xl:px-0 mx-auto pt-5 -z-10 pb-8">
      <div className="container flex-wrap gap-12 mb-10 mx-auto 2xl:gap-11 2xl:justify-between 2xl:w-full flex items-start justify-center 2xl:text-2xl text-sm mt-24 max-xl:gap-y-12 tracking-tight">
        <div className="flex flex-col justify-center items-start gap-y-4">
          <RiSendBackward className="text-4xl text-white" />
          <span className="font-[shabnamMedium] text-base">
            لینک های کمکی
          </span>
          <div className="w-full h-[2px] bg-white"></div>
          <Link className="mt-5 text-[1rem] font-[shabnam]" to="/order">
            ثبت سفارش
          </Link>
          <Link className="text-[1rem] font-[shabnam]" to="/recruitment">استخدام</Link>
          <Link className="text-[1rem] font-[shabnam]" to="/news">اخبار سایت نهال آی تی</Link>
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          <BsFillBriefcaseFill className="text-4xl text-white" />
          <span className="font-[shabnamMedium] text-base word-spa">
             خدمات اداری
          </span>
          <div className="w-[70%] h-[2px] bg-white"></div>
          <Link className="mt-5 text-[1rem] font-[shabnam]" to="/services/خدمات-کسب-و-کار">
            ایمیل مارکتینگ
          </Link>
          <Link className="text-[1rem] font-[shabnam]" to="/services/خدمات-کسب-و-کار">پیامک انبوه</Link>
          <Link className="text-[1rem] font-[shabnam]" to="/create_content">تولید محتوا</Link>
          <Link className="text-[1rem] font-[shabnam]" to="/SocialMediaBot">ربات شبکه های اجتماعی</Link>
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          <FaSeedling className="text-4xl text-white" />
          <span className="font-[shabnamMedium] text-base">
            خدمات تیم نهال آی تی
          </span>
          <div className="w-full h-[2px] bg-white"></div>
          <Link className="mt-5 text-[1rem] font-[shabnam]" to="/services/فروش-سایت-اختصاصی-و-اقتصادی" target="_blank">
            فروش سایت اختصاصی و اقتصادی
          </Link>
          <Link className="text-[1rem] font-[shabnam]" to="/services/فروش-قالب-سایت" target="_blank">فروش قالب سایت  </Link>
          <Link className="text-[1rem] font-[shabnam]" to="/services/طراحی-سایت-اختصاصی" target="_blank">طراحی سایت اختصاصی</Link>
          <Link className="text-[1rem] font-[shabnam]" to="/services/خدمات-سئو-وب-سایت" target="_blank">خدمات وبسایت و سئو وب سایت</Link>
          <Link className="text-[1rem] font-[shabnam]" to="/services/خدمات-کسب-و-کار" target="_blank">خدمات کسب و کار</Link>
          <Link className="text-[1rem] font-[shabnam]" to="/services/خدمات-شبکه-های-اجتماعی" target="_blank" >خدمات شبکه های اجتماعی</Link>
          <Link className="text-[1rem] font-[shabnam]" to="/services/موشن-گرافیک" target="_blank">خدمات موشن گرافیک</Link>
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          <FaSeedling className="text-4xl text-white" />
          <span className="font-[shabnamMedium] text-base">
            خدمات تیم نهال آی تی
          </span>
          <div className="w-[100%] h-[2px] bg-white"></div>
          <Link className="mt-5 text-[1rem] font-[shabnam]" to="/services/خدمات-گرافیک">
            خدمات گرافیک
          </Link>
          <Link className="text-[1rem] font-[shabnam]" to="/services/تدوین-پروپوزال">تدوین پروپوزال و بیزنس پلن</Link>
          <Link className="text-[1rem] font-[shabnam]" to="/services/اپلیکیشن-موبایل">خدمات اپلیکیشن موبایل</Link>
          <Link className="text-[1rem] font-[shabnam]" to="/services/خدمات-پریمیر-و-تدوین-فیلم">خدمات پریمیر و تدوین فیلم</Link>
          <Link className="text-[1rem] font-[shabnam]" to="/services/خدمات-تدوین-صدا-و-صدا-گذاری">خدمات تدوین صدا و صدا گذاری</Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <BsHeart className="text-4xl text-white" />
          <p className="font-[shabnam] text-base">نماد اعتماد الکترونیکی</p>
          <div className="w-36 bg-transparent border_ border-2 border-white py-[0.5px]"></div>
          <span className="font-[shabnamBold]">جزو اتحادیه کسب و کار های مجازی</span>
          <img src={"/img/trustlogo.png"} alt="trustLogo" className="w-[100px]"/>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-6">
        <div className="flex items-center justify-center gap-x-5 mt-8">
          <Link>
            <FaTelegramPlane className="text-2xl hover:text-blue-500 transition-all duration-200 text-[#ccc]" title="telegram" />
          </Link>
          <Link>
            <AiOutlineInstagram className="text-2xl hover:text-rose-500 transition-all duration-200 text-[#ccc]" title="instagram" />
          </Link>
          <Link>
            <AiOutlineTwitter className="text-2xl hover:text-sky-500 transition-all duration-200 text-[#ccc]" title="twitter" />
          </Link>
          <Link>
            <BsYoutube className="text-2xl hover:text-red-500 transition-all duration-200 text-[#ccc]" title="youtube" />
          </Link>
          <Link>
            <SiAparat className="text-2xl hover:text-red-700 transition-all duration-200 text-[#ccc]" title="aparat" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <FaServer className="text-[#57C053]" />
          <Link to={"https://sarzaminhooshmand.com/"} className="tracking-tighter font-[shabnam]">توسعه و پشتیبانی : بهینه سازان سرزمین هوشمند</Link>
        </div>
      </div>
      <div className="w-[80%] h-[1px] bg-[#949494] mx-auto mt-10"></div>
      <div className="container mx-auto mt-10 tracking-tighter flex justify-around flex-wrap items-center">
        <ul className="flex items-center justify-start flex-wrap px-3">
          <li>
            <Link to={"/about_us"} className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">درباره ما</Link>
          </li>
          <li>
            <Link to="/ContactUs" className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">
              تماس با ما
            </Link>
          </li>
          <li>
            <Link to={"/articles"} className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">وبلاگ</Link>
          </li>
          <li>
            <Link to={"/shop"} className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">فروشگاه</Link>
          </li>
          <li>
            <Link to={"/privacy_and_policy"} className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">سیاست و حریم خصوصی</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
