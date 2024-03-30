import React from "react";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import { Helmet } from "react-helmet";

const Brochure = () => {
  return (
    <main>
      <Helmet>
        <title>نهال آی تی | نمونه کار بروشور</title>
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
        <div className="container mx-auto">
          <h2 className="font-[shabnamBold] max-lg:text-3xl max-md:text-2xl max-sm:text-lg whitespace-nowrap tracking-tighter pt-8 mt-1  text-2xl sm:text-4xl text-center text-green-137 px-0 pb-10 sm:px-12">نمونه کارهای بروشور نهال آی تی</h2>
          <div className="flex flex-wrap gap-5 items-start">
              <img
                  alt="image_Brochure"
                  width={300}
                  src="https://nahalit.com/wp-content/uploads/2022/11/photo_6023757646743583840_y-1024x768.jpg"
                />
                <img
                  alt="image_Brochure"
                  width={300}
                  src="https://nahalit.com/wp-content/uploads/2022/11/photo_6023757646743583829_y-1024x768.jpg"
                />
                <img alt="image_Brochure" width={300} src="https://nahalit.com/wp-content/uploads/2022/11/IMG-20221031-WA0001.jpg" />
                <img
                  alt="image_Brochure"
                  width={300}
                  src="https://nahalit.com/wp-content/uploads/2022/11/IMG-20221031-WA0002-1024x683.jpg"
                />
                <img
                  alt="image_Brochure"
                  width={300}
                  src="https://nahalit.com/wp-content/uploads/2022/11/IMG-20221031-WA0003-1024x683.jpg"
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

export default Brochure;
