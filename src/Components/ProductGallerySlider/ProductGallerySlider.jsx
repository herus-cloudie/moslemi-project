import React from 'react';
import { Pagination , EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGalleryById } from '../../features/dashboard/action';

function ProductGallerySlider({ Id }) {
    const widthScreen = window.innerWidth;
    const dispatch = useDispatch();
    const gallery = useSelector(state => state.dashboard.gallery);
    useEffect(()=>{
        dispatch(getGalleryById(Id))
    },[Id])
    // console.log(gallery);
  return (
    <div className='gallery_box'>
        <span className='text-[1.2rem] font-[shabnamBold] text-stone-700 m-0 w-full text-start'>تصاویر محصول</span>
        {
            gallery?.length === 0 
            ?
            <p className='mt-5 font-[shabnamThin] text-base text-yellow-900'>هنوز تصویری برای این محصول اضافه نشده</p>
            :
            <Swiper
            initialSlide={widthScreen < 425 ? 0 : 1}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={widthScreen < 425 ? 1 : 3 }
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            >
                {

                    gallery.map(img => (
                        <SwiperSlide key={img?.id}>
                           <img src={img?.image} alt={img?.title} className='2xl:w-[400px]'/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        }
    </div>
  )
}

export default ProductGallerySlider;