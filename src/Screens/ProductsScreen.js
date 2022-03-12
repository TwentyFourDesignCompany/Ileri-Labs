import React from "react";
import sampleProductBg from "../Assets/sampleProductBg.png";
import ProductCard from "../Components/ProductCard";

export default function ProductsScreen() {
  return (
    <>
      <div className="sample__product__section">
        <img
          src={sampleProductBg}
          alt="sampleProductBg"
          className="sample__product__section__img"
        />
        <div className="sample__product__section__overlay">
          <div className="sample__product__section__content">
            <div className="heading">Lorem ipsum dolor sit amet</div>
            <div className="heading">Lorem ipsum </div>
            <div className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              inventore ex sit quo corrupti pariatur odio nisi! Saepe ipsum
              similique enim. Beatae
            </div>
          </div>
        </div>
      </div>
      <div className="product__card__container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}
