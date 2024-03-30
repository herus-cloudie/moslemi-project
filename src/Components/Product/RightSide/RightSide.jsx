import React from 'react';
// import Icons
import HTMLRenderer from 'react-html-renderer';
import { BsPinterest, BsTags, BsTelegram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductGallerySlider from '../../ProductGallerySlider/ProductGallerySlider';
import ProductComments from '../../ProductComments/ProductComments';

function RightSide({ goalProduct , tags }) {

  return (
    <div className='flex flex-col w-full lg:w-[70%] p-0 sm:pr-5'>
    <div className='flex flex-col w-full'>
        <div  className='flex flex-col mt-10 items-start'>
          <h1 className='text-lg font-[shabnamBold] text-stone-700 mb-5'>{goalProduct?.title}</h1>
          <img src={goalProduct?.image} alt={goalProduct?.title} className='w-full'/>
                <div className='flex flex-col my-5 gap-5 w-full'>
                    <span className='text-[1.2rem] font-bold text-stone-700 m-0 p-0 w-full text-start'>توضیحات</span>
                    <div className='text-[1rem]  text-justify mb-5 font-[shabnamLight] leading-8 text-stone-600'>
                     <HTMLRenderer html={goalProduct?.description}/>
                    </div>
                    <ProductGallerySlider Id={goalProduct?.id}/>
                    <div className='flex flex-col items-start mt-10 gap-5 w-full'>
                    <BsTags className='scale-150 tagsIcon text-gray-66 mr-5 sm:m-0'/>
                    <div className='flex items-center gap-5'>
                        {
                            tags.map(tag => (
                                <Link to={'/'}>
                                <strong className='text-sm p-1 bg-slate-400 text-slate-800 rounded-md'>{tag.title}</strong>
                           </Link>
                            ))
                        }
                    </div>
                    <div className='flex flex-col sm:flex-row text-white w-full'>
                    <Link to='https://twitter.com/intent/tweet' className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-3 px-5 gap-5 '>
                        <BsTwitter className='scale-150'/>
                        <span className='text-xs text-center  sm:text-sm  font-[vasirBold]'>اشتراک در توییتر</span> 
                    </Link>
                    <Link className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-dark-blue py-3 px-5 gap-5'  to="https://www.facebook.com/sharer/sharer.php">
                        <FaFacebookF className='scale-150'/>
                    <span className='text-xs text-center  sm:text-sm font-[vasirBold]'> اشتراک در فیسبوک</span>
                    </Link>
                    <Link to="https://telegram.me/share/url" className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-3 px-5 gap-5 '>
                        <BsTelegram className='scale-150'/>
                    <span className='text-xs text-center  sm:text-sm font-[vasirBold]'> اشتراک در تلگرام</span>
                    </Link>
                    <Link to="https://pinterest.com/pin/create/button" className='flex flex-col justify-center 2xl:py-5 items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-soft-red py-3 px-5 gap-5 '>
                        <BsPinterest className='scale-150'/>
                        <span  className='text-xs text-center sm:text-sm font-[vasirBold]'>اشتراک در پینترست</span>
                    </Link>
                    </div>
                    </div>
                        {/* junction-path */}
                    <div className='flex flex-col sm:flex-row w-full sm:w-auto  items-center justify-between gap-y-3 py-8 px-4 my-10 text-white bg-light-blue'>
                        <span className='text-xs sm:text-sm flex items-center text-center sm:text-start font-[shabnam]'>راه آسان تری برای ارتباط با کاربرانمان پیدا کرده ایم :)</span>
                        <button className='border-2  2xl:py-1 2xl:px-4 border-white px-2 py-1  btn-telegram transition-all'><Link to='https://telegram.me/nahal_it'>عضویت در کانال </Link></button>
                    </div>
                        {/* comment-ruls */}
                      <div className='mt-20 text-gray-66 relative'>
                            <span className='font-[shabnambold] px-5 text-[1.2rem] text-stone-700 w-fit'>قوانین ارسال دیگاه در سایت</span>
                            <ul className='mt-5 2xl:mt-5 pr-5 text-sm text-gray-88 2xl:gap-3 gap-5 flex flex-col font-bold rulls px-5 justify-center'>
                            <li className='font-[shabnamLight]'>چنانچه دیدگاهی توهین آمیز باشد تایید نخواهد شد</li>
                            <li className='font-[shabnamLight]'>چنانچه دیدگاه شما جنبه ی تبلیغاتی داشته باشد تایید نخواهد شد</li>
                            <li className='font-[shabnamLight]'>چنانچه از لینک سایر وبسایت ها و یا وبسایت خود در دیدگاه استفاده کرده باشید تایید نخواهد شد</li>
                            <li className='font-[shabnamLight]'>چنانچه در دیدگاه خود از شماره تماس، ایمیل و آیدی تلگرام استفاده کرده باشید تایید نخواهد شد</li>
                            <li className='font-[shabnamLight]'>چنانچه دیدگاهی بی ارتباط با موضوع آموزش مطرح شود تایید نخواهد شد</li>
                            </ul>
                            <img src={"/img/2900821_25540.png"} alt="comment"  className='absolute w-60 opacity-20'/>
                      </div>
                      <ProductComments/>
              </div>
        </div>
    </div>
    </div>
  )
}

export default RightSide;