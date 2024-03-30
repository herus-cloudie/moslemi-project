import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Main from "../../Components/Cart/Main/Main";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NotLogined from "../../Components/NotLogined/NotLogined";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

const Cart = () => {
  const loginStatus = useSelector(state => state.authentication.loginStatus);
  const location = useLocation();
  const urlPath = location.pathname;

  return (
    <>
      <Helmet>
        <title>نهال آی تی | سبد خرید</title>
      </Helmet>
      <div className="w-full font-[shabnamThin]">
        {
          urlPath === '/userPage/cart'
          ?
          <></>
          :
          <header>
            <div className="max-lg:hidden">
            <Header />
            </div>
            <div className="lg:hidden">
              <ResponseHeader/>
            </div>
          </header>
        }
        {
          loginStatus
          ?
          <Main/>
          :
          <NotLogined/>
        }
        {
          urlPath === '/userPage/cart'
          ?
          <></>
          :
          <footer className="mt-5 w-full">
            <Footer />
          </footer>
        }
      </div>
    </>
  );
};

export default Cart;