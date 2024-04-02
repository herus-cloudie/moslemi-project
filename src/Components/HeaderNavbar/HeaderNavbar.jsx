import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import {
  getWorkSample,
  getWorkSampleCategories,
} from "../../features/dashboard/action";

function HeaderNavbar() {
  const [showSlide11, setShowSlide11] = useState(false);
  const [showSlide2, setShowSlide2] = useState(false);
  const [showSlide3, setShowSlide3] = useState(false);

  const menuData = useSelector((state) => state.dashboard.categories);
  const workSampleCategories = useSelector(
    (state) => state.dashboard.workSampleCategories
  );

  // const roleId = JSON.parse(Cookies.get("user"))?.role_id 
  // console.log(Cookies.get("user")) 

  const [hoveredItem, setHoveredItem] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkSample());
    dispatch(getWorkSampleCategories());
  }, []);
  const clickEnterShowSlide11 = (itemId) => {
    setShowSlide11(true);
    setHoveredItem(itemId);
  };
  const clickOutShowSlide11 = () => {
    setHoveredItem(null);
    setShowSlide11(false);
  };
  const clickEnterShowSlide2 = () => {
    setShowSlide2(true);
  };
  const clickOutShowSlide2 = () => {
    setShowSlide2(false);
    setHoveredItem(null);
  };
  const clickEnterShowSlide3 = () => {
    setShowSlide3(true);
  };
  const clickOutShowSlide3 = () => {
    setShowSlide3(false);
  };
  return (
    <ul className="flex justify-start items-baseline gap-x-5 2xl:gap-x-10 lg:whitespace-nowrap">
      {/* {menuData.map(item => <li> {item.category_id === null && item.title } </li>)} */}
      <li>
        <Link
          to="/"
          className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer"
        >
          صفحه اصلی
        </Link>
      </li>
      <li className="flex items-center gap-x-1 relative">
        <Link
          to={"/shop"}
          className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer"
        >
          محصولات
        </Link>
      </li>
      <li className="flex items-center gap-x-1 relative">
        <Link
          to={"/news"}
          className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer"
        >
          اخبار
        </Link>
      </li>
      <li>
        <Link
          to="/order"
          className="font-[shabnamMedium] text-[#171717] text-sm cursor-pointer"
        >
          ثبت سفارش
        </Link>
      </li>
      <li>
        <Link
          to={"/articles"}
          className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer"
        >
          بلاگ
        </Link>
      </li>
      <li
        className="flex items-center gap-x-1 relative"
        onMouseEnter={clickEnterShowSlide2}
        onMouseLeave={clickOutShowSlide2}
      >
        <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
          نمونه کارها
        </span>
        <RiArrowDownSLine />
        <div
          onMouseEnter={clickEnterShowSlide2}
          className={
            showSlide2
              ? "w-56 2xl:w-fit z-50 absolute top-9 shadow-[1px_1px_10px_rgba(0,0,0,.25)] transition-all duration-700 -translate-y-[1rem]"
              : "w-56 2xl:w-fit z-50 absolute top-9 shadow-[1px_1px_10px_rgba(0,0,0,.25)] opacity-0 -translate-y-[50rem] transition-all duration-700"
          }
        >
          <div className="bg-[#07B235] h-[2px] absolute top-0 right-0 left-0 w-full"></div>
          <ul className="px-3 py-1 bg-white">
            {workSampleCategories.map((work) => (
              <>
                {work.children.length > 0 ? (
                  <li
                    className="flex py-2 relative"
                    onMouseEnter={() => {
                      clickEnterShowSlide11(work.id);
                    }}
                    onMouseLeave={clickOutShowSlide11}
                    key={work.id}
                  >
                    <Link
                      to={`/workSamples/${work.id}/${work.title}`}
                      className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer"
                    >
                      {" "}
                      {work.title}{" "}
                    </Link>
                    <MdKeyboardArrowLeft />
                    <div
                      onMouseEnter={() => {
                        clickEnterShowSlide11(work.id);
                      }}
                      className={
                        hoveredItem === work.id
                          ? "absolute bg-white -right-[-140px] -top-1 px-7 py-2 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex    transition-all duration-700"
                          : "absolute bg-white -right-[-140px] -top-1 px-7 py-2 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex  opacity-0 -translate-y-[50rem] transition-all duration-700"
                      }
                    >
                      {work.children.map((item) => (
                        <Link
                          to={`/workSamples/${item.id}/${item.title}`}
                          className="px-4 py-1"
                          key={item.id}
                        >
                          <p className="font-[shabnamMedium] text-[#171717] text-sm cursor-pointer">
                            {item.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </li>
                ) : !work.work_sample_category_id ? (
                  <li>
                    <Link
                      to={`/workSamples/${work.id}/${work.title}`}
                      className="flex items-center justify-start py-2"
                      key={work.id}
                    >
                      <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
                        {" "}
                        {work.title}
                      </p>
                    </Link>
                  </li>
                ) : (
                  <></>
                )}
              </>
            ))}
            {/* <li
                className="flex items-center justify-between py-2 relative"
                onMouseEnter={clickEnterShowSlide11}
                onMouseLeave={clickOutShowSlide11}
            >
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار گرافیک</span>
                <MdKeyboardArrowLeft />
                <div
                onMouseEnter={clickEnterShowSlide11}
                className={
                    showSlide11
                    ? "absolute bg-white -left-[15rem] -top-2 px-7 py-2 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-700"
                    : "absolute bg-white -left-[15rem] -top-2 px-7 py-2 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-700"
                }
                >
                <Link to="/workSamples/graphic/MotionGraphics" className="px-4 py-1">
                    <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار موشن گرافیک</p>
                </Link>
                <Link to="/workSamples/graphic/UI_UX" className="px-4 py-1">
                    <p className="font-[shabnamMedium] text-[#171717] text-sm cursor-pointer">نمونه کار UI/UX</p>
                </Link>
                <Link to="/workSamples/graphic/Brochure" className="px-4 py-1">
                    <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار بروشور</p>
                </Link>
                <Link to="/workSamples/graphic/Poster" className="px-4 py-1">
                    <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار پوستر</p>
                </Link>
                <Link to="/workSamples/graphic/Catalog" className="px-4 py-1">
                    <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار کاتالوگ</p>
                </Link>
                <Link to="/workSamples/graphic/BusinessCard" className="px-4 py-1">
                    <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار کارت ویزیت</p>
                </Link>
                <Link to="/workSamples/graphic/Logo" className="px-4 py-1">
                    <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار لوگو</p>
                </Link>
                </div>
            </li>
            <li>
                <Link to="/workSamples/Premiere"  className="flex items-center justify-start py-2">
                <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار پریمیر</p>
                </Link>
            </li>
            <li>
                <Link to="/workSamples/web/WebsiteDesignPortfolio"  className="flex items-center justify-start py-2">
                <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار طراحی سایت</p>
                </Link>
            </li>
            <li>
                <Link to="/workSamples/Application" className="flex items-center justify-between py-2">
                <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار اپلیکیشن</p>
                </Link>
            </li>
            <li>
                <Link to="/workSamples/Seo" className="flex items-center justify-between py-2">
                <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار سئو</p>
                </Link>
            </li>
            <li>
                <Link to="/workSamples/Voicing" className="flex items-center justify-between py-2">
                <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار تدوین و صدا گذاری</p>
                </Link>
            </li>
            </ul>
        </div>
        </li> */}
          </ul>
        </div>
      </li>
      <li>
        <Link
          to="/LoginLearn"
          className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer"
        >
          آموزش ورود
        </Link>
      </li>

      <li>
        <Link
          to="/recruitment"
          className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer"
        >
          استخدام
        </Link>
      </li>
      <li
        className="flex items-center gap-x-1 relative"
        onMouseEnter={clickEnterShowSlide3}
        onMouseLeave={clickOutShowSlide3}
      >
        <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
          خدمات ما
        </span>
        <RiArrowDownSLine />
        <div
          onMouseEnter={clickEnterShowSlide3}
          className={
            showSlide3
              ? "w-64 2xl:w-fit z-50 absolute top-9 transition-all duration-700 -translate-y-[1rem]"
              : "w-64 2xl:w-fit z-50 absolute top-9 opacity-0 -translate-y-[50rem] transition-all duration-700"
          }
        >
          <ul
            className="px-5 py-1 bg-white  w-fit flex shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex-col items-start"
            style={{ borderTop: "2px solid #57C053" }}
          >
            <li className="flex items-center justify-start py-1">
              <Link to="/services/فروش-سایت-اختصاصی-و-اقتصادی">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
                  فروش سایت اختصاصی و اقتصادی
                </span>
              </Link>
            </li>
            <li className="flex items-center justify-start py-1">
              <Link to="/services/فروش-قالب-سایت">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
                  فروش قالب سایت
                </span>
              </Link>
            </li>
            <li className="flex items-center justify-start py-1">
              <Link to="/services/طراحی-سایت-اختصاصی">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
                  طراحی سایت اختصاصی
                </span>
              </Link>
            </li>
            <li className="flex items-center justify-start py-1">
              <Link to="/services/خدمات-سئو-وب-سایت">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
                  خدمات وب سایت و سئو وب سایت
                </span>
              </Link>
            </li>
            <li className="flex items-center justify-start py-1">
              <Link to="/services/خدمات-کسب-و-کار">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
                  خدمات کسب و کار
                </span>
              </Link>
            </li>
            <li className="flex items-center justify-start py-1">
              <Link to="/services/خدمات-شبکه-های-اجتماعی">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
                  خدمات شبکه های اجتماعی
                </span>
              </Link>
            </li>
            <li className="flex items-center justify-start py-1">
              <Link to="/services/موشن-گرافیک">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
                  موشن گرافیک
                </span>
              </Link>
            </li>
            <li className="flex items-center justify-start py-1">
              <Link to="/services/تدوین-پروپوزال">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
                  تدوین پروپوزال
                </span>
              </Link>
            </li>
            <li className="flex items-center justify-start py-1">
              <Link to="/services/اپلیکیشن-موبایل">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
                  اپلیکیشن موبایل
                </span>
              </Link>
            </li>
            <li className="flex items-center justify-start py-1">
              <Link to="/services/خدمات-پریمیر-و-تدوین-فیلم">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
                  خدمات پریمیر و تدوین فیلم
                </span>
              </Link>
            </li>
            <li className="flex items-center justify-start py-1">
              <Link to="/services/خدمات-گرافیک">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
                  خدمات گرافیک
                </span>
              </Link>
            </li>
            <li className="flex items-center justify-start py-1">
              <Link to="/services/خدمات-تدوین-صدا-و-صدا-گذاری">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">
                  خدمات تدوین صدا و صدا گذاری
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}

export default HeaderNavbar;
