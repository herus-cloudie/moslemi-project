import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DatePicker } from "zaman";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import { toast } from "react-toastify";
import { sendRecruitment } from "../../features/recruitment/action";
import Cookies from "js-cookie";
import NotLogined from "../../Components/NotLogined/NotLogined";

const Recruitment = () => {
  const loginStatus = useSelector((state) => state.authentication.loginStatus);
  const token = useSelector((state) => state.authentication.token);
  const tokens = useSelector((state) => state.recruitment.token);
  const loading = useSelector((state) => state.recruitment.loading);
  const userToken = useSelector((state) => state.authentication.token);
  const [birthDate, setBirthDate] = useState("");
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    const userInfo = JSON.parse(Cookies.get("user"));
    e.preventDefault();
    let dataObj = {};
    Array.from(e.target.elements).forEach((element) => {
      dataObj[element.id] = element.value;
    });
    delete dataObj[""];
    dataObj = {
      ...dataObj,
      birthday: birthDate,
      status: "waiting",
      user_id: userInfo.id,
    };
    if (dataObj.phone < 12) {
      toast.warn("شماره تلفن را درست وارد نشده است  ");
    } else if (dataObj.birthday.length < 1) {
      toast.warn("تاریخ تولد را وارد کنید");
    } else if (dataObj.code_melli < 11) {
      toast.warn("کد ملی را درست  وارد کنید");
    } else {
      dispatch(sendRecruitment(dataObj));
    }
    
  };
  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    const test = Cookies.get("user");
  }, []);
  return (
    <>
      <div>
        <header>
          <div className="max-lg:hidden">
            <Header />
          </div>
          <div className="lg:hidden">
            <ResponseHeader />
          </div>
        </header>
        <div className="bg-[#f5f5f9] pb-32">
          <div className="px-8 max-lg:px-16 max-md:px-5 max-sm:px-2 mx-auto pt-12 flex max-xl:flex-wrap max-lg:justify-center justify-between items-start gap-x-12">
            <div className="flex flex-col max-xl:mb-8">
              <h3 className="font-[shabnamBold]">شرایط استخدام :</h3>
              <p className="text-[1rem] leading-7 text-center sm:text-justify">
                اولین سایت فریلنسری به نام{" "}
                <span className="font-[shabnamBold]">نهال آی تی</span> که به
                صورت پکیجی می باشد و از تمام متخصصان در حوزه آی تی دعوت به عمل
                می آورد. خواهشمند است از تمام متخصصان در حوزه آی تی اگر نمونه
                کار در زمینه وب سایت،اپلیکیشن و فتوشاپ،بنر،پوستر و موشن گرافیک…
                دارند می توانند پروژه های خود را به صورت رایگان در سایت نهال آی
                تی دمو نمایند.
              </p>
              <p className="text-[1rem] leading-7 text-center sm:text-justify">
                به این صورت که شرح پروژه ی خود را به صورت داکیومنت،عکس و فیلم و
                خروجی کار خود را به صورت فیلم و کامل ارسال نمایند؛ در صورتی که
                محصول شما قابل اراِئه بود در سایت نهال آی تی بارگذاری می شود و
                بعد از اولین سفارش محصولتان با شما در تماس خواهیم بود.
              </p>
              <p className="text-[1rem] leading-7 text-center sm:text-justify">
                لازم به ذکر است که شما وظیفه دارید در یک سال اول محصول خود را
                پشتیبانی نمایید و هزینه ی پشتیبانی هم به شما داده خواهد شد؛
                همچنین بعد از سفارش محصول شما تمامی سورس کد یا فرمت های
                استانداردی کار شما در اختیار ما قرار خواهند گرفت.
              </p>
              <p className="text-[1rem] leading-7 text-center sm:text-justify">
                همچنین شما می توانید قیمت پیشنهادی محصول خود را و پشتیبانی تخصص
                خود را بصورت اشتراکی و تعداد بالا اعلام نمایید که بتوانیم با
                توضیحات و هزینه ی دلخواه شما در سایت نهال آی تی دمو نماییم.
              </p>
              <p className="text-[1rem] leading-7 text-center sm:text-justify">
                لازم به ذکر است که ممکن است محصولی که شما دارید را شخص دیگری
                سایت دمو کرده باشد و قیمت پیشنهادی آن شخص کمتر از شما باشد و ما
                محصول آن شخص را دمو می نماییم.
              </p>
              <p className="text-[1rem] leading-7 text-center sm:text-justify">
                همچنین شما می توانید بصورت (برنامه نویس، فتوشاپ و گرافیک کار یا
                موشن…) در سایت نهال آی تی ثبت نام نمایید و به شما پروژه می دهیم
                و به صورت پروژه ای فعالیت نمایید.
              </p>
              <p className="text-[1rem] leading-7 text-center sm:text-justify">
                لطفا ابتدا نمونه قرارداد ها را مشاهده نموده سپس در صورت تمایل
                فرم را پر نمایید .
              </p>
              <Link className="text-[1rem] leading-6 text-center sm:text-start mt-10 font-[shabnamBold] underline hover:text-[#0056b3] transition-all duration-200">
                نمونه قرارداد برنامه نویسی
              </Link>
              <Link className="text-[1rem] leading-6 text-center sm:text-start mt-7 font-[shabnamBold] underline hover:text-[#0056b3] transition-all duration-200">
                نمونه قرارداد گرافیک و موشن گرافیک و ..
              </Link>
            </div>
            <div>
              {loginStatus ? (
                <form
                  onSubmit={(e) => formSubmit(e)}
                  className="flex flex-col px-3 justify-center w-[35rem] max-xl:w-[25rem] max-lg:w-[20rem] gap-y-2"
                >
                  <label htmlFor="first_name" className="font-[shabnamBold]">
                    نام شما <span className="text-red-500">*</span>
                  </label>
                  <input
                    required={true}
                    id="first_name"
                    className="py-2 border border-solid border-[#c7c7c7] outline-none px-2"
                    type="text"
                  />
                  <label htmlFor="last_name" className="font-[shabnamBold]">
                    نام خانوادگی <span className="text-red-500">*</span>
                  </label>
                  <input
                    required={true}
                    id="last_name"
                    className="py-2 border border-solid border-[#c7c7c7] outline-none px-2"
                    type="text"
                  />
                  <label htmlFor="code_melli" className="font-[shabnamBold]">
                    کد ملی<span className="text-red-500">*</span>
                  </label>
                  <input
                    required={true}
                    id="code_melli"
                    className="py-2 border border-solid border-[#c7c7c7] outline-none px-2"
                    type="text"
                  />
                  <label htmlFor="email" className="font-[shabnamBold]">
                    ایمیل شما <span className="text-red-500">*</span>
                  </label>
                  <input
                    required={true}
                    id="email"
                    className="py-2 border border-solid border-[#c7c7c7] outline-none px-2"
                    type="email"
                  />
                  <label htmlFor="birthday" className="font-[shabnamBold]">
                    تاریخ تولد <span className="text-red-500">*</span>
                  </label>
                  <div className="zamanDatePicker">
                    <DatePicker
                      id="birthday"
                      inputAttributes={{ required: true }}
                      onChange={(e) =>
                        setBirthDate(e.value.toISOString().split("T")[0])
                      }
                    />
                  </div>
                  <label
                    htmlFor="martial_status"
                    className="font-[shabnamBold]"
                  >
                    وضعیت تاهل <span className="text-red-500">*</span>
                  </label>
                  <select
                    required={true}
                    name="martial_status"
                    className="py-2 border border-solid border-[#c7c7c7] outline-none px-2"
                    id="martial_status"
                  >
                    <option className="font-[shabnam]" value={0}>
                      مجرد
                    </option>
                    <option className="font-[shabnam]" value={1}>
                      متاهل
                    </option>
                  </select>
                  <label htmlFor="address" className="font-[shabnamBold]">
                    آدرس <span className="text-red-500">*</span>
                  </label>
                  <input
                    required={true}
                    placeholder=""
                    id="address"
                    className="py-2 border border-solid border-[#c7c7c7] outline-none px-2"
                    type="text"
                  />
                  <label htmlFor="phone" className="font-[shabnamBold]">
                    شماره تلفن <span className="text-red-500">*</span>
                  </label>
                  <input
                    required={true}
                    id="phone"
                    placeholder="09123456789"
                    className="py-2 border border-solid border-[#c7c7c7] outline-none px-2"
                    type="number"
                  />
                  <div className="mt-7 px-1">
                    <label htmlFor="activtiy" className="font-[shabnamBold]">
                      فعالیت ها <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="activity"
                      required={true}
                      cols={50}
                      rows={10}
                      placeholder="سایر فعالیت ها..."
                      className="m-3 placeholder:text-sm outline-none p-3 text-sm font-[shabnam]"
                    />
                  </div>
                  <div className="mt-10 px-3 flex flex-col gap-y-5">
                    <label
                      className="font-[shabnamBold]"
                      htmlFor="eduction_status"
                    >
                      وضعیت تحصیل <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="eduction_status"
                      type="text"
                      className="py-2 border border-solid border-[#c7c7c7] outline-none px-2"
                      required={true}
                    />
                    <label
                      htmlFor="ability_description"
                      className="font-[shabnamBold]"
                    >
                      شرح توانایی شما (اختیاری)
                    </label>
                    <textarea
                      id="ability_description"
                      className="min-h-[7rem] text-sm outline-none font-[shabnamMedium] p-2"
                    ></textarea>
                    <label className="font-[shabnamBold]" htmlFor="card_number">
                      شماره کارت<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="card_number"
                      type="text"
                      className="py-2 border border-solid border-[#c7c7c7] outline-none px-2"
                      required={true}
                    />
                    <label
                      htmlFor="shaba_number"
                      className="font-[shabnamBold]"
                    >
                      شماره شبای کارت بانکی{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      required={true}
                      id="shaba_number"
                      type="text"
                      placeholder="شماره شبا بانکی خود را بدون IR وارد کنید"
                      className="py-2 border border-solid font-[shabnamMedium] border-[#cecece] outline-none px-2"
                    />
                    <button
                      type="submit"
                      className="bg-[#38BDF8] w-full self-start px-4 py-1 border border-solid text-white  border-[#cccccc] hover:bg-[#53ccff] transition-all duration-200"
                    >
                      {loading ? (
                        <img
                          src="/img/Rolling-0.8s-200px.svg"
                          alt="loading"
                          className="w-[20px] mx-auto"
                        />
                      ) : (
                        <span  className="font-[shabnamBold]">ثبت</span>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <NotLogined />
              )}
            </div>
          </div>
        </div>
        <div>
          <FixedIcon />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Recruitment;
