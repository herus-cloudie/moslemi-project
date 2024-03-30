import { motion } from "framer-motion";
import React from "react";
import EndBox3 from "../../Components/EndBox3/EndBox3";
import { Helmet } from "react-helmet";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";


function SSoundEditing() {
  return (
    <main className="w-full">
        <Helmet>
            <title>نهال آی تی | خدمات تدوین صدا</title>
        </Helmet>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      <div className='soundEditing-content Services-style flex flex-col items-center gap-10 mb-10'>
        <img src={"/img/SoundEditing/خدمات-صداگذاری-1024x576.jpg"} alt="header" className='w-full'/>
        <div className='flex flex-col gap-10 px-1'>
            <div>
                <h1 className='text-green-1c'>صدا</h1>
                <p>قطعا یکی از مهم ترین رکن ها در انتقال حس و درک مفاهیم، صدا است. این پدیده آنقدر مهم و حیاتی است که روزانه با افراد مختلفی از طریق آن ارتباط برقرار میکنیم. امروزه با گسترش چشمگیر تکنولوژی قطعا نیاز به صدای باکیفیت بیش از پیش احساس میشود و این امر جز با صداگذاری و تدوین حرفه ای انجام نمیپذیرد. در تیم نهال آی تی، جهت بهره برداری بهتر خدمات ما در حوزه ی تدوین صدا و صداگذاری ، کاربران میتوانند به راحتی با متخصصان مختلف در حوزه صداگذاری به صورت مشترک، مشاوره بگیرند.</p>
            </div>
            <div>
                <h2 className='text-green-1c py-3'>صدا گذاری و تدوین صدا چیست؟</h2>
                <p>صداگذاری و تدوین صدا یکی از ارکان اصلی ادیت در محتواهای دیجیتال می باشند. برای مثال شما در اکثر فیلم ها صداهای مختلفی را می شنوید که شاید در واقعیت این صداها وجود نداشته باشد و بعد از فیلمبرداری توسط مهندسین صدا آن را بر روی فیلم قرار داده باشند اگر بخواهیم یک نمونه از آن را به شما بگوییم می توانیم به صدای باران اشاره کنیم که در بسیاری از فیلم ها باران به صورت مصنوعی ساخته شده و صدای آن توسط مهندس صدا بر روی تصویر قرار داده می شود که به این عمل صداگذاری می گویند.</p>
            </div>
            <div className='flex p-0 lg:pl-10 gap-10 sm:gap-0 flex-col-reverse sm:flex-row justify-between items-center'>
                <div>
                    <motion.h3 whileInView={{x:[700,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}  className='text-green-1c py-3'>موارد استفاده تدوین صدا</motion.h3>
                    <motion.ul whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1,delay:0.5}} viewport={{once:true}}  className='flex flex-col gap-5 mr-0 sm:mr-10'>
                        <li>برنامه های تلویزیونی</li>
                        <li>فیلم ها</li>
                        <li>مستند ها</li>
                        <li>انیمیشن</li>
                        <li>سخنرانی</li>
                        <li>تیزرهای تبلیغاتی</li>
                        <li>تولید محتوا</li>
                        <li>و …</li>
                    </motion.ul>
                </div>
                <motion.img src={"/img/SoundEditing/saxophonist-playing-saxophone-wearing-golden-glasses-1024x1024.png"} alt="soundEditing" className='w-[15rem] sm:w-[20rem] 2xl:w-[400px] 2xl:ml-5 px-3' whileInView={{x:[-1000,0],opacity:[0,1]}} transition={{duration:2}} viewport={{once:true}} />
            </div>
            <motion.div whileInView={{opacity:[0,1]}} transition={{duration:2}} viewport={{once:true}} >
                <h4 className='text-green-1c py-3'>تفاوت صداگذاری و تدوین صدا</h4>
                <p>در ابتدا بهتر است به مبحث صداگذاری بپردازیم که این روزها جایگاه بسیار خوبی در شبکه پخش خانگی پیدا کرده است، برای مثال شرکت هایی هستند که فیلم های زبان اصلی را دوبله می کنند که در همین کار عمل صداگذاری و تدوین صدا اعمال می شود برای مثال در ابتدا باید صدای خود فیلم حذف شده و صدای گوینده به زبان فارسی بر روی فیلم قرار داده شود به این عمل صداگذاری گفته می شود.</p>
                <p>حال قصد داریم به تدوین صدا بپردازیم در واقع شاید در قسمتی از کار نیاز باشد که شما مقداری از فیلم را سانسور کنید در نتیجه بعد از حذف شدن آن قسمت از فیلم باید آن قسمت از صدا که مربوط به بخش بریده شده فیلم است را کات کنید و مابقی صداها را به هم بچسبانید که به این کار تدوین صدا گفته میشود و در نهایت بهتر است بدانید که این دو موضوع با هم متفاوت هستند اما برای انجام یک کار حرفه ای به هر دوی آن ها نیاز است.</p>
            </motion.div>
            <div>
                <motion.h5 whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}  className='text-green-1c py-3'>نرم افزارهای حرفه ای ویرایش صدا</motion.h5>
                <p>در ادامه به معرفی چند نرم افزار محبوب و حرفه ای تدوین صدا میپردازیم :</p>
            </div>
            <div className='flex gap-10 sm:gap-0 flex-col-reverse sm:flex-row items-center justify-between'>
                <div>
                    <motion.h6 whileInView={{y:[500,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}} className='text-green-1c py-3'>1 - نرم افزار سونی وگاس</motion.h6>
                    <motion.p whileInView={{y:[500,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>شرکت سونی نه تنها در زمینه صنعت فیلم سازی دستی دارد، بلکه نرم افزاری را در زمینه میکس، مونتاژ و ویرایش فیلم تهیه کرده است که بسیار قدرتمند می باشد. هر چند این نرم افزار به سیستم بسیار قوی نیاز دارد و کمی پیچیده است.</motion.p>
                    <motion.p whileInView={{y:[500,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>استفاده از نهایت کیفیت در صداها و تصاویر خروجی که نهایت لذت را برای ببینده به همراه دارد یکی از مهم ترین خصوصیاتی است که در Sony Vegas Pro به چشم می خورد. انواعی از افکت ها در این ابزار گنجانده شده اند تا کاربران حرفه ای به راحتی با کنار هم قرار دادن تصاویر و همین افکت ها به جذاب تر شدن کار خود کمک کنند.</motion.p>
                </div>
                <motion.img src={"/img/SoundEditing/kisspng-vegas-pro-portable-network-graphics-computer-icons-iconos-sony-vegas-9-pro-5b7b7f843fec75.0596849215348202282618-removebg-preview.png"} alt="sonyVegas" className='w-[7rem] sm:w-[15rem] 2xl:w-[rem]' whileInView={{x:[-700,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}} />
            </div>
            <div className='flex gap-10 sm:gap-0 p-0 lg:pl-10 flex-col-reverse sm:flex-row items-center justify-between'>
                <div>
                    <motion.h6 whileInView={{y:[500,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}} className='text-green-1c py-3'>2 - نرم افزار cyberlink audio director</motion.h6>
                    <motion.p whileInView={{y:[500,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>این شرکت با ارائه نرم افزار های قدرتمند در زمینه تولید و ویرایش محتوا بسیار مورد استقبال کاربران قرار گرفته است. حال اینبار با ارائه یک نرم افزار قدرتمند دیگر در زمینه تدوین صدا نظر کاربران را به خود جلب کرده است. از ویژگی های این نرم افزار میتوان به موارد زیر اشاره کرد :</motion.p>
                    <motion.ul whileInView={{y:[500,0],opacity:[0,1]}} transition={{duration:2}} viewport={{once:true}} className='mt-5 sm:mr-10 m-0'>
                        <li>ویرایش فایل های صوتی با امکانات متعدد</li>
                        <li>امکان رایت پروژه صوتی در سی دی</li>
                        <li>پشتیبانی از فرمت های مختلف بخصوص فرمت VST</li>
                        <li>استفاده از نهایت کیفیت در خروجی</li>
                        <li>امکان گرفتن خروجی با فرمت ها و کیفیت های دلخواه</li>
                        <li>و …</li>
                    </motion.ul>
                </div>
                <motion.img src={"/img/SoundEditing/productIcon_v2_20200705203105080.png"} alt="cyberlink audio director" className='sm:w-[10rem] w-[5rem] 2xl:w-[15rem]' whileInView={{x:[-500,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}/>
            </div>
            <div className='flex p-0 lg:pl-10 gap-8 sm:gap-0 flex-col-reverse sm:flex-row items-center justify-between'>
                <div>
                    <motion.h6 whileInView={{y:[500,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}} className='text-green-1c py-3'>3 - نرم افزار Adobe Audition</motion.h6>
                    <motion.p whileInView={{y:[500,0],opacity:[0,1]}} transition={{duration:1.5}} viewport={{once:true}}>Adobe Audition یکی از بهترین نرم افزارهای رکورد آهنگ است که امکاناتی مثل waveform و نمایش چند آهنگ برای ترکیب، ویرایش و بازیابی محتوای صوتی را در اختیارتان می گذارد. این برنامه برای سرعت بخشیدن به روند تولید ویدئو و فایل صوتی طراحی شده است. از ویژگی های این نرم افزار میتوان به موارد زیر اشاره کرد :</motion.p>
                    <motion.ul whileInView={{y:[500,0],opacity:[0,1]}} transition={{duration:2}} viewport={{once:true}} className='flex flex-col gap-3 mt-5 m-0 sm:mr-10'>
                        <li>می توانید کلیپ های آهنگتان رابه راحتی ضبط، ویرایش و ادغام کنید.</li>
                        <li>این برنامه به شما امکان می دهد تا محتواهای صوتی مختلف را برای تولید پادکست با هم ترکیب کنید.</li>
                        <li>پنل اصلی صدا با برنامه ادغام شده است تا بهترین افکت روی آهنگ شما قرار بگیرد.</li>
                        <li>می توانید کلیپ های آهنگ خودتان را در کنار ویژگی ضبط صدا استفاده کنید تا آهنگ حرفه ای تری بسازید.</li>
                        <li>از این پلتفرم می توان برای ایجاد پادکست های جذاب استفاده کرد.</li>
                    </motion.ul>
                </div>
                <motion.img src={"/img/SoundEditing/Adobe_Audition_CC_icon_2020.svg-1024x1000.png"} alt="Adobe Audition" className='w-[5rem] sm:w-[10rem] 2xl:w-[15rem]' whileInView={{x:[-500,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}/>
            </div>
            <motion.div whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}} className='flex flex-col gap-5'>
                <h6 className='text-green-137 text-center py-3'>خدمات صداگذاری و تدوین صدا</h6>
                <div className='flex flex-col sm:flex-row items-center justify-around sound-editing-Services '>
                    <div className='flex flex-col gap-3 items-center'>
                        <img src={"/img/SoundEditing/آموزش-ساخت-تیزر-تبلیغاتی-min.png"} alt="img" className='2xl:w-[10rem] w-36'/>
                        <b>تهیه تیزر تبلیغاتی</b>
                        <span className='text-center'>با گستردگی روزافزون مخاطبان شبکه مجازی یکی از بهترین تبلیغات در این بخش ساخت ویدئوهای ویژه کوتاه، برای نمایش در صفحات شبکه های اجتماعی و بستر های مختلف است.</span>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <img src={"/img/SoundEditing/4674029-scaled-transformed-min.png"} alt="img" className='2xl:w-[10rem] w-36'/>
                        <b>خدمات نریشن</b>
                        <span className='text-center'>نریشن، هنر تبدیل متون مختلف به کلام تاثیرگذار است. در بسیاری از موارد مخاطبان ما علاقه ایی به خواندن متون از خود نشان نمیدهند و این امر ممکن است باعث شود بسیاری از مطالب مهم، از نظرشان پنهان بماند.</span>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <img src={"/img/SoundEditing/1398090309273659318951144-transformed-min.png"} alt="img" className='2xl:w-[10rem] w-36'/>
                        <b>گویندگی و دوبله</b>
                        <span className='text-center'>درواقع گویندگی ،اثرگذاری یک موضوع را چندین برابر میکند و باعث میشود که متون به کلامی دلنشین ، اثرگذار و زیبا تبدیل شود. از هنر گویندگی در رادیو ، تلوزیون، فیلم، تئاتر، انیمیشن، تبلیغاتی، و … استفاده می شود .</span>
                    </div>
                </div>
            </motion.div>
            <div className='flex flex-col items-center'> 
                <h6 className='text-gray3030'>تعرفه های تیم نهال آی تی در حوزه تدوین و صداگذاری</h6>
                <img src={"/img/SoundEditing/تعرفه-تدوین-صدا2-min-600x600.png"} alt="tarrif" className='w-[100%] sm:w-[40%]'/>
            </div>
        </div>
    </div>
    <EndBox3 content={{link:"/order",p:'جهت سفارش انواع خدمات صدا ، میتوانید به صورت رایگان ، با شماره 09927674217 تماس بگیرید و یا از طریق لینک زیر اقدام کنید.',b:'سفارش خدمات صدا گذاری'}}/>
      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default SSoundEditing;
