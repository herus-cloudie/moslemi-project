import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import EndBox1 from "../../Components/EndBox1/EndBox1";
import EndBox2 from "../../Components/EndBox2/EndBox2";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

function SMotionGraphic() {
  return (
    <main>
        <Helmet>
            <title>نهال آی تی | خدمات موشن گرافیک</title>
        </Helmet>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      <div className='motionGraphic-content Services-style flex flex-col items-center gap-10 mb-10'>
         <img src={"/img/MotionGraphic/خدمات-موشن-گرافی-1024x576.jpg"} alt="header" className='w-full sm:h-auto'/>
        <div className='flex flex-col gap-6 px-1'>
            <div>
                <motion.h1 whileInView={{y:[-50,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='text-green-137 text-center 2xl:text-center'>موشن گرافیک یا موشن گرافی چیست؟</motion.h1>
                <motion.p  whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>متحرک سازی تصاویر و صداگذاری روی آنها را موشن گرافیک می گویند. به عبارت دیگر وکتورهای تصاویر انیمیشنی را با نرم افزارهای گرافیکی براساس سناریو خاص، متحرک سازی انجام می دهند و سپس صداگذاری توسط گوینده روی موشن گرافیک انجام می شود تا مفاهیم بصورت کامل منتقل شود.</motion.p>
            </div>
            <div>
                <motion.h2  whileInView={{y:[-50,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='text-green-137 text-center py-3'>خدمات موشن گرافیک:</motion.h2>
                <motion.p  whileInView={{y:[-50,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>تیم نهال آی تیبا به کارگیری بیش از 9000 گرافیست از سراسر کشور، برگزاری آزمون های آنلاین گرافیک و موشن گرافیک برای اولین بار در ایران، دیتا ماینینگ و تیم سازی در حوزه گرافیک و مدیریتی ویژه، خدمات موشن گرافیک را با کمترین هزینه ممکن برایتان مهیا نموده است.</motion.p>
            </div>
            <div>
                <motion.h3  whileInView={{y:[-50,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='text-green-137 text-center py-3'>انواع موشن گرافیک و کاربردی آنها</motion.h3>
                <motion.p  whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>موشن‌ها از قاعده‌ای کلی در متحرک‌سازی تصویر و صداگذاری استفاده می‌کنند، اما انواع موشن گرافیک هم وجود دارد که دست شما را برای سفارش موشن گرافیک موردنظرتان باز می‌گذارد. از رایج‌ترین انواع موشن گرافیک از منظر ایده‌پردازی و اجرا می‌توان به این موارد اشاره کرد:</motion.p>
                <motion.ul  whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:2}} viewport={{once:true}} className='text-gray-5E5E flex flex-col gap-2'>
                    <li>•  موشن‌گرافیک برندینگ</li>
                    <li>•  موشن‌گرافیک توضیحی</li>
                    <li>•  موشن‌گرافیک آموزشی</li>
                    <li>•  موشن‌گرافیک واقعی</li>
                    <li>•  استاپ‌موشن</li>
                    <li>•  اینفوموشن</li>
                </motion.ul>
            </div>
            <div>
                <motion.h4 whileInView={{y:[-50,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}  className='text-green-137 py-3'>کاربردهای موشن گرافیک:</motion.h4>
                <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}>وقتی بخواهید کلیپی بسازید مطمئنا به دوربین، نورپردازی، صدابرداری و بازیگر سپس تدوین ویدئو نیاز دارید. ولی در موشن گرافیک تقریباً فقط تدوین و صدا گذاری دارید و بقیه نقش ها را کامپیوتر ایفا می کند. بنابراین منطقی هست که هزینه موشن گرافیک پایین تر باشد. از طرفی موشن گرافیک بسیار جذابتر می باشد. از کاربردهای موشن گرافیک می توان ساخت تیزر تبلیغاتی، انیمیشن های دوبعدی، معرفی محصول یا خدمات، ایده های تبلیغاتی و برنامه های آموزشی و… را نام برد.</motion.p>
            </div>
            <div>
                <motion.h5 whileInView={{y:[-50,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='text-green-137 py-3'>انواع موشن گرافیک</motion.h5>
            </div>
            <div className='flex flex-col-reverse items-center sm:flex-row gap-20'>
                <div>
                    <motion.h6 whileInView={{y:[-100,0],opacity:[0,1]}} transition={{duration:2}} viewport={{once:true}} className='text-green-137 py-3'>1. موشن گرافیک:</motion.h6>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>عمده ترین موشن گرافیک هایی که می بینید و استفاده می شود این دسته می باشد. در این نوع موشن گرافیک ها متحرک سازی تصاویر و وکتور انجام می شود و سپس صداگذاری انجام می گیرد. مطمئنا چون صدا دارد جذابیت بیشتری برای مخاطب دارد و انتقال مفاهیم بهتر انجام می شود.</motion.p>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>هرچند اصطلاح موشن گرافیک برای همه گرافیک‌های متحرک شامل تصاویر و ویدئو به کار می‌رود، اما به طور خاص در موشن گرافیک ، به جای تصاویر واقعی، از وکتور یا نقاشی‌هایی استفاده می‌شود که به کمک نرم‌افزارهایی مانند ایلاستریتور تهیه و متحرک سازی می‌شوند. همان‌طور که پیش‌تر اشاره شد این تصاویر متحرک یک سناریو ویژه دارند و پیام کلی آن توسط یک گوینده بر روی تصاویر بیان می‌شود.</motion.p>
                </div>
                <motion.img src={"/img/MotionGraphic/2902191-removebg-preview-min-400x400.png"} alt="walet" className='h-[15rem] motionImg' whileInView={{x:[-700,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}/>
            </div>
            <div className='flex flex-col-reverse items-center sm:flex-row gap-20'>
                <div>
                    <motion.h6 whileInView={{y:[-50,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='text-green-137 py-3'>2. ویدئو موشن:</motion.h6>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>این دسته از موشن گرافیک ها تلفیقی از فیلمبرداری واقعی و گرافیک است و قسمت هایی از فیلم که قابلیت فیلمبرداری واقعی ندارند با گرافیک اجرا می شوند.</motion.p>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>در حال حاضر هيچ تعريف مشخصي براي موشن گرافيك در دنيا وجود ندارد، با اين حال تقريبا به محتواي كه در آن از تصاوير ساخته شده استفاده شده باشد موشن گرافيک مي گويند. دقت كنيد كه موشن گرافيك حتي شامل محتواهايي مي شود كه علاوه بر تصاوير ساختگي، تصاوير واقعي هم دارند. البته كلمه موشن گرافيك تقريبا به زمان اختراع كامپيوتر ها بر مي گردد كه نشان مي دهد اين تصاوير ساختگي مختص كامپيوتر هستند كه اين يعني با فيلم گرفتن از دفتر نقاشي خود ويدئو موشن نساخته ايد! </motion.p>
                </div>
                <motion.img src={"/img/MotionGraphic/13038-removebg-preview-1.png"} alt="video-motion" className='h-[10rem] motionImg2' whileInView={{x:[-700,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}/>
            </div>
            <div className='flex flex-col-reverse items-center sm:flex-row gap-20'>
                <div>
                    <motion.h6 whileInView={{y:[-50,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='text-green-137 py-3'>3. استاپ موشن:</motion.h6>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>به طور کلی همه انیمیشن‌ها از قرار گرفتن چند تصویر به صورت پشت سر هم و پی در پی، ساخته می‌شوند. در انیمیشن‌های دو بعدی، تصاویر نقاشی شده با دست یا کامپیوتر، فریم به فریم نشان داده می‌شوند و در انیمیشن‌های سه بعدی، مدل‌های کامپیوتری به آهستگی حرکت کرده و با گرفتن عکس‌های پشت سر هم از آن‌ها، یک تصویر متحرک تشکیل می‌شود.</motion.p>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>در ساخت انیمیشن به روش استاپ موشن یا Stop Motion ، به جای استفاده از نقاشی، از عروسک‌ها و مدل‌های واقعی استفاده می‌شود. این کار به این صورت انجام می‌شود که عروسک را کمی حرکت می‌دهند، سپس از آن عکس گرفته می‌شود و آنقدر این عمل را تکرار می‌کنند تا حرکت تصویر را به بیننده القا کنند.</motion.p>
                </div>
                <motion.img src={"/img/MotionGraphic/4-removebg-preview-min.png"} alt="stopmotion" className='sm:h-[15rem] w-[15rem] sm:w-[30%] h-[10rem] ' whileInView={{x:[-700,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}/>
            </div>
            <div className='flex flex-col-reverse items-center sm:flex-row gap-20'>
                <div>
                    <motion.h6 whileInView={{y:[-50,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}} className='text-green-137 py-3'>4. اینفو موشن:</motion.h6>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}>ابتدا اینفوگرافیک رسم می شود و حالا حرکت را به گونه ای وارد اینفوگرافیک می کنیم تا مراحل را نشان دهیم.</motion.p>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}>یکی از مباحث مهم گرافیک، طراحی اینفوگرافیک یا Infographic Design است. در دنیای امروز که با سرعت زیادی رو به جلو حرکت می‌کند، روزانه آمار و اطلاعات زیادی در مورد موضوعات مختلف، به وجود می‌آید. از طرف دیگر مشغله خوانندگان و کاربران به قدری زیاد است که فرصت مطالعه دقیق این آمار را ندارند؛ به همین دلیل طراحان گرافیک با استفاده از تخصص و خلاقیت خود توانسته‌اند تا با طراحی اینفوگرافیک، این اطلاعات و آمار را به شیوه‌ای زیبا و جذاب به نمایش درآورند. بسیاری از افراد و سخنوران از اینفوگرافیک، در کنفرانس‌ها، ارائه‌های علمی، تبلیغات شرکت‌ها و… استفاده می‌کنند.</motion.p>
                </div>
                <motion.img src={"/img/MotionGraphic/5-removebg-preview.png"} alt="infoMation" className='w-[15rem] motionImg2' whileInView={{x:[-700,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}/>
            </div>
            <div className='flex flex-col-reverse items-center sm:flex-row justify-between'>
                <div>
                    <motion.h6 whileInView={{x:[500,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}  className='text-green-137 py-3'>مراحل تولید موشن گرافیک:</motion.h6>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1,delay:0.5}} viewport={{once:true}}>1.  ابتدا سناریو یا استوری برد برای شما نگارش می شود و از شما تایید گرفته می شود</motion.p>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1,delay:0.5}} viewport={{once:true}}>2. سپس کاراکترها و لوکیشن ها به شما نشان داده می شود تا تایید نمایید.</motion.p>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1,delay:0.5}} viewport={{once:true}}>3. متحرک سازی براساس سناریو یا استوری بورد شما انجام می شود.</motion.p>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1,delay:0.5}} viewport={{once:true}}>4. صداگذاری بر اساس سناریو نهایی انجام می شود.</motion.p>
                    <motion.h6 whileInView={{y:[-50,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='text-green-137 mt-5 py-3'>مزیت های موشن گرافیک:</motion.h6>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1,delay:1}} viewport={{once:true}}>1. انتقال مفاهیم به بهترین نحو ممکن.</motion.p>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1,delay:1}} viewport={{once:true}}>2. مخاطب را تحت تأثیر قرار می دهد.</motion.p>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1,delay:1}} viewport={{once:true}}>3. وارد بازاریابی ویدئویی می شوید.</motion.p>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1,delay:1}} viewport={{once:true}}>4. هزینه بسیار کمتر از تیزرهای واقعی با فیلمبرداریست.</motion.p>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1,delay:1}} viewport={{once:true}}>5. در بازاریابی شبکه های اجتماعی بسیار به شما کمک می کند.</motion.p>
                    <motion.p whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1,delay:1}} viewport={{once:true}}>6. کیفیت آموزش را بسیار بالا می برد.</motion.p>
                </div>
                <motion.img src={"/img/MotionGraphic/تعرفه-موشن2-1024x1024.png"} alt="tarrifImg" className='sm:w-[30rem] w-full' whileInView={{x:[-700,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}/>
            </div>
        </div>
    </div>
    <div className='flex flex-col w-full sm:py-[3rem] py-0'>
      <EndBox1 content={{link:"/order",p:'جهت سفارش انواع پروژه طراحی موشن گرافیک ، میتوانید به صورت رایگان ، با شماره 09927674217 تماس بگیرید و یا از طریق لینک زیر اقدام کنید.',b:'سفارش پروژه موشن گرافیک'}}/>
      <EndBox2 content={{p:'جهت مشاهده نمونه کارهای موشن گرافیک توسط تیم نهال آی تی از طریق لینک زیر اقدام کنید',b:'مشاهده نمونه کار موشن گرافیک',link:'/workSamples/7/موشن گرافیک'}}/>
     </div>
      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default SMotionGraphic;
