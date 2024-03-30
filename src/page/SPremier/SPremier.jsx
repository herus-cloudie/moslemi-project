import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import EndBox1 from "../../Components/EndBox1/EndBox1";
import EndBox2 from "../../Components/EndBox2/EndBox2";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

function Spremier() {
  return (
    <main>
      <Helmet>
        <title>نهال آی تی | خدمات تدوین فیلم</title>
      </Helmet>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      <div className='premierEditing-content Services-style flex flex-col items-center gap-10 mb-10'>
        <img src={"/img/PremierEditing/خدمات-فیلم-1024x576.jpg"} alt="header" className='w-full'/>
        <div className='flex flex-col gap-10 px-1'>
            <div>
                <motion.h1 whileInView={{y:[-300,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='text-center text-green-08A'>تدوین ویدیو</motion.h1>
                <p>یکی از محتواهای اثرگذار در دنیای امروز ویدیوها هستند. وقتی قرار باشد که اثری قدرتمند به جا بگذارید، هیچ‌ چیز به اندازه تحرک و صدا نیست. صدا و تصویر اثری عمیق بر مخاطب می‌گذارد و می‌تواند به خوبی پیام شما را انتقال دهد.</p>
                <p>فرایند برش، حذف موارد ناخواسته، اصلاح رنگ، تقویت صدا و یکپارچه سازی برداشت‌ها را تدوین و ویرایش می‌نامند. برای این کار باید از برنامه‌ای مناسب استفاده کرد و قابلیت‌های برنامه را شناخت. از جمله بسترهای محبوب برای تدوین فیلم شامل ادوبی پریمیر، فاینال کات پرو، سونی وگاس، آی مووی و غیره هستند. نرم افزار تدوین باید نیازهای مربوط به محتوای ویدئویی را تأمین کرده و کار تهیه فیلم را طبق استانداردهای سفارش دهنده محتوا پیش ببرد. تدوین فیلم، تکنیک‌های متنوعی دارد که داشتن تخصص در این حوزه از طریق منابع مجازی مثل کتابهای الکترونیک و طی کردن دوره‌های مجازی و حضوری آموزش تدوین فیلم، میسر است.</p>
                <p>در تیم نهال آی تی ، جهت بهره برداری بهتر خدمات پریمیر و تدوین فیلم ، کاربران میتوانند به راحتی با متخصصان مختلف در حوزه تدوین فیلم و نرم افزار پریمیر به صورت مشترک، مشاوره بگیرند.</p>
            </div>
            <div className='flex flex-col-reverse sm:flex-row items-center gap-5 justify-between'>
                <div>
                    <motion.h2 whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='text-green-08A py-3'>فواید تدوین ویدیوی حرفه ایی :</motion.h2>
                    <motion.ul whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:2}} viewport={{once:true}}>
                        <li>موجب افزایش نرخ کلیک می شود</li>
                        <li>در طول نمایش ویدئو باعث ایجاد تمرکز بیشتر می شود</li>
                        <li>با موزیک گذاری می تواند احساسات بیننده را تحت تاثیر قرار دهد</li>
                        <li>نرخ تعامل را بالا ببرد</li>
                        <li>اطلاعات جانبی به همراه ویدئو به بیننده بدهد</li>
                        <li>تبلیغات را تدوین می توان به ویدئو اضافه کرد</li>
                    </motion.ul>
                </div>
                <motion.img src={"/img/PremierEditing/youtube-creator-awards-1024x683.png"} alt="youtube" className='w-[15rem] 2xl:w-[30rem]' whileInView={{x:[-700,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}/>
            </div>
            <motion.div whileInView={{opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>
                <p>تدوین ویدیو اثر مستقیم بر میزان دیدن شدن ویدئوی شما دارد. تدوین ویدیو مثل جلد کتاب است، چیزی که شما در ابتدای کار جذب یک کتاب می کند، صرفا نام کتاب و طراحی روی جلد کتاب است. سپس شما آن کتاب را انتخاب میکنید تا از سرفصل های آن آگاه شوید. همان طوری که کتاب با طرح جلد زیباتر، احتمال فروشش بالا میرود، می توانیم بگوییم ویدئوها با تدوین ویدیوی حرفه ایی تر امکان دیدن شدن بیشتری پیدا می کنند.</p>
                <p>سفارش دهندگان محتوای ویدئویی به دنبال تیم تولید محتوایی هستند که تدوینگر فیلم هم جزئی از این تیم است. این فرد به جنبه‌های مختلف ویرایش آشنایی دارد و ابزارهای مناسب را می شناسد. تنها ابزارهای رایگان محدودی با امکانات محدود برای تدوین فیلم در فضای آنلاین وجود دارد.</p>
                <p>اما تدوینگران و سازندگان فیلم به نرم افزارهای تخصصی و پولی در این حوزه دسترسی دارند چون این کار را به عنوان یک شغل انتخاب کرده و سخت افزارها و نرم افزارهای مناسب این حرفه را تهیه نموده‌اند</p>
            </motion.div>
            <div className='flex flex-col-reverse sm:flex-row justify-between items-center'>
                <div>
                    <motion.h3 whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='text-green-08A py-3'>مخاطبین تدوین ویدیو :</motion.h3>
                    <motion.ul whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:2}} viewport={{once:true}}>
                        <li>تدوین ویدیو برای یوتویوبرها</li>
                        <li>تدوین ویدیو برای مدرسین</li>
                        <li>تدوین ویدیو برای بلاگرها</li>
                        <li>تدوین ویدیو برای تولید کننده های محتوا</li>
                        <li>تدوین ویدیو برای مستند سازان و فیلم سازان</li>
                        <li>تدوین ویدیو برای محتوای اینستاگرام</li>
                        <li>تدوین ویدیو برای تیزر سازی</li>
                        <li>تدوین ویدیو برای هدف شما</li>
                    </motion.ul>
                </div>
                <motion.img src={"/img/PremierEditing/man-watching-online-video-1024x1024.png"} alt="youtube" className='w-[15rem] 2xl:w-[25rem]' whileInView={{x:[-1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}/>
            </div>
            <div className="flex flex-col items-center sm:gap-10 gap-0">
                <motion.h4 whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='text-green-137 text-center my-5'>خدمات تدوین ویدیو</motion.h4>
                <div className='editing-video-Services flex flex-col sm:flex-row flex-wrap justify-around items-center'>
                    <motion.div whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='flex flex-col gap-3 items-center'>
                        <img src={"/img/PremierEditing/youtube.png"} alt="" className='w-[4rem] 2xl:w-[5rem]'/>
                        <b>تدوین ویدیو یوتیوب</b>
                        <span className='text-center'>امروزه یوتیوب یکی از بزرگترین بسترهای تولید محتوا در جهان است که بسیاری از کاربران همه روزه با آن مشغول به فعالیت هستند. تولید محتوای باکیفیت نقش مهمی در جذب کاربران دارد. با نهال آی تی ویدیو متفاوت برای خود بسازید</span>
                    </motion.div>
                    <motion.div whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='flex flex-col gap-3 items-center'>
                        <img src={"/img/PremierEditing/sharing-and-video-marketing-concept-with-loud-speaker-image.png"} alt="" className='w-24 2xl:w-[8rem]'/>
                        <b>تدوین تیزر تبلیغاتی</b>
                        <span className='text-center'>تیزر های تبلیغاتی نقش بسیار مهمی در تبلیغ محصولات و خدمات دارند به طوری که یک تیزر تبلیغاتی با کیفیت میتواند مشتریان بسیاری را با خود به همراه آورد</span>
                    </motion.div>
                    <motion.div whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}} className='flex flex-col gap-3 items-center'>
                        <img src={"/img/PremierEditing/concept-of-man-got-success-and-achieving-goal.png"} alt="" className='w-24 2xl:w-[8rem]'/>
                        <b>تدوین ویدیو انگیزشی</b>
                        <span className='text-center'>یک ویدیو انگیزشی مناسب میتواند شما را در قدم برداشتن در مسیر زندگی تان هدایت کند. با نهال آی تی فیلم های انگیزشی تان را متفاوت بسازید</span>
                    </motion.div>
                    <motion.div whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5,delay:1}} viewport={{once:true}} className='flex flex-col gap-3 items-center'>
                        <img src={"/img/PremierEditing/speech.png"} alt="" className='w-24 2xl:w-[8rem]'/>
                        <b>تدوین سخنرانی</b>
                        <span className='text-center'>تدوین ویدیوهای سخنرانی تاثیر بسیار مهمی در انتشار هر چه بیشتر آن ها در فضای مجازی دارد. تدوین انواع ویدیوهای سخنرانی، مداحی و مذهبی توسط تیم حرفه ای نهال آی تی انجام میگیرد</span>
                    </motion.div>
                    <motion.div whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5,delay:1}} viewport={{once:true}} className='flex flex-col gap-3 items-center'>
                        <img src={"/img/PremierEditing/facebook-advertisement-tutorial.png"} alt="" className='w-24 2xl:w-[8rem]'/>
                        <b>تدیون تولید محتوا</b>
                        <span className='text-center'>در حال حاضر تولید محتوا یکی مشاغل پر درامد در دنیای تکنولوژی است، طبیعتا با افزایش کاربران فعال در این عرصه رقابت هم بیشتر میشود. با نهال آی تی همیشه خود را متفاوت نگه دارید</span>
                    </motion.div>
                    <motion.div whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5,delay:1}} viewport={{once:true}} className='flex flex-col gap-3 items-center'>
                        <img src={"/img/PremierEditing/announcement.png"} alt="" className='w-24 2xl:w-[8rem]'/>
                        <b>تدوین برند</b>
                        <span className='text-center'>برند یک سازمان انعکاس کننده تمامی خدمات و محصولات آن سازمان است. داشتن یک ویدیو برند معرفی میتواند نقش مهمی در جذب مشتریان شما داشته باشد</span>
                    </motion.div>
                </div>
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <h5 className='text-gray3030'>تعرفه های تدوین فیلم تیم نهال آی تی</h5>
                <img src={"/img/PremierEditing/تعرفه-تدوین-فیلم2-min-600x600.png"} alt="tarrif" className='w-[20rem] sm:w-[30rem]'/>
            </div>
        </div>
    </div>
        <div className='flex flex-col w-full sm:my-[5rem] my-[1rem]'>
          <EndBox1 content={{link:"/order",p:'جهت سفارش انواع پروژه پریمیر و تدوین فیلم ، میتوانید به صورت رایگان ، با شماره 09927674217 تماس بگیرید و یا از طریق لینک زیر اقدام کنید.',b:'سفارش پروژه پریمیر و تدوین فیلم',}}/>
          <EndBox2 content={{link:"/workSamples/10/نمونه کار پریمیر",p:'جهت مشاهده نمونه کارهای پریمیر و تدوین فیلم توسط تیم نهال آی تی از طریق لینک زیر اقدام کنید',b:'مشاهده نمونه کار پریمیر و تدوین فیلم',}}/>
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

export default Spremier;
