import React from 'react';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader';
import Header from '../../Components/Header/Header';
import { Helmet } from 'react-helmet';
import FixedIcon from '../../Components/FixedIcon/FixedIcon';
import Footer from '../../Components/Footer/Footer';

function Privacy() {
  return (
    <div className='w-screen'>
     <Helmet>
        <title>نهال آی تی |  سیاست حریم خصوصی</title>
     </Helmet>
     <header>
        <div className="max-lg:hidden">
          <Header/>
        </div>
        <div className="lg:hidden">
          <ResponseHeader/>
        </div>
      </header>
      <main className='flex flex-col container mx-auto gap-8 text-[1.05rem] leading-8 text-justify'>
        <img src="/img/Privacy.png" alt="privacy" className='w-full'/>
        <div className='mx-3'>
            <p>بر طبق توافقنامه های موجود در این سایت، نهال آی تی متعهد می شود که به حریم خصوصی کاربران خود احترام بگذارد. در این صفحه تعهدات و سیاست های سایت در این زمینه شرح داده می شود.</p>
            <p>ما هرگز بدون اجازه از خودتان، دست به افشای اطلاعات خصوصی و فردی شما نخواهیم زد، مگر اینکه به موجب قانون توجیهی برای این کار وجود داشته باشد.</p>
        </div>
        <div className='mx-3'>
            <h2 className='my-3 text-stone-700'>ما چه اطلاعاتی را جمع آوری می نماییم؟</h2>
            <p>زمانیکه شما هر سایتی را مشاهده می کنید، اطلاعات معینی از شما به طور اتوماتیک جمع آوری می شود. ما نیز به ازای هر بیننده سایت نهال آی تی، بصورت اتوماتیک اطلاعاتی درباره کامپیوتر فرد و بازدید او از سایت جمع آوری کرده و ذخیره می نماییم:</p>
            <p>اطلاعاتی درباره آدرس IP کامپیوتر شما ( آدرسIP عددی است که بطور اتوماتیک زمانی که شما وارد شبکه وب می شوید به کامپیوتر شما تخصیص داده می شود. )</p>
            <p>آدرس اینترنتی سایتی که از طریق آن وارد سایت ما شده اید. ( برای مثال www.google.com )</p>
            <p>تاریخ و زمانی که شما وارد سایت ما می شوید و مدت زمانی که در سایت هستید.</p>
            <p>نام و نسخه سیستم عامل و browser کامپیوتر شما. به عنوان مثال Windows 8/Chrome ( این اطلاعات به طور اتوماتیک بوسیله کامپیوتر شما منتقل می شود. )</p>
            <p>صفحاتی از سایت که شما آنها را مشاهده می کنید.</p>
        </div>
        <div className='mx-3'>
            <h2 className='my-3 text-stone-700'>تعهدات کارفرما در نهال آی تی</h2>
            <p>ترکیب رنگ و نوع رنگ و اسم برند با مشتری می باشد و در این زمینه ما توانایی مشاوره به شما را خواهیم داشت.</p>
            <p>تمام بخش ها بصورت دمو از طریق یکی از شبکه های اجتماعی (ترجیحا ایتا و تلگرام) به کارفرما ارسال می شود و کارفرما میتواند یکبار اصلاح بر اساس موارد قید شده در قرارداد انجام دهد و پس از تایید دمو، کار ادامه پیدا می کند. هر وب سایت هم بصورت دو بخش ارسال می شود.</p>
            <p>شرکت نرم افزاری بهینه سازان سرزمین هوشمند (وب سایت نهال آی تی) هیچ مسئولیتی در قبال <span className='font-[shabnamBold] text-[1.1rem]'>امنیت وب سایت شما</span> ندارد.</p>
            <p> پس از نمایش دادن دموی بخشی از سایت به کارفرما از طریق شبکه های اجتماعی ، کارفرما تنها یک روز فرصت برای تایید بخش مربوطه را دارد. در صورت تاخیر بیش از یک روز ، شرکت این را به منزله <span className='font-[shabnamBold] text-[1.1rem]'>تایید کارفرما</span> در نظر میگیرد و پروژه را ادامه می دهد .</p>
            <p>فقط تحویل پروژه یکبار انجام می شود.</p>
            <p>آموزش نحوه قراردادن محصول به شما داده خواهد شد.</p>
            <p className='font-[shabnamBold] text-[1.1rem]'>بعد از تحویل پروژه به کارفرما، تنها میتواند 7 روز پروژه را تست و تایید نماید.</p>
            <p>همچنین زیر وب سایت شما ، اسم وب سایت نهال آی تی به عنوان طراح وب سایت، به صورت همیشگی درج خواهد شد.</p>
            <p>همچنین شرکت هیچ مسئولیتی در قبال <span className='font-[shabnamBold] text-[1.1rem]'>تهیه درگاه پرداخت و کسب مجوز اینماد</span> ندارد و تمامی اینها باید توسط <span className='font-[shabnamBold] text-[1.1rem]'>کارفرما</span> انجام شود. در این زمینه ، شرکت توانایی مشاوره به شما را خواهد داشت.</p>
            <p className='font-[shabnamBold] text-[1.18rem]'>در بقیه خدمات نهال آی تی ، همه توافقات به صورت قراردادی و تلفنی تعیین خواهد شد.</p>
        </div>
        <span className='md:mx-auto my-10 text-[1.3rem] text-center md:text-[1.8rem] font-[IranSans-b] text-stone-700 mx-3'>هر آنچه از حوزه آی تی می خواهید ، از نهال آی تی بخواهید.</span>
      </main>
      <div>
          <FixedIcon />
      </div>
      <footer className="mt-5 w-full">
          <Footer />
      </footer>
    </div>
  )
}

export default Privacy;