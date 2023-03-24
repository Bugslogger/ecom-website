import React from "react";
import ProductCard from "../Component/Card/ProductCard";
import "./home.css";

const Home = () => {
  return (
    <div className="d-flex justify-content-center body-content align-items-start flex-row">
      <div className="side-container">
        <ul class="list-group list-group-flush side-container-list">
          <li class="list-group-item active">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <div className="d-flex card-container justify-content-center align-items-center flex-wrap">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
