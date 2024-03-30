import { React, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { HiOutlineLogin } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import loadingSvg from '../../../assets/img/Rolling-0.8s-200px.svg';
import { changeRedirect } from '../../../features/authentication/AuthenticationSlice';
import { login } from '../../../features/authentication/action';
import HomeButton from '../HomeButton/HomeButton';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegEyeSlash } from 'react-icons/fa';

function Login() {
  const [showPassword,setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(state => state.authentication.loading);
  const redirect = useSelector(state => state.authentication.redirect);
  const phoneRef = useRef();
  const passwordRef = useRef();


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
    e.preventDefault()
    let phone = phoneRef.current.value;
    let password = passwordRef.current.value;
    switch(true) {
      case phone.length === 0 : toast.warn("شماره تلفن را وارد کنید");
      break;
      case password.length === 0 : toast.warn('رمز عبور را وارد کنید');
      break;
      case  phone[0] !== '0' : toast.warn('شماره تلفن صحیح نیست');
      break;
      case  phone.length < 11 : toast.warn('شماره تلفن کوتاه است')
      break;
      case password.length < 8 : toast.warn('رمز عبور کوتاه است')
      break;
      default : loginFnc({password,mobile:phone})
    }};

    
  const loginFnc = (dataObj) => {
    dispatch(login(dataObj))
  }

  return (
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
                          <span className='text-lg'>ورود</span>
                  </div>
              </div>
              <form onSubmit={(e)=>loginHandler(e)} className='bg-white flex flex-col gap-5 2xl:gap-10 2xl:py-10 text-stone-700 py-3 px-5'>
                        <div className='flex flex-col items-center gap-2 w-full lg:items-center text-sm'>
                          <label className='text-stone-600 w-full' htmlFor="phone">شماره موبایل:</label>
                          <input ref={phoneRef} type="tel" className='bg-gray-300 font-[shabnam] text-left outline-none text-[1.1rem] border-none 2xl:p-2 w-full p-2' name='phone'/>
                        </div>
                        <div className='flex flex-col items-end gap-2 w-full text-sm'>
                          <label className='text-stone-600 w-full' htmlFor="password">گذرواژه:</label>
                          <div className='w-full flex bg-gray-300 items-center justify-end 2xl:justify-center gap-3 p-2'>
                          {
                            !showPassword
                            ?
                            <MdOutlineRemoveRedEye onClick={()=>setShowPassword(true)} className='text-lg'/>
                            :
                            <FaRegEyeSlash onClick={()=>setShowPassword(false)} className='text-lg'/>
                          }
                          <input type={showPassword?'text':'password'} minLength={'8'} ref={passwordRef} name="password" id="password" className='bg-transparent font-[shabnam] text-[1.1rem] text-left outline-none border-none 2xl:p-2 w-full'/>
                          </div>
                        </div>
                        <div className='flex items-center gap-2 2xl:gap-3'>
                          <input type="checkbox" name="remember" id="remember" className='font-[shabnam] scale-125 2xl:scale-150'/>
                          <label htmlFor="remember" className='text-sm font-[shabnamLight] text-stone-500'>مرا به خاطر بسپار</label>
                        </div>
                        <div className='w-full flex flex-col items-center text-sm justify-center gap-3'>
                    <button type="submit" className='bg-green-600 font-bold w-full items-center  2xl:py-2 hover:bg-green-500 text-center transition-all duration-300 text-white rounded-md py-2  flex justify-center'>
                      {
                        loading
                        ? <img src={loadingSvg} alt="loading" className='w-[1.5rem]'/>
                        : <span>ورود</span>
                      }
                    </button>
                          <Link to={'/register'} className='bg-blue-600 2xl:py-2 hover:bg-blue-500 text-center transition-all duration-300 text-white rounded-md py-2 w-full font-bold'><button type="button">عضویت</button></Link>
                        </div>
                        <Link to={"/forgetPassword"} className='w-full  text-center text-xs text-stone-400 cursor-pointer font-[shabnam] hover:text-blue-500 transition-all'>گذرواژه خود را فراموش کرده اید؟</Link>
                        {/* <span className='w-full text-center text-stone-500 font-bold'>یا</span> */}
                        {/* <div className='w-full flex flex-col items-center justify-center'>
                        <Link className='bg-[#54a733] w-full text-sm 2xl:py-2 hover:bg-[#70c64e] font-bold text-center transition-all duration-300 text-white rounded-md py-2' to={"/oneTimeCode"}><button type="button">ورود با کد یکبار مصرف</button></Link>
                        </div> */}
              </form>
            </div>
          </div>
      </div>
    </>
  )
}

export default Login;

