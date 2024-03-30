import Cookies from "js-cookie";
import React from "react";
import { BsPatchExclamation } from "react-icons/bs";
import { LuArrowBigLeftDash } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function ConfirmNumberAlert() {
  const loginStatus = useSelector((state) => state.authentication.loginStatus);
  const verifyPassword = useSelector(
    (state) => state.authentication.verifyPasswordCode
  );
  // const mobileVerify = !verifyPassword && Cookies.get('user') ? JSON.parse(Cookies.get('user'))?.mobile_verify : null;
  // const mobileVerify =
  //   !verifyPassword && Cookies.get("user") !== undefined
  //     ? JSON.parse(Cookies.get("user"))?.mobile_verify
  //     : null;
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <>
      {/* {loginStatus &&
      pathName !== "/confirmNumber" &&
      pathName !== "/login" &&
      pathName !== "/register" &&
      pathName !== "/dashboard" &&
      mobileVerify !== 1 ? (
        <div className="w-full items-center flex-wrap gap-y-3 justify-between bg-[#ECEE81] px-10 py-3 flex">
          <div className="flex items-center text-yellow-900 gap-1">
            <BsPatchExclamation className="text-2xl" />
            <span className="m-0 font-[vasir] text-[0.9rem] tracking-wider">
              شماره تلفن شما هنوز تایید نشده است.
            </span>
          </div>
          <Link
            to={"confirmNumber"}
            className="flex items-center transition-all cursor-pointer text-yellow-950 gap-1 hover:text-yellow-900"
          >
            <span className="m-0 font-[vasirBold] text-[0.9rem] tracking-wider decoration-solid underline decoration-yellow-950">
              تایید شماره تلفن
            </span>
            <LuArrowBigLeftDash className="scale-125" />
          </Link>
        </div>
      ) : (
        <></>
      )} */}
    </>
  );
}

export default ConfirmNumberAlert;
