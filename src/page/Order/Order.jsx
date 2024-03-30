import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import Cookies from "js-cookie";
import { addSefaresh } from "../../features/dashboard/action";

const Order = () => {
  const loginStatus = useSelector((state) => state.authentication.loginStatus);
  const loading = useSelector((state) => state.dashboard.projectsLoading);
  const userInfo = loginStatus ? JSON.parse(Cookies.get("user")) : "";
  const dispatch = useDispatch();
  const titleRef = useRef();
  const describeRef = useRef();
  const formKeyNotSubmit = (e) => {
    if (
      e.key === "Enter" &&
      (e.target.type !== "textarea") | e.target.type.button
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  const handleChange = ()=>{
    const data = {
      title : titleRef.current.value,
      user_id :JSON.parse(Cookies.get("user")).id,
      category_id:"",
      supervisor_id:"",
      description:describeRef.current.value,
      price:"",
      confirm:"",
      progress:"0"
    }
    // console.log("your data :", data);
  }
  const formSubmitter = (e) => {
    e.preventDefault();
    const dataObj = {
      // title: titleRef.current.value,
      // description: describeRef.current.value,
      // user_id: userInfo?.id,
      title : titleRef.current.value,
      user_id :userInfo?.id,
      category_id:1,
      supervisor_id:6,
      description:describeRef.current.value,
      price:"0",
      confirm:false,
      progress:0,
      status:"3"
    };
    // console.log(dataObj);
    switch (true) {
      case !loginStatus:
        toast.warn("ابتدا باید وراد سایت شوید");
        break;
      case dataObj.title === "انتخاب کنید":
        toast.warn("عنوان را وارد کنید");
        break;
      case dataObj.title.length < 3:
        toast.warn("عنوان کوتاه است");
        break;
      case dataObj.description.length === 0:
        toast.warn("توضیح را وارد کنید");
        break;
      default:
        sendSefaresh(dataObj);
    }
  };

  const sendSefaresh = (dataObj) => {
    dispatch(addSefaresh(dataObj));
  };
  return (
    <main>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      <section className="bg-[#f5f5f9]">
        <div className="container mx-auto px-3">
          <h2 className="font-[shabnamBold] text-lg pt-5 tracking-tight">
            سفارش طراحی
          </h2>
          <div>
            <h3 className="font-[shabnamBold] tracking-tighter mt-4">
              راهنمای سفارش :
            </h3>
            <div className="mt-2 flex flex-col gap-y-3 max-sm:gap-y-0 tracking-tight">
              <p className="max-xl:leading-8">
                شما در ابتدا برای ثبت سفارش خود باید با مراجعه به بخش{" "}
                <Link
                  to="/"
                  className="font-[shabnamBold] hover:text-[#377AC3] underline"
                >
                  پشتیبانی
                </Link>{" "}
                یک تیکت با موضوع سفارش طراحی بدهید .
              </p>
              <p className="max-xl:leading-8">
                در بخش پشتیبانی با انتخاب دپارتمان{" "}
                <span className="font-[shabnamBold] underline">
                  ارتباط با نهال آی تی
                </span>{" "}
                و انتخاب نوع تیکت{" "}
                <span className="font-[shabnamBold] underline">
                  قیمت سفارش طراحی
                </span>{" "}
                سفارش خود را مطرح نمایید .
              </p>
              <p className="max-xl:leading-8">
                بعد با شرح کامل سفارش طراحی برایمان به طورکامل توضیح دهید .
              </p>
              <p className="max-xl:leading-8">
                حتی میتوانید با امکان ویس دادن در بخش پشتیبانی ، توضیحات خود را
                با ویس ارائه دهید .
              </p>
              <p className="max-xl:leading-8">
                بعد از تیکت ، همکاران ما در بخش پشتیبانی بهای انجام پروژه را
                برای شما اعلام خواهند کرد .
              </p>
              <p className="max-xl:leading-8">
                سپس در صورت نداشتن مشکلی اعلام کنید که پروژه اغاز شود .
              </p>
              <p className="max-xl:leading-8">
                سپس با مراجعه به این صفحه ثبت سفارش را به صورت رسمی انجام دهید .
              </p>
              <p className="max-xl:leading-8">
                لازم به ذکر است شما می توانید پرداخت بهای انجام پروژه را به صورت{" "}
                <span className="font-[shabnamBold] underline">قسطی</span> نیز
                پرداخت نمایید.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f9] pt-20 pb-10 relative z-50">
        <div className="w-full max-lg:px-20 max-md:px-10 max-sm:px-4 mx-auto flex flex-wrap justify-between max-2xl:justify-center">
          <form
            onSubmit={(e) => formKeyNotSubmit(e)}
            className="flex font-[shabnam] flex-col items-start justify-center gap-y-2"
          >
            <label htmlFor="select" className="font-[shabnamBold]">
              سفارش پروژه
            </label>
            <select
              id="select"
              ref={titleRef}
              onChange={handleChange}
              className="border border-solid border-[#ccc] w-[35rem] max-lg:w-[25rem] max-md:w-[20rem] max-sm:w-[15rem] outline-none rounded-full focus:placeholder:text-white py-3 px-2"
            >
              <option className="font-[shabnamBold]">انتخاب کنید</option>
              <option
                className="font-[shabnamBold]"
                value={"طراحی وبسایت اختصاصی"}
              >
                طراحی وبسایت اختصاصی
              </option>
              <option
                className="font-[shabnamBold]"
                value={"وبسایت و سئو وبسایت"}
              >
                وبسایت و سئو وبسایت
              </option>
              <option className="font-[shabnamBold]" value={"کسب و کار"}>
                کسب و کار
              </option>
              <option className="font-[shabnamBold]" value={"شبکه های اجتماعی"}>
                شبکه های اجتماعی
              </option>
              <option className="font-[shabnamBold]" value={"موشن گرافیک"}>
                موشن گرافیک
              </option>
              <option className="font-[shabnamBold]" value={"گرافیک"}>
                گرافیک
              </option>
              <option
                className="font-[shabnamBold]"
                value={"بیزینس پلن پروپوزال"}
              >
                بیزینس پلن پروپوزال
              </option>
              <option
                className="font-[shabnamBold]"
                value={"طراحی اپلیکیشن موبایل"}
              >
                طراحی اپلیکیشن موبایل
              </option>
              <option className="font-[shabnamBold]" value={"تدوین فیلم"}>
                تدوین فیلم
              </option>
              <option
                className="font-[shabnamBold]"
                value={"تدوین صدا و صداگذاری"}
              >
                تدوین صدا و صداگذاری
              </option>
            </select>
            <label htmlFor="area" className="font-[shabnamBold]">
              توضیحات
            </label>
            <textarea
              ref={describeRef}
              className="border border-solid border-[#ccc] w-[35rem] max-lg:w-[25rem] max-md:w-[20rem] max-sm:w-[15rem] outline-none rounded-3xl min-h-[50px] placeholder:px-1 focus:placeholder:text-white py-3 px-3"
              placeholder="توضیحات سفارش"
            />
            <button
              type="button"
              onClick={(e) => formSubmitter(e)}
              className="bg-[#57C053] hover:bg-[#5ecf5a] transition-all duration-200 text-white w-full rounded-full py-2 font-[shabnamBold]"
            >
              {loading ? (
                <img
                  src="/img/Rolling-0.8s-200px.svg"
                  alt="loading"
                  className="mx-auto w-[25px]"
                />
              ) : (
                <span className="font-[shabnamBold]">ثبت</span>
              )}
            </button>
          </form>
          <div>
            <img
              width="500"
              alt="order_Image"
              src="/img/WEB-corporate-design.png"
            />
          </div>
        </div>
      </section>
      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Order;
