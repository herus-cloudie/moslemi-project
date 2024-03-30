import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { A11y, Autoplay, EffectCards, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getBanner } from "../../features/dashboard/action";

const SliderSwiper = () => {
  const photoSlider = useSelector(state => state.dashboard.banner);
  const dispatch = useDispatch()
useEffect( ()=>{
  dispatch(getBanner())
  // console.log(photoSlider);
}
  ,[])
  return (
    <div className="relative -z-50 max-w-full overflow-hidden">
      <Swiper
        className="mt-[3rem] w-[80%] 2xl:w-[70%]"
        modules={[Navigation, A11y, Autoplay, Pagination, EffectCards]}
        effect="cards"
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {photoSlider.map((item , index)=>{
            return(
              <SwiperSlide key={crypto.randomUUID()}>
                 <img
                    className="hover:opacity-80 transition-all duration-300"
                    src={`${item?.image}`}
                    alt="slider_image"{...index}
                    width={2000}
                  />
              </SwiperSlide>
            )
        })}
        
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
