import React from "react";

const NewsHomePage = () => {
  return (
    <div className="flex flex-col w-full 2xl:px-0  items-center justify-center container px-48 max-lg:px-40 max-md:px-20 max-sm:px-10 mx-auto">
      <img alt="News_image" className="w-[90%] sm:w-[70%] lg:w-[70%] xl:w-[30%]" src="https://nahalit.com/wp-content/uploads/2022/12/Artboard-13-1024x330.png" />
      <div className="flex flex-col items-center gap-2">
        <span className="font-[shabnamBold] text-lg text-stone-600">آخرین مطالب نهال آی تی</span>
        <span className="font-[shabnam] tracking-[0.5rem] text-stone-700">Latest Posts Blog</span>
      </div>
    </div>
  );
};

export default NewsHomePage;
