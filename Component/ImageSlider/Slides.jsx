"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Autoplay } from "swiper";

const Slides = () => {
  return (
    <Swiper
      loop={true}
      className="mySwiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide className="rounded">
        <img
          className="rounded"
          src="https://cdn.pixabay.com/photo/2020/12/17/13/35/sale-5839316_960_720.jpg"
          alt=""
          width={"100%"}
          height="250px"
        />
      </SwiperSlide>
      <SwiperSlide className="rounded">
        <img
          className="rounded"
          src="https://cdn.pixabay.com/photo/2020/12/17/13/35/sale-5839316_960_720.jpg"
          alt=""
          width={"100%"}
          height="250px"
        />
      </SwiperSlide>
      <SwiperSlide className="rounded">
        <img
          className="rounded"
          src="https://cdn.pixabay.com/photo/2020/12/17/13/35/sale-5839316_960_720.jpg"
          alt=""
          width={"100%"}
          height="250px"
        />
      </SwiperSlide>
      <SwiperSlide className="rounded">
        <img
          className="rounded"
          src="https://cdn.pixabay.com/photo/2020/12/17/13/35/sale-5839316_960_720.jpg"
          alt=""
          width={"100%"}
          height="250px"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slides;
