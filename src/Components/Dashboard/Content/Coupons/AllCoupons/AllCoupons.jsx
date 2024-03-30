import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoupon } from "../../../../../features/dashboard/action";

function AllCoupons({ currentItems, users, setShowDetails, coupons }) {
  const [deleteIcon, setDeleteIcon] = useState("");
  const loading = useSelector((state) => state.dashboard.couponLoading);
  const dispatch = useDispatch();

  const deleteCouponHandle = (id) => {
    dispatch(deleteCoupon(id));
  };

  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <span className="w-full text-white font-bold mx-5 md:m-0">
        {" "}
        کوپن ها ( {coupons?.length} )
      </span>
      <div className="flex flex-wrap items-center gap-5 justify-center md:justify-center">
        {currentItems?.map((coupon) => (
          <div
            key={coupon?.id}
            className="bg-white hover:scale-105 transition-all rounded-sm py-3 px-10 cursor-pointer relative"
            onClick={() => setShowDetails(coupon)}
            onMouseEnter={() => setDeleteIcon(coupon?.id)}
            onMouseLeave={() => setDeleteIcon("")}
          >
            <div className="flex items-center gap-1">
              <span className="font-[shabnamBold]">کاربر:</span>
              <div className="flex items-center gap-1">
                <span className="font-[shabnam]">
                  {users.find((user) => user.id === coupon.user_id)?.first_name}
                </span>
                <span className="font-[shabnam]">
                  {users.find((user) => user.id === coupon.user_id)?.last_name}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <span className="font-[shabnamBold]">مقدار:</span>
              <div className="flex items-center">
                <span className="font-[shabnamBold]">
                  {coupon.coupon_value}
                </span>
                <span className="font-[shabnamBold]">
                  {coupon.coupon_type === "percent"
                    ? "%"
                    : coupon.coupon_type === "dollar"
                    ? "$"
                    : "ریال"}
                </span>
              </div>
            </div>
            <span
              className={
                deleteIcon === coupon?.id ? "absolute top-1 left-1" : "hidden"
              }
              onClick={() => deleteCouponHandle(coupon?.id)}
            >
              &#10060;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCoupons;
