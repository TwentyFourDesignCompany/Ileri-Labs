import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import productImg from "../Assets/productPic.png";
import img from "../Assets/productPic.png";
import imgLarge from "../Assets/productPicLarge.png";
import img1 from "../Assets/productPicSuggestion.png";
import imgLarge1 from "../Assets/productPicSuggestionLarge.png";
import img2 from "../Assets/productPic.png";
import imgLarge2 from "../Assets/productPicLarge.png";
import img3 from "../Assets/productPic.png";
import imgLarge3 from "../Assets/productPicLarge.png";
import img4 from "../Assets/productPic.png";
import imgLarge4 from "../Assets/productPicLarge.png";
import img5 from "../Assets/productPic.png";
import imgLarge5 from "../Assets/productPicLarge.png";
import HomeBG from "../Assets/HomeBG.png";
import StarRatings from "react-star-ratings";
import ProductCard from "../Components/ProductCard";

function SuggestionImg({ imgURL, onClick }) {
  return (
    <button
      className="product__details__images__suggestion__btn"
      onClick={onClick}
    >
      <img
        src={imgURL}
        alt="product__details__images__suggestion1"
        className="product__details__images__suggestion"
      />
    </button>
  );
}

function ColorPicker({ placeholder, styles }) {
  return (
    <div className="input-radio-color">
      <input type="radio" id={placeholder} name="color" value={placeholder} />
      <label for={placeholder}>
        <div className="input-radio-color-value" style={styles}></div>
      </label>
    </div>
  );
}

function SizePicker({ placeholder }) {
  return (
    <div className="input-radio-size">
      <input type="radio" id={placeholder} name="size" value={placeholder} />
      <label for={placeholder}>{placeholder}</label>
    </div>
  );
}

