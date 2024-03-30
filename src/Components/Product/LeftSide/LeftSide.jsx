import moment from 'moment-jalaali';
import React from 'react';
// import Icons
import { BsArrowBarUp, BsBagFill } from 'react-icons/bs';
import { FaEye, FaStar } from 'react-icons/fa';
import { MdDateRange, MdModeComment, MdOutlineComputer, MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

function LeftSide({ goalProduct }) {
  return (
    <div className='flex gap-10 flex-col mt-10 w-full lg:w-[30%] 2xl:w-[25%] sm:px-12 px-5'>
    <div className='w-full flex flex-col gap-3 2xl:gap-5 items-center'>
      <img src={"/img/product/license.svg"} alt="gear" className='w-[4rem]'/>
      <span className='text-base font-[shabnambold] font-bold mb-1 w-full text-center text-stone-600'>قوانین استفاده از محصول</span>
      <p className='text-justify leading-6  2xl:leading-9 text-[0.9rem] text-stone-500'>در این سایت امکان تعریف نقش کاربران، خدمات، مقالات، تعرفه های انجام خدمات، دسته بندی ها، درخواست پشتیبانی ارائه مشاوره رایگان وجود دارد. همچنین امکان نمایش نظرات کاربران و تماس با افراد پشتیبان وجود دارد. در ادمین امکان ویرایش، حذف همه قسمت های مختلف وجود دارد. این سایت مناسب شرکت هایی می باشد که در […]</p>
    </div>
    <div className='w-full flex flex-col gap-3 2xl:gap-5 items-center'>
      <img src={"/img/product/info.svg"} alt="wonder" className='w-[4rem]'/>
      <span className='text-base font-[shabnambold] font-bold mb-1 w-full text-center text-stone-600'>قوانین استفاده از محصول</span>
      <ul className='flex flex-col gap-2 2xl:gap-0 list-disc'>
        <li><span className='text-[0.8rem]  font-bold'>بسته نصبی + راهنمای نصب فارسی</span></li>
        <li><span className='text-[0.8rem]  font-bold'>درگاه های پرداخت واسط و مستقیم</span></li>
        <li><span className='text-[0.8rem]  font-bold'>پشتیبانی 24 ساعته محصولات</span></li>
        <li><span className='text-[0.8rem]  font-bold'>محصول اورجینال با آپدیت رایگان</span></li>
        <li><span className='text-[0.8rem]  font-bold'>بازگشت وجه بدون قید وشرط</span></li>
      </ul>
    </div>
    <div className='w-full flex flex-col items-center'>
        <div className='flex flex-col w-full gap-1 2xl:gap-5'>
          <Link className='w-full'>
        <button className='text-white font-bold my-1 2xl:py-2 rounded-sm gap-2 text-sm transition-all hover:bg-lime-500 py-2 w-full bg-lime-600 border-b-2 border-lime-800 flex justify-center items-center'>
          <BsBagFill/>
          <span>پیش نمایش محصول</span>
        </button>
        </Link>
        </div>
        <div className='flex w-full flex-col gap-5 p-3 my-3 text-sm font-bold text-stone-700' style={{border:'2px dotted #BABCBE'}}>
          <div className='flex items-center w-full justify-between'>
            <div className='flex gap-1 items-center'>
              <MdDateRange/>
              <span>تاریخ:</span>
            </div>
            <span>{moment(goalProduct?.created_at).format("jYYYY/jMM/jDD")}</span>
          </div>
          <div className='flex items-center w-full justify-between'>
            <div className='flex gap-1 items-center'>
              <FaEye/>
              <span>بازدید:</span>
            </div>
            <span>...</span>
          </div>
          <div className='flex items-center w-full justify-between'>
            <div className='flex gap-1 items-center'>
              <FaStar/>
              <span>میانگین امتیاز:</span>
            </div>
            <span>...</span>
          </div>
          <div className='flex items-center w-full justify-between'>
            <div className='flex gap-1 items-center'>
              <MdOutlineComputer/>
              <span>نسخه محصول:</span>
            </div>
            <span>...</span>
          </div>
          <div className='flex items-center w-full justify-between'>
            <div className='flex gap-1 items-center'>
              <BsArrowBarUp/>
              <span>بروزرسانی:</span>
            </div>
            <span>{moment(goalProduct?.updated_at).format("jYYYY/jMM/jDD")}</span>
          </div>
                        <div className='flex items-center w-full justify-between'>
                        <div className='flex gap-1 items-center'>
                          <MdShoppingCart/>
                          <span> کل فروش:</span>
                        </div>
                        <span>...</span>
                      </div>
                      <div className='flex items-center w-full justify-between'>
                      <div className='flex gap-1 items-center'>
                        <MdModeComment/>
                        <span>تعداد دیدگاه:</span>
                      </div>
                      <span>...</span>
                    </div>
        </div>
        <div className='flex flex-col items-center gap-3 my-5 w-full 2xl:my-20'>
          <span className='text-sm  text-center text-stone-600 font-bold'>پرداخت امن با کلیه کارت های عضو شتاب</span>
          <img src={"/img/product/shopping-carts.png"} alt="cards" className='w-full 2xl:w-[80%]'/>
        </div>
      {/* <div className='flex flex-col items-start w-full my-10'>
        <div className='w-full py-3 2xl:py-1 pr-2 font-bold text-sm font-[shabnambold] text-stone-700' style={{borderRight:'solid 5px #03A9F4'}}>
          <span>برچسب ها:</span>
        </div>
        <ul className='flex flex-col gap-1 font-bold  2xl:pr-10 text-sm pr-5 mt-2'>
          {
            goalProduct.tags.map(tag => (
              <Link><span className='text-stone-600 cursor-default hover:text-sky-600 transition-all'>{tag}</span></Link>
            ))
          }
        </ul>
      </div> */}
    </div>
  </div>
  )
}

export default LeftSide;