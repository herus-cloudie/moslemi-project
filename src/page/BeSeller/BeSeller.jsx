import React from "react";
import { useSelector } from "react-redux";
import BeSellerComponent from "../../Components/BeSellerComponent/BeSellerComponent";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NotLogined from "../../Components/NotLogined/NotLogined";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

const BeSeller = () => {
  const loginStatus = useSelector(state => state.authentication.loginStatus);

  return (
    <div>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      {
      loginStatus
      ?
      <BeSellerComponent/>
      :
      <NotLogined/>
      }
      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BeSeller;