export default function ProductDetails() {
  const [imgLink, setImgLink] = useState(img);
  const [imgLinkLarge, setImgLinkLarge] = useState(imgLarge);
  const isInStock = true;
  return (
    <>
      <div className="container product__details">
        <div className="product__details__top__row">
          <div className="product__details__images">
            <div className="product__details__images__suggestions">
              <SuggestionImg
                imgURL={img1}
                onClick={() => {
                  setImgLink(img1);
                  setImgLinkLarge(imgLarge1);
                }}
              />
              <SuggestionImg
                imgURL={img2}
                onClick={() => {
                  setImgLink(img2);
                  setImgLinkLarge(imgLarge2);
                }}
              />
              <SuggestionImg
                imgURL={img3}
                onClick={() => {
                  setImgLink(img3);
                  setImgLinkLarge(imgLarge3);
                }}
              />
              <SuggestionImg
                imgURL={img4}
                onClick={() => {
                  setImgLink(img4);
                  setImgLinkLarge(imgLarge4);
                }}
              />
              <SuggestionImg
                imgURL={img5}
                onClick={() => {
                  setImgLink(img5);
                  setImgLinkLarge(imgLarge5);
                }}
              />
            </div>
            <div className="product__details__image">
              <img
                src={HomeBG}
                alt="HomeBG"
                className="product__details__image__pic"
              />
            </div>
          </div>
          <div className="product__details__content">
            <div className="product__details__content__heading__row">
              <div className="product__details__content__heading__row__heading">
                <span>ILERI lABS - Beauty Brand</span>
                <div className="product__details__content__heading__row__line"></div>
              </div>
              <div className="product__details__content__heading__row__btn">
                <button className="product__details__content__heading__row__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 34.355 30.348"
                  >
                    <path
                      id="Icon_feather-heart"
                      data-name="Icon feather-heart"
                      d="M31.26,6.915a8.25,8.25,0,0,0-11.67,0L18,8.505l-1.59-1.59A8.252,8.252,0,1,0,4.74,18.585l1.59,1.59L18,31.845l11.67-11.67,1.59-1.59a8.25,8.25,0,0,0,0-11.67Z"
                      transform="translate(-0.823 -2.997)"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </button>
                <button className="product__details__content__heading__row__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 33">
                    <g
                      id="Icon_feather-share-2"
                      data-name="Icon feather-share-2"
                      transform="translate(-3 -1.5)"
                    >
                      <path
                        id="Path_5"
                        data-name="Path 5"
                        d="M31.5,7.5A4.5,4.5,0,1,1,27,3,4.5,4.5,0,0,1,31.5,7.5Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_6"
                        data-name="Path 6"
                        d="M13.5,18A4.5,4.5,0,1,1,9,13.5,4.5,4.5,0,0,1,13.5,18Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M31.5,28.5A4.5,4.5,0,1,1,27,24,4.5,4.5,0,0,1,31.5,28.5Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_8"
                        data-name="Path 8"
                        d="M12.885,20.265l10.245,5.97"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_9"
                        data-name="Path 9"
                        d="M23.115,9.765l-10.23,5.97"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="product__details__content__info">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            </div>
            <div className="product__details__content__variant">
              <div className="product__details__content__variant__heading">
                Strap Color
              </div>
              <div className="product__details__content__variant__selection">
                <ColorPicker
                  placeholder="black"
                  styles={{ backgroundColor: "black" }}
                />
                <ColorPicker
                  placeholder="blue"
                  styles={{ backgroundColor: "blue" }}
                />
                <ColorPicker
                  placeholder="red"
                  styles={{ backgroundColor: "red" }}
                />
                <ColorPicker
                  placeholder="orange"
                  styles={{ backgroundColor: "orange" }}
                />
              </div>
            </div>
            <div className="product__details__content__variant">
              <div className="product__details__content__variant__heading">
                Strap Size
              </div>
              <div className="product__details__content__variant__selection">
                <SizePicker placeholder='14"' />
                <SizePicker placeholder='13"' />
                <SizePicker placeholder='16"' />
                <SizePicker placeholder='18"' />
              </div>
            </div>
            <div className="main__product__content__row">
              <div className="main__product__content__quantity">
                <button className="main__product__content__quantity__min">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.902"
                    height="2.731"
                    viewBox="0 0 13.902 1.731"
                    fill="currentColor"
                  >
                    <path
                      id="Icon_ionic-ios-remove"
                      data-name="Icon ionic-ios-remove"
                      d="M22,16.875H9.83a.865.865,0,0,0,0,1.731H22a.865.865,0,1,0,0-1.731Z"
                      transform="translate(-8.965 -16.875)"
                    />
                  </svg>
                </button>
                <div className="main__product__content__quantity__value">2</div>
                <button className="main__product__content__quantity__max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.31"
                    height="17.31"
                    viewBox="0 0 17.31 17.31"
                    fill="currentColor"
                  >
                    <path
                      id="Icon_ionic-md-add"
                      data-name="Icon ionic-md-add"
                      d="M24.06,16.559h-7.5v7.5H14.251v-7.5H6.75V14.251h7.5V6.75h2.308v7.5h7.5Z"
                      transform="translate(-6.75 -6.75)"
                    />
                  </svg>
                </button>
              </div>
              <div className="main__product__content__price">
                <div>
                  <span style={{ textDecoration: "line-through" }}>$50</span>
                </div>
                <div>
                  <span>price</span>
                  $50
                </div>
              </div>
            </div>
            <div className="main__product__content__row">
              {/* <StarRatings
                rating={2.403}
                starDimension="25px"
                starSpacing="5px"
                starRatedColor="#50D9C2"
              /> */}

              <Link
                to="/"
                className="main__home__section__overlay__content__left__btn"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>

        <form className="review__form">
          <div className="review__form__heading">Write a Review</div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="review__form__textarea"
            placeholder="Enter Review Here"
          />
          <Link
            to="/"
            className="main__home__section__overlay__content__left__btn"
          >
            Publish
          </Link>
        </form>
      </div>

      <div className="hero__section__reverse">
        {/* <img
          src={HomeBG}
          alt="hero__section__bg"
          className="hero__section__bg"
        /> */}
        <div className="hero__section__overlay__reverse">
          <div className="hero__section__overlay__reverse__text">
            Similar Products
          </div>
          <div className="product__catagories__content__row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}
