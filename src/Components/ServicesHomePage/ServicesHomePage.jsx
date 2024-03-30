import React from "react";
import { services } from "../../API/data";
import ServicesPart from "./ServicesPart/ServicesPart";

const ServicesHomePage = () => {

  return (
    <div className="w-full flex items-center justify-center py-5">
    <div className="w-[100%] 2xl:w-[80%] px-8 flex flex-col gap-10 2xl:px-10">
      <div>
        <img src="https://nahalit.com/wp-content/uploads/2022/12/Untitled-1.jpg" className="w-[8rem] sm:w-[10rem]" alt="image_ServicesHomePage" />
      </div>
      <div className="flex items-center flex-wrap justify-center sm:justify-between gap-x-10 gap-y-[8rem] 2xl:text-2xl 2xl:w-full">
        {
          services.map((service) => (
            <ServicesPart title={service.title} text={service.text} Icon={service.img} link={service.link}/>
          ))
        }
      </div>
    </div>
    </div>
  );
};

export default ServicesHomePage;


