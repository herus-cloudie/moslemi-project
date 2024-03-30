import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaRegEyeSlash } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { forgetPassword, loginCode, verifyOneTimeCode, verifyPasswordCode } from '../../../features/authentication/action';
import { useDispatch, useSelector } from 'react-redux';
import { changeRedirect } from '../../../features/authentication/AuthenticationSlice';
import { useEffect, useRef } from "react";

import { toast } from "react-toastify";
import SendCodeTimer from '../ConfirmNumberPage/SendCodeTimer/SendCodeTimer';



function ForgetPassword() {
  const loading = useSelector(state => state.authentication.loading);
  const redirect = useSelector(state => state.authentication.redirect);
  const codeSent = useSelector(state => state.authentication.oneTimeCode);
  const verifyPassword = useSelector(state => state.authentication.verifyPasswordCode);
  const phoneRef = useRef();
  const codeRef = useRef();
  const [showPassword,setShowPassword] = useState(false);
  const newPasswordRef = useRef();
  const new_password_confirmationRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
    useEffect(() => {
        if(redirect)
        {
          setTimeout(()=>{
            navigate("/login")
          },1000)
          dispatch(changeRedirect())
        }
      },[redirect]);
      useEffect(() => {
       if(verifyPassword){
        let mobile = phoneRef.current.value;
        let new_password = newPasswordRef.current.value;
        let new_password_confirmation = new_password_confirmationRef.current.value;
        switch(true)
        {
          case mobile.length === 0 : toast.warn('شماره تلفن را وارد کنید');
          break;
          case mobile.length < 11 : toast.warn('شماره تلفن کوتاه است');
          break;
          case new_password.length === 0 : toast.warn('رمز عبور را وارد کنید');
          break;
          case new_password.length < 8 : toast.warn('رمز عبور کوتاه است');
          break;
          case new_password.search(/\D+/g) === -1 || new_password.search(/\d+/g) === -1 : toast.warn('رمز عبور باید ترکیبی از اعداد و حروف باشد')
          break; 
          case new_password_confirmation.length === 0 : toast.warn('تکرار رمز عبور را وارد کنید');
          break;
          case new_password !== new_password_confirmation : toast.warn('تکرار رمز عبور تطابق ندارد');
          break;
          default : formSubmitter({mobile,new_password,new_password_confirmation});
        }
       }
      },[verifyPassword]);

    const changePassword = (e) => {
        e.preventDefault()
        let mobile = phoneRef.current.value;
        let new_password = newPasswordRef.current.value;
        let new_password_confirmation = new_password_confirmationRef.current.value;
        if(codeSent && !verifyPassword){
          let code = codeRef.current.value;
          switch(true) {
            case code.length === 0 : toast.warn("کد  را وارد کنید");
            break;
            case  code.length < 5 : toast.warn('کد صحیح نیست')
            break;
            default : verifyCodeFnc({mobile , code})
      
          }
        }else if(!codeSent && !verifyPassword){
          switch(true) {
            case mobile.length === 0 : toast.warn("شماره تلفن را وارد کنید");
            break;
            case  mobile[0] !== '0' : toast.warn('شماره تلفن صحیح نیست');
            break;
            case  mobile.length < 11 : toast.warn('شماره تلفن کوتاه است')
            break;
            case new_password.length === 0 : toast.warn('رمز عبور را وارد کنید');
            break;
            case new_password.length < 8 : toast.warn('رمز عبور کوتاه است');
            break;
            case new_password.search(/\D+/g) === -1 || new_password.search(/\d+/g) === -1 : toast.warn('رمز عبور باید ترکیبی از اعداد و حروف باشد')
            break; 
            case new_password_confirmation.length === 0 : toast.warn('تکرار رمز عبور را وارد کنید');
            break;
            case new_password !== new_password_confirmation : toast.warn('تکرار رمز عبور تطابق ندارد');
            break;
            default : loginFnc({mobile})
      
          }
        }else
        if(verifyPassword){
        }
        
      };

      const formSubmitter = (dataObj) => {

        dispatch(forgetPassword(dataObj))
      }
      const verifyCodeFnc = (dataObj) => {
        dispatch(verifyPasswordCode(dataObj))
      }
      const loginFnc = (dataObj) => {
        dispatch(loginCode(dataObj))
      }
  return (
    <>
        <Helmet>
            <title>نهال آی تی | بازیابی رمز عبور</title>
        </Helmet>
        <div className='w-screen relative min-h-[100dvh] bg-gray-300 flex justify-center font-[shabnamMedium] items-center'>
            <div className='flex flex-col items-center absolute top-10 gap-3'>
                <span className='font-[shabnamBold] text-xl'>تغییر رمز عبور</span>
                <Link to={"/login"}><span className='font-[shabnam] text-red-700 text-lg underline cursor-pointer hover:text-red-600 transition-all'>بازگشت به صفحه ورود</span></Link>
            </div>
            <form onSubmit={(e)=>changePassword(e)} className='bg-white flex flex-col 2xl:gap-10 gap-5 text-stone-700 py-5 px-10 2xl:px-20'>
         
                          <div>
                          <div className='flex flex-col items-center gap-2 w-full lg:items-center text-sm'>
                          <label className='text-stone-600 w-full' htmlFor="phone">شماره موبایل:</label>
                          <input type="number" ref={phoneRef} className='bg-gray-300 font-[shabnam] text-left outline-none text-[1.1rem] border-none 2xl:p-2 w-full p-2' name='phone'/>
                      </div>
                      <div className='flex flex-col items-end gap-2 w-full text-sm'>
                                  <label className='text-stone-600 w-full' htmlFor="password">رمز عبور جدید:</label>
                                  <div className='w-full flex bg-gray-300 items-center justify-end 2xl:justify-center gap-3 p-2 text-[1.1rem]'>
                                  {
                                    !showPassword
                                    ?
                                    <MdOutlineRemoveRedEye onClick={()=>setShowPassword(true)}/>
                                    :
                                    <FaRegEyeSlash onClick={()=>setShowPassword(false)}/>
                                  }
                                  <input type={showPassword?'text':'password'} minLength={'8'} ref={newPasswordRef} name="password" id="password" className='bg-transparent text-left outline-none text-[1.1rem] font-[shabnam] border-none 2xl:p-2 w-full'/>
                                  </div>
                        </div>
                        <div className='flex flex-col items-end gap-2 w-full text-sm'>
                            <label htmlFor="passwordConfermation" className='text-stone-600 w-full'>تکرار رمز عبور:</label>
                            <div className='w-full flex items-center justify-end 2xl:justify-center gap-3'>
                            <input type={showPassword?'text':'password'} minLength={'8'} ref={new_password_confirmationRef} name="passwordConfermation" id="passwordConfermation" className='bg-gray-300 outline-none text-left font-[shabnam] border-none w-full p-2 text-[1.1rem]'/>
                            </div>
                        </div>
                        </div>
                        <div className='flex flex-col items-center gap-2 w-full lg:items-center text-sm' style={{ display: codeSent ? 'block' : 'none'}}>
                        <SendCodeTimer/>
                        <label className='text-stone-600 w-full' htmlFor="code">  کد </label>
                        <input ref={codeRef} type="number" className='bg-gray-300 font-[shabnam] text-left outline-none text-[1.1rem] border-none 2xl:p-2 w-full p-2' name='code'/>
                        </div>
                        
                
                <button type='submit' className='bg-blue-600  hover:bg-blue-500 transition-all duration-300 text-white rounded-md font-bold py-2 w-full flex justify-center'>
                    {
                        loading
                        ?
                        <img src={"/img/Rolling-0.8s-200px.svg"} alt="loading" className='w-[1.5rem]'/>
                        :
                        <span> {
                          codeSent ? "ثبت" 
                          :
                          "دریافت کد "
                          } </span>
                        
                    }
                </button>
            </form>
        </div>
    </>
  )
}

export default ForgetPassword;