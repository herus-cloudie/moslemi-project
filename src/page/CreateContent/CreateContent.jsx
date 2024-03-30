import React from 'react';
import Header from '../../Components/Header/Header';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader';
import FixedIcon from '../../Components/FixedIcon/FixedIcon';
import Footer from '../../Components/Footer/Footer';

function CreateContent() {
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
            <h1 className='font-[IranSans-b] text-lg'>تولید محتوا</h1>
            <p className='font-[shabnamLight] leading-8 text-justify'>تقریباً از زمانی که صنعت چاپ به وجود آمد و ظرفیت تولید محتوا از تقاضای محتوا پیشی گرفت، تولید محتوا و پیدا کردن محتوای مناسب برای نشر به یک چالش جدی تبدیل شد. تولید محتوا فرایند خلق ایده‌های موضوعی است که برای مخاطب هدف شما جذاب باشد. در این فرایند، محتواهای متنی و تصویری درباره آن موضوعات تولید می‌شود و در فرمت‌هایی مثل بلاگ، ویدیو، اینفوگرافیک و… در دسترس مخاطبان قرار می‌گیرد. کسب و کارهای اینترنتی هر روز در حال زایش و توسعه هستند. هر یک از این سایت ها در حال ارائه ی خدمات گوناگونی می باشند. ممکن است هدف یک سایت ارائه‌ی محصولات یک برند به بازار و یافتن مشتری باشد. هدف وبسایت دیگر شاید چیز دیگری باشد. اما هدف یک وبسایت هر چه که باشد، مراحل نوشتن محتوا برای یک رسیدن به این هدف بسیار مهم است. این روزها دیگر هیچ کسب و کاری چه کوچک و چه بزرگ نمی تواند بدون اینکه بدانید تولید محتوا چیست، روش‌های نوین بازاریابی کار خودش را پیش ببرد.</p>
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

export default CreateContent;