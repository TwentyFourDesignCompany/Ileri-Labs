import React from "react";
import { Link } from "react-router-dom";
import product_card_img from "../Assets/product_card_img.png";

export default function ProductCard({ isClass }) {
  return (
    <div className={isClass ? isClass : "new__product__card"}>
      <div className="new__product__card__headder">
        <div className="new__product__card__price">
          <span>$</span> 43
        </div>
        <img
          src={product_card_img}
          alt="product_card_img"
          className="new__product__card__heading__img"
        />
      </div>
      <div className="heading">Product Name</div>
      <div className="paragraph ">1 - Genrally Labeled</div>
      <div className="paragraph ">2 - Heigh Quality</div>
      <div className="paragraph ">3 - Design your label</div>
      <Link
        to="/product-details"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="main__home__section__overlay__content__left__btn"
      >
        Shop Now
      </Link>
    </div>
  );
}
