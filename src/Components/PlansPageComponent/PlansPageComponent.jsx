import React from 'react';
import EndBox1 from '../EndBox1/EndBox1';

function PlansPageComponent() {
  return (
    <main className='w-full flex flex-col items-center container mx-auto gap-3 2xl:gap-10 mb-10'>
      <img src="/img/کسب-و-کار-نوپا-1024x115.png" alt="Title" className='w-[80%] md:w-[500px] my-10'/>
      <div className='px-2'>
        <p className='font-[shabnam] text-justify md:text-start text-slate-600 my-1'>در این بخش از سایت نهال آیتی برای بهبود کسب و کار نوپا که نیاز به مشتری ، برند سازی و شبکه های اجتماعی دارند در نظر دارد یک پکیج با قیمت مناسب ارائه دهد. </p>
        <p className='font-[shabnam] text-justify md:text-start text-slate-600 my-1'>لازم به ذکر است که این پکیج به صورت اقساطی و با پیش پرداخت به صورت توافقی انجام میگردد .</p>
        <p className='font-[shabnam] text-justify md:text-start text-slate-600 my-1'>جهت مشاوره رایگان با ما تماس بگیرید.</p>
      </div>
      <img src="/img/Artboard-1.png" alt="artBoard"/>
      <div className='flex items-start w-full justify-center 2xl:w-[50%]'>
        <img src="/img/کسب-و-کار-نوپا-برنزی-۲.png" alt="برنزی" className='w-[30%] h-full'/>
        <img src="/img/کسب-و-کار-نوپا-نقره-ای۲.png" alt="نقره" className='w-[30%] h-full'/>
        <img src="/img/کسب-و-کار-نوپا-طلایی۲.png" alt="طلایی۲" className='w-[30%] h-full'/>
      </div>
    </main>
  )
}

export default PlansPageComponent;