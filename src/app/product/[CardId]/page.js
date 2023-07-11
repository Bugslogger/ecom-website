"use client";
import Image from "next/image";
import React, { createElement, useState } from "react";
import "../product.css";
// import ProductCard from "../../../../Component/Card/ProductCard";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import { Autoplay } from "swiper";
import Accordian from "../../../../Component/Accordian/Accordian";
import { ReactIcons } from "../../../../functions";

const page = ({ params, searchParams }) => {
  const [count, setcount] = useState(1);

  return (
    <div className="product-page py-5">
      <div className="product">
        <div className="product-image w-100 rounded">
          <Image
            className="rounded"
            width={550}
            height={500}
            src="https://cdn.pixabay.com/photo/2020/09/17/06/20/nike-5578104_960_720.jpg"
            alt="Product Image"
          />

          <div className="my-2">
            <Accordian />
          </div>
        </div>
        <div className="product-details">
          <h1>Product Name</h1>
          <div>
            {/* <AiFillStar className="star my-3" />
            <AiFillStar className="star my-3" />
            <AiFillStar className="star my-3" />
            <AiFillStar className="star my-3" />
            <AiOutlineStar className="star my-3" /> */}
            <span className="star my-3">
              {createElement(ReactIcons("AiFillStar"))}
              {createElement(ReactIcons("AiFillStar"))}
              {createElement(ReactIcons("AiFillStar"))}
              {createElement(ReactIcons("AiFillStar"))}
              {createElement(ReactIcons("AiOutlineStar"))}
            </span>
            <span className="mx-2">2 review</span>
          </div>
          <div className="price">$19.99</div>

          <div className="ProductForm__QuantitySelector">
            {/* <label for="quantity">Quantity:</label> */}
            <div className="QuantitySelector QuantitySelector--large">
              <span
                className="QuantitySelector__Button Link Link--secondary"
                data-action="decrease-quantity"
              >
                {createElement(ReactIcons("AiOutlineMinus"))}
              </span>
              <input
                type="text"
                className="QuantitySelector__CurrentQuantity"
                pattern="[0-9]*"
                name="quantity"
                value={count}
              />
              <span
                className="QuantitySelector__Button Link Link--secondary"
                data-action="increase-quantity"
              >
                {createElement(ReactIcons("AiOutlinePlus"))}
              </span>
            </div>
          </div>
          <br />
          <button type="submit" className="buy-button btn btn-outline-dark">
            Add To Cart
          </button>
          <button type="submit" className="buy-button btn btn-dark">
            Buy Now
          </button>
          <div className="d-flex flex-row justify-content-around align-items-center">
            <img src={"/images/visa.svg"} width={80} />
            <img src={"/images/master.svg"} width={80} />
            <img src={"/images/paypal.svg"} width={80} />
            <img src={"/images/american.svg"} width={80} />
          </div>
          <h2 className="my-2">Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia
            arcu ut lacus mollis posuere. Nullam dapibus vel sem ac consequat.
            Sed eleifend risus ut justo blandit, ut volutpat ex ultrices.
          </p>
        </div>
      </div>
      {/* <div className="mt-5">
        <Swiper
          slidesPerView={4}
          loop={true}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="rounded">
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide className="rounded">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="rounded">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="rounded">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="rounded">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="rounded">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="rounded">
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  );
};

export default page;
