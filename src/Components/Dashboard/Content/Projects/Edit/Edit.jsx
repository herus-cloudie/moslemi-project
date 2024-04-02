import moment from "moment-jalaali";
import React, { useEffect, useRef, useState } from "react";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  editProject,
  getUsers,
} from "../../../../../features/dashboard/action";
import { setScrollUp } from "../../../../../features/dashboard/dashboardSlice";
import CategoriesBox from "../../../../CategoriesBox/CategoriesBox";
import Editor from "../../../../Editor/Editor";
import Cookies from "js-cookie";

function Edit({ details, setShowDetails, users, categories }) {
  const [dropCate, setDropCate] = useState({
    status: false,
    value: categories.find((cate) => cate.id === details.category_id)?.title,
    id: categories.find((cate) => cate.id === details.category_id)?.id,
  });
  const [desc, setDesc] = useState(details?.description);
  const loading = useSelector((state) => state.dashboard.editProjectLoading);
  const dispatch = useDispatch();
  const titleRef = useRef();
  const supervisorRef = useRef();
  const priceRef = useRef();
  const statusRef = useRef();
  const confirmRef = useRef();
  const progressRef = useRef();
  

  console.log({details , users , categories})

  const usersall = useSelector((state) => state.dashboard.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const specifictUser = usersall.filter((item) => {
    return item.id == details?.user_id;
  });
  // console.log("spec user : ", specifictUser);
  const formKeyNotSubmit = (e) => {
    if (
      e.key === "Enter" &&
      (e.target.type !== "textarea") | e.target.type.button
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const formSubmitter = (e) => {
    e.preventDefault();
    let status;
    if (statusRef.current.value == 3) {
      status = 3;
    } else if (statusRef.current.value == 2) {
      status = 2;
    } else if (statusRef.current.value == 1) {
      status = 1;
    }

    const dataObj = {
      title: titleRef.current.value,
      category_id: JSON.parse(dropCate.id) || undefined,
      description: desc,
      price: priceRef.current.value.replaceAll(",", ""),
      confirm: JSON.parse(confirmRef.current.value),
      progress: JSON.parse(progressRef.current.value),
      supervisor_id: JSON.parse(supervisorRef.current.value),
      status: status,
      user_id: specifictUser[0].id,
    };
    // console.log("edited Data : ", dataObj);
    switch (true) {
      case dataObj.title.length === 0:
        toast.warn("عنوان را وارد کنید");
        break;
      case dataObj.title.length < 3:
        toast.warn("عنوان کوتاه است");
        break;
      case dataObj.description.length === 0:
        toast.warn("توضیح را وارد کنید");
        break;
      case dataObj.supervisor_id === null:
        toast.warn("سرپرست را مشخص کنید");
        break;
      case dataObj.price.length === 0:
        toast.warn("قیمت را وارد کنید");
        break;
      case dataObj.progress === "":
        toast.warn("درصد پیشرفت را وارد کنید");
        break;
      case dataObj.category_id === null:
        toast.warn("دسته بندی را انتخاب کنید");
        break;
      default:
        sendProduct(dataObj);
    }
  };

  const sendProduct = (dataObj) => {
    dispatch(editProject({ id: details.id, dataObj }));
  };

  return (
    <div className="flex flex-col w-full 2xl:w-[70%] opacity-motion">
      <div className="w-full bg-[#C0D9DB] p-2 flex justify-between items-center">
        <h1 className="font-semibold text-lg text-stone-800">جزئیات</h1>
        <MdCancel
          className="text-red-600 font-bold text-3xl transition-all hover:text-red-500"
          onClick={(e) => {
            setShowDetails({ status: false, value: "" });
            dispatch(setScrollUp());
          }}
        />
      </div>
      <form
        onSubmit={formSubmitter}
        className="flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90"
        onKeyDown={(e) => formKeyNotSubmit(e)}
      >
        {/* title */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="title" className="font-semibold text-[#2e424a]">
            عنوان
          </label>
          <input
            type="text"
            className="p-1  outline-[#0ab694] w-full"
            ref={titleRef}
            required={true}
            name="title"
            defaultValue={details.title}
          />
        </div>
        {/* supervisor */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="supervisor" className="font-semibold text-[#2e424a]">
            سرپرست
          </label>
          <select id="supervisor" ref={supervisorRef} className="py-1">
            <option
              value={
                users.find((user) => user.id === details?.supervisor_id)?.id
              }
            >{`${
              users.find((user) => user.id === details.supervisor_id)
                ?.first_name
            } ${
              users.find((user) => user.id === details.supervisor_id)?.last_name
            }`}</option>
            {users?.map((user) => (
              <option
                value={user.id}
              >{`${user?.first_name} ${user?.last_name}`}</option>
            ))}
          </select>
        </div>
        {/* describe */}
        <Editor setDesc={setDesc} desc={desc} />
        {/* categories */}
        <CategoriesBox dropCate={dropCate} setDropCate={setDropCate} />
        {/* status */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="status" className="font-semibold text-[#2e424a]">
            وضعیت
          </label>
          <select
            name="status"
            id=""
            ref={statusRef}
            className="p-1 font-[shabnambold] outline-[#0ab694] w-[50%] sm:w-[20%]"
          >
            {details?.status == 3 ? (
               <>
               <option value={3}>در حال انجام</option>
               <option value={1}>اتمام پروژه</option>
               <option value={2}>لغو شد</option>
             </>
           ) : details?.status === 2 ? (
             <>
               <option value={2}>لغو شد</option>
               <option value={3}>در حال انجام</option>
               <option value={1}>اتمام پروژه</option>
             </>
           ) : (
             <>
               <option value={1}>اتمام پروژه</option>
               <option value={3}>در حال انجام</option>
               <option value={2}>لغو شد</option>
             </>
            )}
          </select>
        </div>
        {/* confirm */}
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="confirm"
            className="font-semibold text-[#2e424a]"
          ></label>
          <select
            name="confirm"
            id=""
            ref={confirmRef}
            className="p-1 font-[shabnambold] outline-[#0ab694] w-[50%] sm:w-[20%]"
          >
            {details?.confirm === 0 ? (
              <>
                <option value={0}>عدم تایید</option>
                <option value={1}>تایید</option>
              </>
            ) : (
              <>
                <option value={1}>تایید</option>
                <option value={0}>عدم تایید</option>
              </>
            )}
          </select>
        </div>
        {/* progress */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="persent" className="font-semibold text-[#2e424a]">
            پیشرفت
          </label>
          <div className="flex items-center gap-1">
            <span>%</span>
            <input
              type="text"
              name="persent"
              id=""
              placeholder="درصد..."
              ref={progressRef}
              defaultValue={details?.progress}
              className="p-1 font-[shabnambold] outline-[#0ab694] w-[50%] sm:w-[20%]"
              onChange={(e) => {
                if (e.target.value.search(/\D+/g) !== -1) {
                  e.target.value = "";
                  toast.warn("مقدار قابل قبول نیست");
                } else if (e.target.value > 99) {
                  e.target.value = "";
                  toast.warn("مقدار قابل قبول نیست");
                }
              }}
            />
          </div>
        </div>
        {/* price */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="price" className="font-semibold text-[#2e424a]">
            مبلغ
          </label>
          <input
            type="number"
            name="price"
            id=""
            placeholder="به تومان..."
            ref={priceRef}
            defaultValue={details?.price}
            className="p-1 font-[shabnambold] outline-[#0ab694] w-[50%] sm:w-[20%]"
          />
        </div>
        {/* created */}
        <div className="w-full flex items-center gap-3">
          <label htmlFor="create" className="font-semibold text-[#2e424a]">
            تاریخ ایجاد:
          </label>
          <span className="font-[shabnamBold]">
            {moment(details?.created_at).format("jYYYY/jMM/jDD")}
          </span>
        </div>
        {/* updated */}
        <div className="w-full flex items-center gap-3">
          <label htmlFor="update" className="font-semibold text-[#2e424a]">
            تاریخ بروزرسانی:
          </label>
          <span className="font-[shabnamBold]">
            {moment(details?.updated_at).format("jYYYY/jMM/jDD")}
          </span>
        </div>
        {/* information user */}
        <div className="w-full flex items-center gap-3">
          <label htmlFor="update" className="font-semibold text-[#2e424a]">
            شماره درخواست کننده:
          </label>
          <span className="font-[shabnamBold]">{specifictUser[0]?.mobile}</span>
        </div>
        <div className="w-full flex items-center gap-3">
          <label htmlFor="update" className="font-semibold text-[#2e424a]">
            ایمیل درخواست کننده:
          </label>
          <span className="font-[shabnamBold]">{specifictUser[0]?.email}</span>
        </div>
        <div className="flex w-full flex-col items-center mt-5 gap-3">
          <div className="flex items-center 2xl:w-[30%] w-[80%] sm:w-[50%] justify-between">
            <button
              type="submit"
              className="w-[100%] bg-[#ddb730] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#fdc702] text-white font-bold text-lg py-1 rounded-sm"
            >
              {loading ? (
                <img
                  src="/img/Rolling-0.8s-200px.svg"
                  alt="loading..."
                  className="w-[30px] mx-auto"
                />
              ) : (
                "ویرایش"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Edit;
