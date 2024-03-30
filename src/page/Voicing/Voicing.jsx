import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { TfiFaceSad } from "react-icons/tfi";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import { Helmet } from "react-helmet";

const Voicing = () => {
  return (
    <main>
      <Helmet>
        <title>نهال آی تی | نمونه کار تدوین صدا</title>
      </Helmet>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      <div className="flex items-center justify-center min-h-[50vh]">
        <h2 className="font-[shabnamBold] max-lg:font-[shabnamThin] max-lg:text-xl flex items-center justify-center gap-x-1">
          در حال حاضر نمونه کاری وجود ندارد
          <TfiFaceSad />
        </h2>
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

export default Voicing;
