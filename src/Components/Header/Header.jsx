import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getBaskets, getBasketsByUserId } from "../../features/cart/action";
import { getUserRole } from "../../features/dashboard/action";
import HeaderAdminProfileIcon from "../HeaderAdminProfileIcon/HeaderAdminProfileIcon";
import HeaderNavButtons from "../HeaderNavButtons/HeaderNavButtons";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import HeaderProductsLogo from "../HeaderProductsLogo/HeaderProductsLogo";
import HeaderWeAddress from "../HeaderWeAddress/HeaderWeAddress";
import ScrollTop from "../ScrollTop/ScrollTop";
import HeaderFavButtons from "../HeaderFavButtons/HeaderFavButtons";

const Header = () => {
  const loginStatus = useSelector((state) => state.authentication.loginStatus);
  const baskets = useSelector((state) => state.cart.baskets);
  const userPermissions = useSelector(
    (state) => state.dashboard.userPermissions
  );
  const success = useSelector((state) => state.cart.success);
  const roleId = loginStatus ? JSON.parse(Cookies.get("user"))?.role_id : "";
  
  const userId = loginStatus ? JSON.parse(Cookies.get("user"))?.id : "";
  const dispatch = useDispatch();
  const location = useLocation();
  const urlPath = location.pathname;

  useEffect(() => {
    if (loginStatus && JSON.parse(Cookies.get("user"))) {
      dispatch(getUserRole(roleId));
    }
  }, []);

  useEffect(() => {
    if (loginStatus) {
      dispatch(getBasketsByUserId(userId));
    }
  }, [success]);

  return (
    <>
      <div className="bg-[#07B235] h-1" id="UP"></div>
      <ScrollTop />
      <div className="min-w-full">
        <HeaderWeAddress />
        <HeaderProductsLogo />
        <div
          className="flex justify-center mt-3 items-center font-[shabnamMedium] py-5"
          style={{
            borderBottom: "1px #D6D3D1 solid",
            borderTop: "1px #D6D3D1 solid",
          }}
        >
          <div className="text-[#7c7c7c] text-sm flex items-center justify-center w-full gap-5 2xl:justify-center 2xl:gap-x-[8rem] px-3">
            <HeaderAdminProfileIcon roleId={roleId} loginStatus={loginStatus} />
            <HeaderNavbar />
            <HeaderNavButtons loginStatus={loginStatus} roleId={roleId} />
            <HeaderFavButtons urlPath={urlPath} baskets={baskets} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
