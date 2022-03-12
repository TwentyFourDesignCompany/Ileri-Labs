import React from "react";
import newAbout from "../Assets/HomeBG.png";
import founder from "../Assets/founder.jpg";
import how1 from "../Assets/how1.gif";
import how2 from "../Assets/how2.gif";
import how3 from "../Assets/how3.gif";
import how4 from "../Assets/how4.gif";
import { Link } from "react-router-dom";

export default function WhatWeAre() {
  return (
    <>
      <div className="get__started__section">
        <div className="get__started__section__content">
          <img
            src={newAbout}
            alt="newAbout"
            className="get__started__section__content__img"
          />

          <div className=" get__started__section__content__right get__started__section__content__right__2nd">
            <div className="heading get__started__section__heading">
              WHO WE ARE
            </div>
            <div className="paragraph">
              We are the first-ever online platform for custom-branded personal
              care products for the skin, hair and nails. Personalize your label
              for your very own beauty line for your spa, salon, boutique, or
              business.
            </div>

            <div className="paragraph">
              Our aim is to build a place where launching your skin care brand
              is as easy, efficient, affordable and rewarding as it is
              limitless.
            </div>

            <div className="paragraph">
              We leverage science, expertise and nature to deliver the most
              potent formulations in the skin care and beauty industry. All of
              our products are made in-house by our chemists in St. Petersburg,
              Florida using high-end, domestic and imported ingredients.
            </div>

            <Link
              to="/product-details"
              className="main__home__section__overlay__content__left__btn"
            >
              Shop Samples
            </Link>
          </div>
        </div>
      </div>
      <div className="easy__proven__profit__section">
        <div className="heading easy__proven__profit__section__heading">
          EASY. PROFITABLE. PROVEN.
        </div>
        <div className="easy__proven__profit__section__content">
          <div className="easy__proven__profit__section__content__card">
            <img
              src={how1}
              alt="how1"
              className="easy__proven__profit__section__content__card__img"
            />
            <div className="easy__proven__profit__section__content__card__heading">
              Sign up
            </div>
            <div className="paragraph easy__proven__profit__section__content__card__para">
              Step 1 for creating your brand
            </div>
          </div>
          <div className="easy__proven__profit__section__content__card">
            <img
              src={how2}
              alt="how1"
              className="easy__proven__profit__section__content__card__img"
            />{" "}
            <div className="easy__proven__profit__section__content__card__heading">
              Pick Your Products
            </div>
            <div className="paragraph easy__proven__profit__section__content__card__para">
              Choose your quantity & packaging style
            </div>
          </div>
          <div className="easy__proven__profit__section__content__card">
            <img
              src={how3}
              alt="how1"
              className="easy__proven__profit__section__content__card__img"
            />{" "}
            <div className="easy__proven__profit__section__content__card__heading">
              Free Label Design
            </div>
            <div className="paragraph easy__proven__profit__section__content__card__para">
              Send us your design requests & art files
            </div>
          </div>
          <div className="easy__proven__profit__section__content__card">
            <img
              src={how4}
              alt="how1"
              className="easy__proven__profit__section__content__card__img"
            />{" "}
            <div className="easy__proven__profit__section__content__card__heading">
              Start Selling Your Brand
            </div>
            <div className="paragraph easy__proven__profit__section__content__card__para">
              Receive your personalized skin care line
            </div>
          </div>
        </div>
      </div>
      <div className="get__started__section">
        <div className="get__started__section__content">
          <img
            src={founder}
            alt="founder"
            className="get__started__section__content__img"
          />

          <div className=" get__started__section__content__right get__started__section__content__right__2nd">
            <div className="heading get__started__section__heading">
              FOUNDER PROFILE
            </div>
            <div className="paragraph">
              Seun Olarewaju started Ileri Labs in 2016 after the birth of her
              first daughter, making her first batch of soaps on her kitchen
              counter and selling them from there.
            </div>

            <div className="paragraph">
              Formerly called SoapBox NG, Seun sold her soaps as retail to
              friends, family & church members. Her lightbulb moment came when
              she tried including lotions to her product listing. She then
              researched those who could make them for her, and that's how she
              discovered private labelling. She realized at that point, that no
              one in Nigeria offered such service solely for those looking to
              start their natural skincare brand, as all the companies she found
              were either in Asia or North America.
            </div>

            <div className="paragraph">
              From trying to be the solution to the problem she faced, she
              launched SoapBox NG and renamed it Ileri Labs after she got
              certifications from British online schools where she learnt how to
              make well preserved water based products other than the anhydrous
              products she had previously made.
            </div>
            <div
              style={{ marginTop: "2em" }}
              className="testimonials__new__section__content__card__footer"
            >
              <div className="testimonials__new__section__content__card__author">
                Olúwaseun Olarewaju
              </div>
              <div className="testimonials__new__section__content__card__designation">
                - Founder/CEO
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
