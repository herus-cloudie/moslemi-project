import Cookies from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBasketsByUserId } from "../../features/cart/action";

const FixedIcon = () => {
  const baskets = useSelector(state => state.cart.baskets);
  const loginStatus = useSelector(state => state.authentication.loginStatus);
  const userId = loginStatus ? JSON.parse(Cookies.get("user"))?.id  : '';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasketsByUserId(userId));
  },[])

  return (
    <Link to="/cart" className="fixed z-50">
      <BiShoppingBag className="sm:w-10 sm:h-10 w-10 h-10 fixed bottom-10 right-5 bg-[#227e1f] hover:bg-[#2d9b29] transition-all duration-200 text-white p-2  rounded-full" />
      <span className="bottom-[4.3rem] right-[2.8rem] font-[shabnamBold] sm:w-7 w-5 h-5 p-2 sm:h-7 bg-[#035e0b] fixed z-[1000]  flex items-center justify-center text-white rounded-full" style={{border:"solid 1px #ffff"}}>
        {
          baskets?.length
        }
      </span>
    </Link>
  );
};

export default FixedIcon;
