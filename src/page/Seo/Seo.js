import React from "react";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <main>
      <Helmet>
        <title>نهال آی تی | نمونه کار سئو</title>
      </Helmet>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      <div className="flex flex-wrap gap-y-10 items-start justify-around bg-[#f5f5f9] mt-1 pb-10 pt-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="font-[shabnamBold] tracking-tighter">سئو وب سایت آسمان سازه</p>
          <p className="font-bold text-stone-500 text-[0.9rem]">کلمات بهینه شده در این پروژه: </p>
          <p className="text-sm">انجام امور شهرداری</p>
          <p className="text-sm">اخذ تراکم</p>
          <p className="text-sm">شهرداری تهران</p>
          <p className="text-sm">اخذ سند</p>
          <p className="text-sm">گواهی عدم خلافی</p>
          <p className="text-sm">اخذ جواز ساختمان</p>
          <button className="bg-[#57C053] hover:bg-[#5dcd59] transition-all duration-300 px-6 py-1 text-sm font-[shabnamBold] rounded-md text-white mt-2">
            مشاهده
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="font-[shabnamBold] tracking-tighter">بهینه سازی و سئو سایت مکسی</p>
          <p className="font-bold text-stone-500 text-[0.9rem]">کلمات بهینه شده در این پروژه: </p>
          <p className="text-sm">خرید و قیمت کفش بچه گانه</p>
          <button className="bg-[#57C053] hover:bg-[#5dcd59] transition-all duration-200  px-6 py-1 text-sm font-[shabnamBold] rounded-md text-white mt-2">
            مشاهده
          </button>
        </div>
      </div>
      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Seo;
