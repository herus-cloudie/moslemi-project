import React from 'react';
import { Helmet } from 'react-helmet';
import AboutCart from '../../Components/AboutCart/AboutCart';
import FixedIcon from '../../Components/FixedIcon/FixedIcon';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader';
import alexa_logo from '../../assets/img/members/Screen-Shot-2563-04-27-at-21.23.27.png';
import member_1 from '../../assets/img/members/photo5630286681.jpg';
import member_2 from '../../assets/img/members/photo5630286814-1.jpg';
import nahalIT_logo from '../../assets/img/members/photo_2022-09-21_19-42-20-removebg-preview.png';
import aReza_img from '../../assets/img/members/امیر-رضا-1.jpg';
import aHosesein_img from '../../assets/img/members/امیرحسین-1-1.jpg';
import hReza_img from '../../assets/img/members/زنگویی-1.jpg';
import saeed_img from '../../assets/img/members/سعید.jpg';
import shahrad_img from '../../assets/img/members/شهراد.jpg';
import mAmir_img from '../../assets/img/members/محمد-1.jpg';
import melica_img from '../../assets/img/members/ملیکا.jpg';
import mahdi_img from '../../assets/img/members/مهدی-1.jpg';
import nima_img from '../../assets/img/members/نیما-1.jpg';

