import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addProject, getUsers } from "../../../../../features/dashboard/action";
import CategoriesBox from "../../../../CategoriesBox/CategoriesBox";
import Editor from "../../../../Editor/Editor";
import Cookies from "js-cookie";

function New() {
  const [dropCate, setDropCate] = useState({
    status: false,
    value: null,
    id: "",
  });
  const users = useSelector((state) => state.dashboard.users);
  const loading = useSelector((state) => state.dashboard.projectsLoading);
  const [desc, setDesc] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const mobile = window.innerWidth < 425 ? true : false;
  const dispatch = useDispatch();
  const titleRef = useRef();
  const supervisorRef = useRef();
  const statusRef = useRef();
  const progressRef = useRef();
  const confirmRef = useRef();

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
  const formSubmitter = (e) => {
    e.preventDefault();
    const dataObj = {
      title: titleRef.current.value,
      category_id: dropCate.id,
      description: desc,
      supervisor_id: supervisorRef.current.value,
      price: priceValue,
      status: statusRef.current.value,
      progress: progressRef.current.value,
      confirm: confirmRef.current.value,
      user_id : JSON.parse(Cookies.get('user')).id || undefined
    };

  // const formSubmitter = (e) => {
  //   e.preventDefault();
  //   const dataObj = {
  //     category_id: 1,
  //     confirm:0,
  //     description:"تستی",
  //     price: 2500000,
  //     progress:0,
  //     status:3,
  //     supervisor_id:6,
  //     title:"طراحی اپلیکیشن موبایل",
  //     user_id:18
  //   };

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
        sendProject(dataObj);
    }
  };

  const sendProject = (dataObj) => {
    console.log(dataObj)
    dispatch(addProject(dataObj));
  };

  function separateByCommas(number) {
    let numberString = String(number);

    let separatedNumber = "";
    let counter = 0;

    for (let i = numberString.length - 1; i >= 0; i--) {
      if (counter === 3) {
        separatedNumber = "," + separatedNumber;
        counter = 0;
      }
      separatedNumber = numberString.charAt(i) + separatedNumber;
      counter++;
    }

    setPriceValue(separatedNumber);
  }

  return (
    <div className="flex flex-col w-full 2xl:w-[70%] opacity-motion">
      <div className="w-full bg-[#C0D9DB] p-2">
        <h1 className="font-semibold text-lg text-stone-800">افزودن</h1>
      </div>
      <form
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
          />
        </div>
        {/* describe */}
        <Editor setDesc={setDesc} />
        {/* supervisor */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="supervisor" className="font-semibold text-[#2e424a]">
            سرپرست
          </label>
          <select id="supervisor" ref={supervisorRef} className="py-1">
            <option value="null">{"..."}</option>
            {users.map((user) => (
              <option
                value={user.id}
              >{`${user.first_name} ${user.last_name}`}</option>
            ))}
          </select>
        </div>
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
            <option value={3}>در حال انجام</option>
            <option value={1}>کامل شده</option>
            <option value={2}>لغو شده</option>
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
            <option value={1}>تایید</option>
            <option value={0}>عدم تایید</option>
          </select>
        </div>
        {/* progress */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="persent" className="font-semibold text-[#2e424a]">
            پیشرفت
          </label>
          <input
            type="text"
            name="persent"
            id=""
            placeholder="درصد..."
            ref={progressRef}
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
        {/* price */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="price" className="font-semibold text-[#2e424a]">
            مبلغ
          </label>
          <input
            type="text"
            name="price"
            id=""
            placeholder="به تومان..."
            value={priceValue}
            className="p-1 font-[shabnambold] outline-[#0ab694] w-[50%] sm:w-[20%]"
            onChange={(e) => {
              !(e.target.value.length < 1)
                ? separateByCommas(parseInt(e.target.value.replaceAll(",", "")))
                : separateByCommas(0);
            }}
          />
        </div>
        <div className="flex w-full flex-col items-center mt-5 gap-3">
          <div className="flex items-center w-[80%] sm:w-[50%] 2xl:w-[30%] justify-between">
            <button
              type="button"
              onClick={(e) => formSubmitter(e)}
              className="w-[100%] bg-[#07C7A3] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#0eecc3] text-white font-bold text-xl py-1 rounded-sm"
            >
              {loading ? (
                <img
                  src="/img/Rolling-0.8s-200px.svg"
                  alt="loading..."
                  className="w-[30px] mx-auto"
                />
              ) : (
                "ثبت"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default New;
