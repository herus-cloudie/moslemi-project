import React from "react";
import { Link } from "react-router-dom";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import { Helmet } from "react-helmet";

const WebsiteDesignPortfolio = () => {
  return (
    <main>
      <Helmet>
        <title>نهال آی تی | نمونه کار طراحی سایت</title>
      </Helmet>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      <div className="flex flex-col flex-wrap max-lg:items-center items-center justify-center py-10 container mx-auto px-48 max-lg:px-20 max-md:px-12 max-sm:px-5">
        <h2 className="font-[shabnamBold] flex items-center justify-center text-xl text-[#4c4c4c] mb-10">
          نمونه کارها
        </h2>
        <div className="flex flex-wrap items-center justify-between max-lg:justify-center max-lg:mt-8">
          <div className="w-full flex flex-col items-center">
            <Link className="text-[#00750A] font-[shabnamBold] text-lg">سایت کفش توپ</Link>
            <p className="text-base">این سایت با موضوع خرید کفش و کتونی با نام کفش توپ می باشد .</p>
          </div>
          <Link className="flex items-center justify-center">
            <img
              src="https://nahalit.com/wp-content/uploads/2022/10/photo_2022-10-07_03-12-07.jpg"
              className="rounded-3xl border-[3.1px] border-solid border-[#4c4c4c] m-8 hover:opacity-80 transition-all duration-300"
              width={320}
              alt="image_portfolio"
            />
          </Link>
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

export default WebsiteDesignPortfolio;
