import "./productcard.css";
import React from "react";
import Image from "next/image";
import { BiCartAdd } from "react-icons/bi";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="inner-card">
        <div className="product-image position-relative d-flex justify-content-center align-items-center">
          <span className="product-tag position-absolute bg-danger text-white m-2 px-2 rounded">
            Sale
          </span>
          <div className="product-cart-icon justify-content-center align-items-center">
            <BiCartAdd className="fs-5" />
          </div>
          <Image
            className="mx-auto rounded"
            src={
              "https://cdn.pixabay.com/photo/2020/09/17/06/20/nike-5578104_960_720.jpg"
            }
            width="210"
            height={"210"}
            alt="product-image"
          />
        </div>
        <div className="product-text px-4 py-3 d-flex flex-column justify-content-between align-items-center">
          <h6 className="text-truncate">Nike ZoomX SuperRep Surge...</h6>
          <div className="w-100 d-flex justify-content-between align-items-center">
            <button className="btn btn-dark" style={{ fontSize: "14px" }}>
              Buy Now
            </button>
            <h5 className="">$96</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
