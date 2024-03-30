import React from "react";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import { Helmet } from "react-helmet";

const BusinessCard = () => {
  return (
    <main>
      <Helmet>
        <title>نهال آی تی | نمونه کار کارت ویزیت</title>
      </Helmet>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      <div className="bg-[#f5f5f9] pt-9 pb-12">
        <div className="container px-48 mx-auto">
          <h2 className="font-[shabnamBold] max-lg:text-3xl max-md:text-2xl max-sm:text-lg whitespace-nowrap tracking-tighter pt-8 mt-1  text-2xl sm:text-4xl text-center text-green-137 px-0 pb-10 sm:px-12">نمونه کار های کارت ویزیت</h2>
          <div className="flex flex-wrap items-center justify-start gap-8">
            <img
              alt="Imgae_Catalog"
              width={250}
              src="https://nahalit.com/wp-content/uploads/2022/12/IMG_20221225_130536_530-656x1024.jpg"
            />
          </div>
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

export default BusinessCard;
