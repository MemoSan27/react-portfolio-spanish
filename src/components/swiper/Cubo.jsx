import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import "./cubo.css";

// import required modules
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';

export default function Cubo() {
  return (
    <>
      <h2 className='swipper__title'>Avalado por..</h2>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}

        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
        loop
      >
        <SwiperSlide>
          <img src="../academlo.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../udemy.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../devtalles.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../uadeo.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
