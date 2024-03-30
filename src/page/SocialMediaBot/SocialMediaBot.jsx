import React from 'react';
import Header from '../../Components/Header/Header';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader';
import FixedIcon from '../../Components/FixedIcon/FixedIcon';
import Footer from '../../Components/Footer/Footer';

function SocialMediaBot() {
  return (
    <div>
        <header>
            <div className="max-lg:hidden">
            <Header />
            </div>
            <div className="lg:hidden">
            <ResponseHeader />
            </div>
        </header>
        <main className='flex p-5 md:p-20 2xl:px-96 gap-3 flex-col items-center md:items-start bg-[#FAFAFC]'>
            <h1 className='font-[IranSans-b] text-lg'>ربات شبکه های اجتماعی</h1>
            <span className='font-[IranSans-b] mt-10'>ربات تلگرام :</span>
            <p className='font-[shabnamLight] leading-8 text-center sm:text-justify'>ربات های تلگرام در واقع حساب های کاربری تلگرام هستند که از طریق نرم افزار و به صورت خودکار عمل می کنند. هر ربات یک کاربر تلگرام است که برای اهداف خاصی طراحی می شود و عمل می کند. این ربات ها دارای سطحی از هوش مصنوعی هستند و به کمک آن عملیات خود را انجام می دهند. آنها قادر به انجام هر کاری از جمله آموزش، پخش موسیقی، جستجو، برقراری ارتباط و حتی ارسال دستور به IoT یا اینترنت اشیا، ساخت بازی های یک یا چند نفره، ایجاد سرویس های اجتماعی، ایجاد ابزارهای جانبی و برقراری ارتباط با سرویس های دیگر هستند.</p>
            <p className='font-[shabnamLight] leading-8 text-center sm:text-justify'>اگر به صورت تخصصی به آن ها نگاه کنیم، ربات ها کاربران ویژه تلگرام هستند که از طریق پلتفرمی با نام bot API و از مسیر درخواست های ارسالی از پروتکل HTTPS پیام ها را پردازش می کنند.</p>
            <span className='font-[IranSans-b] mt-10'>ربات واتساپ :</span>
            <p className='font-[shabnamLight] leading-8 text-center sm:text-justify'>در سال‌های اخیر استفاده از ایمیل مارکتینگ در صدر روش‌های بازاریابی به‌جهت جذب مشتری قرار داشته است که با روی کار آمدن شیوه‌های نوین عملاً غیر قابل استفاده شده یا حداقل به کمترین میزان، تنزل پیدا کرده است.</p>
            <p className='font-[shabnamLight] leading-8 text-center sm:text-justify'>در حال حاضر استفاده از ربات‌ها که نمونه ایده‌آل آن با عنوان ربات واتساپ در اختیار متقاضیان قرار داده می‌شود از بهترین روش‌های تبلیغات در واتساپ به‌شمار می‌رود که نتایج شگفت انگیزی به‌همراه داشته است.</p>
            <p className='font-[shabnamLight] leading-8 text-center sm:text-justify'>به‌همین منظور ما در این مقاله قصد معرفی این ربات جذاب را داریم تا با استفاده از آن بتوانید به افزایش بهره‌وری کسب‌وکارتان بپردازید. ضمناً ناگفته نماند که ربات واتساپ دارای انواع مختلفی است.</p>
            <p className='font-[shabnamLight] leading-8 text-center sm:text-justify'>در سال‌های اخیر استفاده از ایمیل مارکتینگ در صدر روش‌های بازاریابی به‌جهت جذب مشتری قرار داشته است که با روی کار آمدن شیوه‌های نوین عملاً غیر قابل استفاده شده یا حداقل به کمترین میزان، تنزل پیدا کرده است.</p>
            <p className='font-[shabnamLight] leading-8 text-center sm:text-justify'>در حال حاضر استفاده از ربات‌ها که نمونه ایده‌آل آن با عنوان ربات واتساپ در اختیار متقاضیان قرار داده می‌شود از بهترین روش‌های تبلیغات در واتساپ به‌شمار می‌رود که نتایج شگفت انگیزی به‌همراه داشته است.</p>
            <span className='font-[IranSans-b] mt-10'>خدمات لینکدین:</span>
            <p className='font-[shabnamLight] leading-8 text-center sm:text-justify'>لینکدین یا لینکداین (LinkedIn) یک شبکه اجتماعی است.شاید خیلی‌ها با خواندن این جمله گمان کنند که لینکدین هم چیزی شبیه فیس‎بوک و اینستاگرام است، که البته چنین نیست.</p>
            <p className='font-[shabnamLight] leading-8 text-center sm:text-justify'>لینکدین به نوعی در ایران مهجور و غریب است و بسیاری از ایرانی‌ها – حتی افراد تحصیل کرده و یا دانشجو – نمی‌دانند لینکدین چیست و به چه کار می‌آید.
              بنابراین برای پاسخ به این سوال که «لینکدین چه جور جایی است؟» بیایید با هم نگاهی به چند تا از القاب این شبکه اجتماعی داشته باشیم، که اغلب آنها تا حدودی شبیه هم هستند:</p>
            <ul>
              <li>• شبکه مهندسان، مدیران و افراد حرفه‌ای</li>
              <li>• محلی ایده‌آل برای تبادل نظر پیرامون مسائل تجاری</li>
              <li>• شبکه‌ای برای بهبود کسب و کارها</li>
              <li>• شبکه‌ای ویژه کارآفرینان، کارمندان، مدیران، کارشناسان و صاحبان مشاغل و صنایع</li>
              <li>• مکانی ایده‌آل برای نشان دادن تاریخچه فعالیت‌ها و رزومه کاری شما یا شرکت‌تان</li>
              <li>• فضایی مناسب برای ارتباط‌گیری افراد همکار و کسانی که در یک رشته و صنعت مشغول به کار هستند</li>
            </ul>
            <p className='font-[shabnamLight] leading-8 text-center sm:text-justify'>در این شبکه ارزشمند، حرفه‌ای و قدرتمند، هر کس از هر صنف و صنعتی می‌تواند با کمی جستجو، افراد مشابه خود را پیدا کرده و با آنها ارتباط برقرار نماید و با به اشتراک گذاشتن دانش خود و استفاده از تجربیات دیگران، این فضای حرفه‌ای را به خوبی به خدمت بگیرد.</p>
        </main>
        <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default SocialMediaBot;