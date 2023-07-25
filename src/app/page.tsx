"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination } from "swiper/modules";
import SwiperCore from "swiper/core";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Image1 from "../../public/slide1.jpeg";
import Image2 from "../../public/slide2.jpeg";
import Image3 from "../../public/slide3.jpeg";
import Image4 from "../../public/slide4.jpeg";

import "./app.css";
import ReactDOM from "react-dom";

export default function Home() {
  SwiperCore.use([Navigation]);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const images = [Image1, Image2, Image3, Image4];

  const swiperRef = useRef<any>(null);

  const onClickPagination = (index: number) => {
    swiperRef.current.slideTo(index, 300, false);
  };

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        navigation={true}
        slidesPerView={1}
        scrollbar={{ draggable: true, el: null }}
        modules={[Pagination]}
        loop={true}
      >
        {images.map((item: any, index: number) => {
          return (
            <SwiperSlide key={`img_${index}`}>
              <div
                style={{
                  background: `url(${item.src}) no-repeat center /cover;`,
                }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="pagination_custom">
        {images.map((el: any, index: number) => {
          console.log(el);
          return (
            <div
              onClick={() => onClickPagination(index)}
              key={`img_${index}`}
              style={{ background: `url(${el.src}) no-repeat center /cover;` }}
            ></div>
          );
        })}
      </div>
    </>
  );
}
