import { React, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../../features/authentication/action";
import HomeButton from "../HomeButton/HomeButton";
import { changeRedirect } from "../../../features/authentication/AuthenticationSlice";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const nameRef = useRef();
  const familyRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const codeRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.authentication.loading);
  const redirect = useSelector((state) => state.authentication.redirect);

  const registerHandler = (e) => {
    e.preventDefault();
    let first_name = nameRef.current.value;
    let last_name = familyRef.current.value;
    let username = usernameRef.current.value;
    let email = emailRef.current.value;
    let mobile = phoneRef.current.value;
    let password = passwordRef.current.value;
    let password_confirmation = passwordConfirmationRef.current.value;

    switch (true) {
      case first_name.length < 2 && first_name.length !== 0:
        toast.warn("!نام کوتاه است");
        break;
      case first_name.length === 0:
        toast.warning("نام را وارد کنید");
        break;
      case first_name.search(/\D+/g) === -1:
        toast.warn("نام قابل قبول نیست");
        break;
      case last_name.length < 3 && last_name.length !== 0:
        toast.warn("!نام خانوادگی کوتاه است");
        break;
      case last_name.length === 0:
        toast.warning("نام خانوادگی را وارد کنید");
        break;
      case last_name.search(/\D+/g) === -1:
        toast.warn("نام خانوادگی قابل قبول نیست");
        break;
      case username.length < 5 && username.length !== 0:
        toast.warn("!نام کاربری کوتاه است");
        break;
      case username.length === 0:
        toast.warning("نام کاربری را وارد کنید");
        break;
      case username.search(/\D+/g) === -1:
        toast.warn("نام کاربری قابل قبول نیست");
        break;
      case email.length === 0:
        toast.warn("ایمیل را وارد کنید");
        break;
      case email.length < 5:
        toast.warn("ایمیل کوتاه است");
        break;
      case !email.includes("@"):
        toast.warn("ایمیل صحیح نیست");
        break;
      case email.indexOf("@") < 1:
        toast.warn("ایمیل صحیح نیست");
        break;
      case mobile.length === 0:
        toast.warn("شماره تلفن را وارد کنید");
        break;
      case mobile.length < 11:
        toast.warn("شماره تلفن کوتاه است");
        break;
      case password.length === 0:
        toast.warn("رمز عبور را وارد کنید");
        break;
      case password.length < 8:
        toast.warn("رمز عبور کوتاه است");
        break;
      case password.search(/\D+/g) === -1 || password.search(/\d+/g) === -1:
        toast.warn("رمز عبور باید ترکیبی از اعداد و حروف باشد");
        break;
      case password_confirmation.length === 0:
        toast.warn("تکرار رمز عبور را وارد کنید");
        break;
      case password !== password_confirmation:
        toast.warn("تکرار رمز عبور تطابق ندارد");
        break;
      default:
        formSubmitter({
          first_name,
          last_name,
          username,
          mobile,
          email,
          password,
          password_confirmation,
        });
    }
  };

  // useEffect(() => {
  //   if (redirect) {
  //     setTimeout(() => {
  //       navigate("/confirmNumber");
  //     }, 1000);
  //     dispatch(changeRedirect());
  //   }
  // }, [redirect]);

  useEffect(() => {
      if (redirect) {
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        dispatch(changeRedirect());
      }
    }, [redirect]);
  const formSubmitter = (dataObj) => {
    dispatch(register(dataObj));
  };

  return (
    <>
      <Helmet>
        <title>نهال آی تی | ثبت نام</title>
      </Helmet>
      <div className="w-screen relative min-h-[100dvh] bg-gray-300 login-gradient flex justify-center font-[shabnamMedium] items-center">
        <HomeButton />
        <div className="container mx-auto max-w-[400px]">
          <div className="flex flex-col mx-3 my-5 overflow-hidden rounded-md shadow-[0px_2px_5px_1px_rgba(0,0,0,0.5)]">
            <div className="w-full bg-[#2b323b] text-white justify-center flex py-5 2xl:py-10">
              <div className="flex flex-col gap-1 2xl:gap-3 items-center">
                <div className="bg-[#464c56] rounded-[50%] w-[4rem] h-[4rem] 2xl:h-[6rem] 2xl:w-[6rem] 2xl:text-7xl 2xl:p-3 text-5xl flex justify-center items-center">
                  <BsPersonFill />
                </div>
                <span className="text-lg">عضویت</span>
              </div>
            </div>
            <form
              onSubmit={(e) => registerHandler(e)}
              className="bg-white flex flex-col 2xl:gap-10 gap-5 text-stone-700 py-5 px-5"
            >
              <div className="flex flex-col items-center gap-2 w-full text-sm">
                <label className="text-stone-600 w-full" htmlFor="name">
                  نام:
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  className="bg-gray-300 font-[shabnam] text-left outline-none border-none w-full p-2 text-[1.1rem]"
                  name="name"
                />
              </div>
              <div className="flex flex-col items-center gap-2 w-full text-sm">
                <label className="text-stone-600 w-full" htmlFor="family">
                  نام خانوادگی:
                </label>
                <input
                  ref={familyRef}
                  type="text"
                  className="bg-gray-300 font-[shabnam] text-left outline-none border-none w-full p-2 text-[1.1rem]"
                  name="family"
                />
              </div>
              <div className="flex flex-col items-center gap-2 w-full text-sm">
                <label className="text-stone-600 w-full" htmlFor="username">
                  نام کاربری:
                </label>
                <input
                  ref={usernameRef}
                  type="text"
                  className="bg-gray-300 font-[shabnam] text-left outline-none border-none w-full p-2 text-[1.1rem]"
                  name="username"
                />
              </div>
              <div className="flex flex-col items-center gap-2 w-full text-sm">
                <label className="text-stone-600 w-full" htmlFor="email">
                  ایمیل:
                </label>
                <input
                  ref={emailRef}
                  className="bg-gray-300 outline-none font-[shabnam] text-left border-none w-full p-2 text-[1.1rem]"
                  type="email"
                  name="email"
                  id=""
                />
              </div>
              <div className="flex flex-col items-center gap-2 w-full text-sm">
                <label className="text-stone-600 w-full" htmlFor="phone">
                  شماره موبایل:
                </label>
                <input
                  ref={phoneRef}
                  type="tel"
                  className="bg-gray-300 outline-none text-left font-[shabnam] border-none w-[100%] p-2 text-[1.1rem]"
                  name="phone"
                />
              </div>
              <div className="flex flex-col items-end gap-2 w-full text-sm">
                <label className="text-stone-600 w-full" htmlFor="password">
                  رمز عبور:
                </label>
                <div className="w-full flex bg-gray-300 items-center justify-end 2xl:justify-center gap-3 p-2 text-[1.1rem]">
                  {!showPassword ? (
                    <MdOutlineRemoveRedEye
                      onClick={() => setShowPassword(true)}
                    />
                  ) : (
                    <FaRegEyeSlash onClick={() => setShowPassword(false)} />
                  )}
                  <input
                    type={showPassword ? "text" : "password"}
                    minLength={"8"}
                    ref={passwordRef}
                    name="password"
                    id="password"
                    className="bg-transparent text-left outline-none text-[1.1rem] font-[shabnam] border-none 2xl:p-2 w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 w-full text-sm">
                <label
                  htmlFor="passwordConfermation"
                  className="text-stone-600 w-full"
                >
                  تکرار رمز عبور:
                </label>
                <div className="w-full flex items-center justify-end 2xl:justify-center gap-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    minLength={"8"}
                    ref={passwordConfirmationRef}
                    name="passwordConfermation"
                    id="passwordConfermation"
                    className="bg-gray-300 outline-none text-left font-[shabnam] border-none w-full p-2 text-[1.1rem]"
                  />
                </div>
              </div>
              <span className=" text-stone-500 text-xs text-justify">
                اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و
                پشتیبانی از تجربه شما در این وبسایت، و برای اهداف دیگری که در
                سیاست حفظ حریم خصوصی توضیح داده شده است.
              </span>
              <div className="w-full flex flex-col items-center gap-3 2xl:gap-5 my-3">
                <button
                  type="submit"
                  className="bg-green-600 flex items-center justify-center font-bold hover:bg-green-500 transition-all duration-300 text-white rounded-md p-2 w-full"
                >
                  {loading ? (
                    <img
                      src={"/img/Rolling-0.8s-200px.svg"}
                      alt="loading"
                      className="w-[1.5rem]"
                    />
                  ) : (
                    <span>عضویت</span>
                  )}
                </button>
                <Link
                  to={"/login"}
                  className="bg-blue-600  hover:bg-blue-500 transition-all duration-300 text-white rounded-md font-bold py-2 w-full flex justify-center"
                >
                  <button>ورود</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