function About_us() {
  return (
    <div className='w-full'>
      <Helmet>
        <title>نهال آی تی |  درباره ما</title>
      </Helmet>
      <header>
        <div className="max-lg:hidden">
        <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader/>
        </div>
      </header>
      <main>
        <hr className='h-[5px] w-full lg:h-0 bg-[#1FC49A]'/>
        <div className='w-full h-[30rem] 2xl:h-[50rem] relative  bg-[#00202B] lg:bg-[url("http://nahalit.com/wp-content/uploads/2020/06/beanner-dokan.png")] bg-cover bg-right flex justify-center lg:justify-end items-center'>
          <div className='flex flex-col my-16 relative z-20 w-[35rem] lg:ml-5 p-3 2xl:ml-[8rem] gap-4'>
            <h1 className=' text-white text-2xl font-[IranSans-b]'>درباره نهال آی تی</h1>
            <p className='font-[vasirLight] text-white text-justify leading-6 text-[0.9rem]'>تیم نهال آی تی در شهریور ۱۴۰۱ با همراهی جمعی از بهترین های ایران تشکیل شد تا هر گونه خدماتی در زمینه IT را به همه ی هموطن هایمان در سراسر ایران ارائه دهیم . سعی تیم ما بر این است که بتوانیم کیفیت خود را هر روز بهتر نماییم . اگر نظر و پیشنهادی دارید از قسمت ارتباط با ما یا قسمت های پشتیبانی حتما مطرح کنید .</p>
          </div>
        </div>
        <div className='container mx-auto p-5 lg:p-20 items-center lg:items-start flex flex-col'>
          <div className='flex w-fit flex-col  text-lg gap-1'>
            <span className='font-[IranSans-b] text-stone-700'>تیم نهال آی تی</span>
            <span className='h-[3px] w-full bg-green-500'></span>
            <span className='font-[vasirLight] text-stone-500'>Nahal IT Team</span>
          </div>
          <div className='w-full font-[vasirLight] text-stone-700 text-lg mt-3 leading-9 text-justify'>
            <p className='text-justify'>نهال آیتی به عنوان جامع ترین پایگاه ارائه دهنده خدمات دنیای دیجیتال و آی تی ، به منظور ارائه محصولات با کیفیت ، پشتیبانی قدرتمند و اشتغال زایی در تمام نقاط ایران با شعار تولید ، پشتیبانی و مانع زدائی در دنیای دیجیتال در سال 1401 شروع به کار کرد .</p>
            <p className='text-justify'>تیم نهال آیتی با تکیه بر اشتغال زایی و جذب نیروی کار جوان در راستای توسعه پیشرفت و شکوفایی کشور فعالیت خود را آغاز کرده و از اقصی نقاط کشور اقدام به جذب نیروی جوان ، با انگیزه و متخصص مینماید .</p>
            <p className='text-justify'>ما در نهال آیتی به منظور تسهیل دسترسی به غنی ترین منابع دنیای فناوری اطلاعات در حوزه هایی نظیر قالب سایت ( فروشگاهی ، شخصی ، شرکتی ، خبری و چندمنظوره و غیره ) ، اپلیکیشن موبایل ( مناسب سیستم عامل های اندروید و IOS ) ، گرافیک (طراحی انیمیشن ، عکاسی ، بنر و تیزرتبلیغاتی ، طراحی لوگو و کارت ویزیت و غیره ) ، خدمات شبکه های اجتماعی (افزایش لایک و فالوور و نظرات ، ربات ، خدمات لینکدین ، بازاریابی هوشمند و غیره ) ، خدمات وب ( سئو وبسایت ، تولید محتوا و بازدید سایت و غیره ) به صورت پکیج و یا جداگانه آماده ارائه خدمات به مشتریان عزیز می باشد .</p>
            <p className='text-justify'>صاحبان مشاغل در زمینه های مختلف با استفاده از خدمات و ابزار های اراِئه شده توسط تیم نهال آیتی میتوانند کیفیت و بهره وری کسب و کار خود را ارتقاء دهند و همچنین با پشتیبانی کامل تیم ما همراه باشند .</p>
            <p className='text-justify'>تیم نهال آیتی اولین پلتفرم فناوری اطلاعات و آی تی به صورت اقساطی در ایران می باشد.</p>
          </div>
        </div>
        <div className='px-5'>
          <div className='flex flex-col w-full justify-center gap-1 items-center py-8'>
            <span className='font-[shabnamBold] text-xl text-stone-700'>اعضای رسمی نهال آیتی</span>
            <span className='text-stone-500 tracking-wider'>Official members of Nahal IT</span>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-3 2xl:gap-10 justify-center'>
            <img className='w-[550px]' style={{border:'3px solid green'}} src={member_1} alt="member" />
            <img className='w-[550px]' style={{border:'3px solid green'}} src={member_2} alt="member" />
          </div>
          <div className='flex container mx-auto flex-wrap pt-20 items-center gap-x-5 justify-center gap-y-10'>
            <AboutCart img={shahrad_img} userName={"شهراد ساعدی"} role={"توسعه دهنده فرانت اند"}/>
            <AboutCart img={nima_img} userName={"نیما خواجه پور"} role={"سرپرست تیم اندروید"}/>
            <AboutCart img={melica_img} userName={"ملیکا ملماسی"} role={"توسعه دهنده اندروید"}/>
            <AboutCart img={aHosesein_img} userName={"امیرحسین امین نگارش"} role={"توسعه دهنده فرانت اند"}/>
            <AboutCart img={hReza_img} userName={"حمیدرضا زنگویی"} role={"برنامه نویس React"}/>
            <AboutCart img={mAmir_img} userName={"محمد امیر احمدی"} role={"توسعه دهنده فرانت اند"}/>
            <AboutCart img={saeed_img} userName={"سعید محمدی"} role={"توسعه دهنده فرانت اند"}/>
            <AboutCart img={mahdi_img} userName={"مهدی میرزا خانی"} role={"توسعه دهنده فرانت اند"}/>
            <AboutCart img={aReza_img} userName={"امیر رضا شکاری"} role={"توسعه دهنده فرانت اند"}/>
          </div>
        </div>
        <div className='bg-[#95989A] text-white px-5 py-10 lg:p-16 mt-5 flex flex-col'>
          <div className='flex flex-col gap-2 items-center'>
            <h1 className='text-2xl font-[IranSans-b]'>حوزه نهال آیتی</h1>
            <span className='font-[vasir] text-center'>برترین مارکت ایران در حوزه IT</span>
            <p className='text-sm tracking-tighter text-center'>تیم نهال آیتی با تکیه بر اشتغال زایی و جذب نیروی کار جوان در راستای توسعه پیشرفت و شکوفایی کشور فعالیت خود را آغاز کرده و از اقصی نقاط کشور اقدام به جذب نیروی جوان ، با انگیزه و متخصص مینماید .</p>
          </div>
          <div className='flex mt-20 gap-10 justify-center items-center flex-col lg:flex-row'>
            <div className='w-[13rem] h-[15rem] text-center items-center text-sm font-[vasir] flex flex-col'>
              <div className='w-[10rem] h-[33.333%]'>
                <img className='w-full' src={alexa_logo} alt="Alexa_logo" />
              </div>
              <span className='h-[33.333%] flex items-center justify-center leading-6' style={{borderTop:'1px white solid'}}>رتبه زیر 100 الکسا در میان وب سایت های ایرانی</span>
              <span className='h-[33.333%] flex items-center justify-center leading-6' style={{borderTop:'1px white solid'}}>بیش از 1800 محصول ثبت شده در طول زمان فعالیت</span>
            </div>
            <img src={nahalIT_logo} className='w-[200px] h-[120px]' alt="nahalIT_logo" />
            <div className='w-[13rem] h-[15rem] text-center text-sm font-[vasir] flex flex-col'>
              <span className='h-[33.333%]'>900 توسعه دهنده فعال و توانمند ایرانی</span>
              <span className='h-[33.333%] flex items-center justify-center leading-6' style={{borderTop:'1px white solid'}}>بالاترین کیفیت محصولات ارائه شده بین مارکت های  ایرانی</span>
              <span className='h-[33.333%] flex items-center justify-center leading-6'  style={{borderTop:'1px white solid'}}>بیش از 70 هزار کاربر عضو کاربر و مشتری وفادار به مجموعه قدرتمند مارکت پلیس ژاکت</span>
            </div>
          </div>
        </div>
        <div className='py-16 bg-cover bg-center bg-[url("http://nahalit.com/wp-content/uploads/2020/04/startnow-bg.png")]'>
          <div className='mx-auto gap-5 flex flex-col items-center'>
              <h1 className='text-xl font-[IranSans-b] text-center px-1 text-stone-500'>برای شروع و راه اندازی کسب و کار دیجیتال خود با نهال آیتی شروع کنید ...</h1>
              <p className='max-w-[29rem] text-sm text-center'>پشتیبانان ما در هر لحظه از شبانه روز آماده ارائه مشاوره جهت بهبود کسب و کار شما  می باشند . در نهال آیتی به راحتی و آسودگی شما اهمیت میدهیم .</p>
              <button onClick={()=>window.scrollTo(0,0)} className='bg-[#57C053] hover:bg-[#59da55] transition-all text-sm text-white font-[vasir] py-2 px-3 rounded-sm'>هم اکنون شروع کنید!</button>
          </div>
        </div>
        <div>
          <FixedIcon />
        </div>
      </main>
      <footer className="w-full">
          <Footer />
      </footer>
    </div>
  )
}

export default About_us;