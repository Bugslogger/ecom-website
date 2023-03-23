import "./productcard.css";
import React from "react";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="inner-card">
        <div className="product-image"></div>
        <div className="product-text p-4 d-flex flex-column justify-content-between align-items-center">
          <h6 className="text-truncate">Nike ZoomX SuperRep Surge...</h6>
          <div className="w-100 d-flex justify-content-end align-items-center">
            <h5>$96</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
