'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { EffectFade, Autoplay } from 'swiper/modules';



export default function Demo() {
    
  return (
    <>
   
   <h1 class="mt-2 pt-4  text-center fw-bold h-font">CuteCuddles</h1>


    <div className="container-fluid  bg-white shadow">
        <div className="row">
            <div className="col-lg-12 col-md-6 mb-2 px-2">
         <Swiper
       spaceBetween={30}
       centeredSlides={true}
       effect={'fade'}
       loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
       
       
        modules={[EffectFade,Autoplay]}
        className="mySwiper"
      >
       
        <SwiperSlide><img src='./images/ban.jpg' style={{objectFit:'cover',objectPosition:'center', }} alt=""  height='500' className="w-100 p-4 rounded d-block" /></SwiperSlide>
        <SwiperSlide><img src='./images/ban3.jpg' style={{objectFit:'cover',objectPosition:'center', }} alt=""  height='500' className="w-100 p-4 rounded d-block" /></SwiperSlide>
        <SwiperSlide><img src='./images/ban2.jpg' style={{objectFit:'cover',objectPosition:'center', }} alt=""  height='500' className="w-100 p-4 rounded d-block" /></SwiperSlide>
        <SwiperSlide><img src='./images/ban4.jpg' style={{objectFit:'cover',objectPosition:'center', }} alt=""  height='500' className="w-100 p-4 rounded d-block" /></SwiperSlide>
        <SwiperSlide><img src='./images/ban5.jpg' style={{objectFit:'cover',objectPosition:'center', }} alt=""  height='500' className="w-100 p-4 rounded d-block" /></SwiperSlide>
        <SwiperSlide><img src='./images/ban6.jpg' style={{objectFit:'cover',objectPosition:'center', }} alt=""  height='500' className="w-100 p-4 rounded d-block" /></SwiperSlide>
       
      </Swiper>
            </div>

     
        </div>
    </div>

    </>
  )
}
