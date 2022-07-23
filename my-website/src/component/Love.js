import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
// import images from '../images';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import './Love.css';


function Love(props) {

  const photos = ['pic0.jpeg', 'pic1.JPG', 'pic2.jpeg', 'pic3.JPG', 'pic4.JPG', 'pic5.png']

  return (
    <div className="love">

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        navigation
        spaceBetween={50}
        speed={1000}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true, }}
        loop
        scrollbar={{ draggable: true }}

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="swiper"
      >

        {photos.map((photo, i) =>
          <SwiperSlide><img src={require(`../images/${photo.toString()}`)} className='slide-pic' /></SwiperSlide>

        )}
      </Swiper>




    </div>
  );
}

export default Love;