'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';



// import required modules
import { Pagination } from 'swiper/modules';

export default function Caro() {
  return (
    <>

<h1 class="mt-3 mb-4 pt-4  text-center fw-bold h-font ">Our Products</h1>
  <div className="container mt-2 mb-4 bg-white shadow dis">
        <div className="row">
            <div className="col-lg-12 col-md-6  mb-2 px-2">
                
      <Swiper slidesPerView={4} spaceBetween={20} pagination={{clickable: true,}} loop={true} autoplay={{delay: 3000, disableOnInteraction: false,
        }}

        modules={[ Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <Link href='/products'><img src="./images/e1.jpg"  className="w-100 p-4 rounded d-block" height={300} width={300} alt="" /></Link></SwiperSlide>
         <SwiperSlide><Link href='/products'><img src="./images/e2.jpg"  className="w-100 p-4 rounded d-block" height={300} width={300} alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href='/products'><img src="./images/e3.jpg"  className="w-100 p-4 rounded d-block" height={300} width={300} alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href='/products'><img src="./images/e4.jpg" className="w-100 p-4 rounded d-block" height={300} width={300} alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href='/products'><img src="./images/e5.jpg" className="w-100 p-4 rounded d-block" height={300} width={300} alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href='/products'><img src="./images/e6.jpg" className="w-100 p-4 rounded d-block" height={300} width={300} alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link href='/products'><img src="./images/e7.jpg" className="w-100 p-4 rounded d-block" height={300} width={300} alt="" /></Link></SwiperSlide> 
       
        <SwiperSlide><Link href='/products'><img src="./images/e8.jpg" className="w-100 p-4 rounded d-block" height={300} width={300} alt="" /></Link></SwiperSlide> 
       
        <SwiperSlide><Link href='/products'><img src="./images/e9.jpg" className="w-100 p-4 rounded d-block" height={300} width={300} alt="" /></Link></SwiperSlide> 
       
      </Swiper>
      
      </div>
      </div>
      </div>

                    {/* Small Device */}
      <div className='bg-light d-lg-none'>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 my-3" >
          <div className="card mt-4 mx-2" >
             <Link href='/products'>  <img src='./images/e3.jpg' className="card-img-top" height='300' width='300' alt="..."/></Link>
              
             </div>
          </div>
        
            </div>
          </div>
    </div>




    </>
  );
}
