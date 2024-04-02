import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon, getUsers } from "../../../../../features/dashboard/action";
import { toast } from "react-toastify";

function NewCoupon() {
  const users = useSelector((state) => state.dashboard.users);
  const loading = useSelector((state) => state.dashboard.couponLoading);
  const couponValueRef = useRef();
  const userIdRef = useRef();
  const couponTypeRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const formKeyNotSubmit = (e) => {
    if (
      e.key === "Enter" &&
      (e.target.type !== "textarea") | e.target.type.button
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const addCouponHandle = () => {
    let dataObj = {
      coupon_value: couponValueRef.current.value,
      coupon_type: couponTypeRef.current.value,
      user_id: JSON.parse(userIdRef.current.value),
    };

    switch (true) {
      case dataObj.coupon_value === "":
        toast.warn("مقدار کوپن را وارد کنید");
        break;
      case (dataObj.coupon_value > 100 && dataObj.coupon_type === "percent") ||
        dataObj.coupon_value === "0":
        toast.warn("مقدار کوپن صحیح نیست");
        break;
      case dataObj.user_id === null:
        toast.warn("کاربر را انتخاب کنید");
        break;
      default:
        sendCoupon(dataObj);
    }
  };

  const sendCoupon = (dataObj) => {
    dispatch(addCoupon(dataObj));
  };

  return (
    <div className="flex flex-col 2xl:w-[70%] w-full opacity-motion">
      <div className="w-full bg-[#C0D9DB] p-2">
        <h1 className="font-semibold text-lg text-stone-800">ایجاد</h1>
      </div>
      <form
        className="flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90"
        onKeyDown={(e) => formKeyNotSubmit(e)}
      >
        {/* coupon_value */}
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="coupon_value"
            className="font-semibold text-[#2e424a]"
          >
            مقدار کوپن
          </label>
          <input
            type="number"
            className="p-1  outline-[#0ab694] w-full"
            ref={couponValueRef}
            required={true}
            name="coupon_value"
          />
        </div>
        {/* user_id */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="supervisor" className="font-semibold text-[#2e424a]">
            سرپرست
          </label>
          <select id="supervisor" ref={userIdRef} className="py-1">
            <option value="null">{"..."}</option>
            {users.map((user) => (
              <option
                value={user.id}
              >{`${user.first_name} ${user.last_name}`}</option>
            ))}
          </select>
        </div>
        {/* coupon_type */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="coupon_type" className="font-semibold text-[#2e424a]">
            نوع کوپن
          </label>
          <select
            id="coupon_type"
            ref={couponTypeRef}
            className="py-1 font-[shabnam]"
          >
            <option value="percent" className="font-[shabnam]">
              درصد
            </option>
            <option value="rial" className="font-[shabnam]">
              ریال
            </option>
            <option value="dollar" className="font-[shabnam]">
              دلار
            </option>
          </select>
        </div>
        <button
          onClick={(e) => addCouponHandle()}
          type="button"
          className="w-[50%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-lg py-1 rounded-sm"
        >
          {loading ? (
            <img
              src="/img/Rolling-0.8s-200px.svg"
              alt="loading..."
              className="w-[30px] mx-auto"
            />
          ) : (
            <span>ثبت</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default NewCoupon;
