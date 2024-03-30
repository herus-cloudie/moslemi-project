import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { changeRedirect } from '../../../features/authentication/AuthenticationSlice';
import { sendCode, verifyCode } from '../../../features/authentication/action';
import SendCodeTimer from './SendCodeTimer/SendCodeTimer';
import { useEffect } from 'react';

function ConfirmNumberPage() {
  const loading = useSelector(state => state.authentication.sendCodeLoading);
  const codeSent = useSelector(state => state.authentication.codeSent);
  const redirect = useSelector(state => state.authentication.redirect);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const codeRef = useRef();
  console.log("code:",codeSent);
  const codeVerifyFnc = () => {
    let code = codeRef.current.value;
    if(code === ''){
      toast.warn("کد را وارد کنید")
    } else {
      dispatch(verifyCode({code}))
    }
  }
  useEffect(() => {
      if(redirect)
      {
        setTimeout(()=>{
          navigate("/")
        },1000)
        dispatch(changeRedirect())
      }
  },[redirect]);

  return (
    <>
      <Helmet>
        <title>نهال آی تی | تایید  موبایل</title>
      </Helmet>
      <div className='w-screen relative min-h-[100dvh] bg-gray-300 login-gradient flex flex-col justify-center font-[shabnamMedium] items-center'>
        <div className='flex flex-col items-center absolute top-10 gap-3'>
          <span className='font-[shabnamBold] text-xl'>ارسال کد تایید به موبایل از طریق SMS</span>
          <Link to={"/"}><span className='font-[shabnam] text-red-700 text-lg underline cursor-pointer hover:text-red-600 transition-all'>فعلا نه, برو به صفحه اصلی</span></Link>
        </div>
        <form className='bg-white flex flex-col 2xl:gap-10 gap-5 text-stone-700 py-5 px-10 2xl:px-20' onSubmit={e => e.preventDefault()}>
            <div className='w-full flex flex-col items-center gap-3 2xl:gap-5 my-3'>
              {
                codeSent
                ?
                <>
                  <div className='flex flex-col items-center gap-2 w-full text-sm'>
                  <SendCodeTimer/>
                    <label className='text-stone-600 w-full font-[shabnam]' htmlFor="code">کد تایید:</label>
                    <input type="number" ref={codeRef} className='bg-gray-300 font-[shabnam] text-left outline-none border-none w-full p-2 text-[1.1rem]' name='code'/>
                  </div>
                  <button type='button' className='bg-blue-600  hover:bg-blue-500 transition-all duration-300 text-white rounded-md font-bold py-2 w-full flex justify-center' onClick={codeVerifyFnc}>
                    {
                      loading
                      ?  <img src={"/img/Rolling-0.8s-200px.svg"} alt="loading" className='w-[22px] mx-auto'/>
                      :  <span>تایید کد</span>
                    }
                  </button>
                </>
                :
                <button type="button" className='bg-green-600  font-bold hover:bg-green-500 transition-all duration-300 text-white rounded-md py-2 px-20 w-full' onClick={()=>dispatch(sendCode())}>
                  {
                    loading
                    ?  <img src={"/img/Rolling-0.8s-200px.svg"} alt="loading" className='w-[22px] mx-auto'/>
                    :  <span>دریافت کد</span>
                  }
                </button>
              }
            </div>
        </form>
      </div>
    </>
  )
}

export default ConfirmNumberPage;