import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import HomeButton from "../../HomeButton/HomeButton";
import { HiOutlineLogin } from "react-icons/hi";
import loadingSvg from '../../../../assets/img/Rolling-0.8s-200px.svg';
import { loginCode , verifyOneTimeCode } from '../../../../features/authentication/action';
import { toast } from "react-toastify";
import { changeRedirect } from "../../../../features/authentication/AuthenticationSlice";
import SendCodeTimer from "../../ConfirmNumberPage/SendCodeTimer/SendCodeTimer";
import { Link, useNavigate } from 'react-router-dom';

export default function OneTimeCode(){
    const loading = useSelector(state => state.authentication.loading);
    const redirect = useSelector(state => state.authentication.redirect);
    const codeSent = useSelector(state => state.authentication.oneTimeCode);
    const phoneRef = useRef();
    const codeRef = useRef();
    const navigate = useNavigate();
    

    const dispatch = useDispatch();

    useEffect(() => {
        if(redirect)
        {
          setTimeout(()=>{
            navigate("/")
          },1000)
          dispatch(changeRedirect())
        }
  },[redirect]);

  const loginHandler = (e) => {
    e.preventDefault();
    let phone = phoneRef.current.value;
    console.log(codeSent);
    console.log(oneTimeCode);
    if(oneTimeCode){
    let code = codeRef.current.value;
    switch(true) {
      case code.length === 0 : toast.warn("کد  را وارد کنید");
      break;
      case  code.length < 5 : toast.warn('کد صحیح نیست')
      break;
      default : verifyCodeFnc({mobile:phone , code:code})

    }
    }else{
      switch(true) {
        case phone.length === 0 : toast.warn("شماره تلفن را وارد کنید");
        break;
        case  phone[0] !== '0' : toast.warn('شماره تلفن صحیح نیست');
        break;
        case  phone.length < 11 : toast.warn('شماره تلفن کوتاه است')
        break;
        default : loginFnc({mobile:phone})

      }
    }
  };

  const loginFnc = (dataObj) => {
    dispatch(loginCode(dataObj))
  }

  const verifyCodeFnc = (dataObj) => {
    dispatch(verifyOneTimeCode(dataObj))
  }
    return(
        <>
      <Helmet>
        <title>نهال آی تی | ورود</title>
      </Helmet>
      <div className='w-screen relative min-h-[100dvh] bg-gray-300 flex justify-center font-[shabnamMedium] items-center'>
          <HomeButton/>
          <div className='container mx-auto max-w-[400px]'>
            <div className='flex mx-3 flex-col  2xl:my-10 my-5  overflow-hidden rounded-md shadow-[0px_5px_14px_5px_rgba(0,0,0,0.05)]'>
              <div className='w-full bg-[#2b323b] text-white justify-center flex py-5 2xl:py-10'>
                  <div className='flex flex-col gap-1 items-center'>
                          <div className='bg-[#464c56] rounded-[50%] 2xl:h-[6rem] 2xl:w-[6rem] w-[4rem] 2xl:p-3 h-[4rem] 2xl:text-7xl text-5xl flex justify-center items-center'>
                            <HiOutlineLogin/>
                          </div>
                          <span className='text-lg'>ورود با کد یکبار مصرف</span>
                  </div>
              </div>
              <form onSubmit={(e)=>loginHandler(e)} className='bg-white flex flex-col gap-5 2xl:gap-10 2xl:py-10 text-stone-700 py-3 px-5'>
                        <div className='flex flex-col items-center gap-2 w-full lg:items-center text-sm'>
                          <label className='text-stone-600 w-full' htmlFor="phone">شماره موبایل:</label>
                          <input ref={phoneRef} type="tel" className='bg-gray-300 font-[shabnam] text-left outline-none text-[1.1rem] border-none 2xl:p-2 w-full p-2' name='phone'/>
                        </div>
                        { oneTimeCode &&
                            
                            <div className='flex flex-col items-center gap-2 w-full lg:items-center text-sm'>
                            <SendCodeTimer />
                            <label className='text-stone-600 w-full' htmlFor="code">  کد </label>
                            <input ref={codeRef} type="number" className='bg-gray-300 font-[shabnam] text-left outline-none text-[1.1rem] border-none 2xl:p-2 w-full p-2' name='code'/>
                            </div>
                        }
                       
                        <div className='w-full flex flex-col items-center text-sm justify-center gap-3'>
                    <button type="submit" className='bg-green-600 font-bold w-full items-center  2xl:py-2 hover:bg-green-500 text-center transition-all duration-300 text-white rounded-md py-2  flex justify-center'>
                      {
                        loading
                        ? <img src={loadingSvg} alt="loading" className='w-[1.5rem]'/>
                        : <span > { oneTimeCode ? "ورود" :
                         " دریافت کد "
                          } </span>
                      }
                    </button>       
                        </div>
              </form>
            </div>
          </div>
      </div>
    </>
    )
}