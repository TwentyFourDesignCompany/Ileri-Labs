import React, { useState } from "react";
import section_pic2 from "../Assets/2st_section_pic.png";
import createSellPic from "../Assets/createSellPic.png";
import TestimonialsSection from "../Components/TestimonialsSection";
import main_home_bg from "../Assets/main_home_bg.png";
import main_home_pic from "../Assets/main_home_pic.png";
import sec_home_pic from "../Assets/2_home_pic.png";
import textBeforePic from "../Assets/textBeforePic.png";
import textBeforeimg from "../Assets/textBeforeimg.png";
import reliable_bg from "../Assets/reliable_bg.png";
import showCardSvg from "../Assets/showCardSvg.png";
import product_card_img from "../Assets/product_card_img.png";
import creativity1 from "../Assets/creativity1.png";
import third_home_pic from "../Assets/third_home_pic.png";
import testimonial_Bg from "../Assets/testimonial_Bg.png";
import testimonial__pic from "../Assets/testimonial__pic.png";
import testimonial__pic2 from "../Assets/testimonial__pic2.png";
import testimonial__pic3 from "../Assets/testimonial__pic3.png";
import testimonial__pic4 from "../Assets/testimonial__pic4.png";
import testimonial__pic5 from "../Assets/testimonial__pic5.png";
import { Link } from "react-router-dom";
import "animate.css";
import ProductCard from "../Components/ProductCard";

function TestimonialBtn({ onClick, isNext, setIsNext, img, defaultChecked }) {
  return (
    <div className="testimonials__new__section__content__btn">
      <input
        type="radio"
        className="testimonials__new__section__content__btn__input"
        onClick={() => {
          setIsNext(img);
        }}
        defaultChecked={defaultChecked}
      />
      <img
        src={img}
        alt="testimonial__pic"
        className="testimonials__new__section__content__btn__img"
      />
    </div>
  );
}

function ShowCard() {
  return (
    <div className="proven__main__section__content__card">
      <div className="proven__main__section__content__card__header">
        <div className="proven__main__section__content__card__header__left">
          <img
            src={creativity1}
            alt="creativity1"
            className="proven__main__section__content__card__header__left__img"
          />
        </div>
        <div className="proven__main__section__content__card__header__right">
          <img
            src={showCardSvg}
            alt="showCardSvg"
            className="proven__main__section__content__card__header__right__img"
          />
        </div>
      </div>
      <div className="proven__main__section__content__card__heading">
        Your own logo & branding
      </div>
    </div>
  );
}

export default function HomeScreen() {
  const [isNext, setIsNext] = useState(testimonial__pic);
  return (
    <>
      <div className="main__home__section">
        <img
          src={main_home_bg}
          alt="main_home_bg"
          className="main__home__section__img"
        />
        <div className="main__home__section__overlay">
          <div className="main__home__section__overlay__content">
            <div className="main__home__section__overlay__content__left">
              <div className="main__home__section__overlay__content__left__heading heading">
                Manufacture
                <span>.</span> <br /> Formulate
                <span>.</span> Brand
                <span>.</span>
              </div>
              <div className="main__home__section__overlay__content__left__para">
                Nigeria’s first ever private label{" "}
                <span>natural cosmetics brand</span> created to help anyone with
                passion launch their very own safe and effective skincare or
                haircare brand.
              </div>
              <Link
                to="/"
                className="main__home__section__overlay__content__left__btn"
              >
                learn more
              </Link>
            </div>
            <div className="main__home__section__overlay__content__right">
              <img
                src={main_home_pic}
                alt="main_home_pic"
                className="main__home__section__overlay__content__right__img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sec_home__section">
        <img
          src={sec_home_pic}
          alt="sec_home_pic"
          className="sec_home__section__img"
        />
        <div className="sec_home__section__content">
          <div className="sec_home__section__content__wrapper">
            <div
              style={{ color: "#e8985d", fontWeight: "normal" }}
              className="sub__heading"
            >
              Choose from skin care, hair care or supplements to design as your
              own.
            </div>
            <div className="main__home__section__overlay__content__left__heading heading">
              East<span>.</span> Profitable<span>.</span> Proven<span>.</span>
            </div>

            <div
              style={{ fontSize: 20, marginBottom: 0, marginTop: "1em" }}
              className="sub__heading heading"
            >
              Choose Your Products
            </div>

            <div className="paragraph ">
              Pick any products you are interested in launching and add to cart.
              Make sure to check the details of each product to be sure it’s in
              line with the solution you hope to provide to your customers.
            </div>
            <div
              style={{ fontSize: 20, marginTop: 14, marginBottom: 0 }}
              className="sub__heading heading"
            >
              Make Payment
            </div>

            <div className="paragraph">
              Make payment and check out from your cart. Delivery timelines will
              depend on the products you choose. Our lead time is usually
              between 4 to 8 weeks.
            </div>
            <div
              style={{ fontSize: 20, marginTop: 14, marginBottom: 0 }}
              className="sub__heading heading"
            >
              Launch Your Brand
            </div>
            <div className="paragraph" style={{ marginBottom: "1em" }}>
              Once products are received, you can brand with your labels and
              launch. We also have free basic branding for new clients. Terms
              and conditions apply.
            </div>

            <div className="paragraph main__container__paragraph">
              1 - Low minimum order quantity
            </div>
            <div className="paragraph main__container__paragraph">
              2 - Safe and effective products
            </div>
            <div className="paragraph main__container__paragraph">
              3 - Worked with over 30 brands to launch their brands
            </div>
            <div className="paragraph main__container__paragraph">
              4 - Free basic branding available for first time clients
            </div>
            <div className="paragraph main__container__paragraph">
              5 - Test our products before you commit to production
            </div>
            <Link
              to="/"
              className="main__home__section__overlay__content__left__btn"
            >
              Shop Samples
            </Link>
          </div>
        </div>
      </div>

      <div className="textBefore__section">
        <img
          src={textBeforePic}
          alt="textBeforePic"
          className="textBefore__section__img"
        />
        <div className="textBefore__section__overlay">
          <div className="textBefore__section__content">
            <div className="textBefore__section__left">
              <img
                src={textBeforeimg}
                alt="textBeforeimg"
                className="textBefore__section__left__img"
              />
            </div>
            <div className="textBefore__section__right">
              <div className="textBefore__section__right__heading heading">
                Test Before You <br /> Invest
              </div>
              <div className="paragraph textBefore__section__right__para">
                Ileri-labs allows entrepreneurs and small businesses to create
                their skin care line in minutes with high-end, organic products
                at the lowest market minimums!
              </div>
              <Link
                to="/"
                className="main__home__section__overlay__content__left__btn__white"
              >
                Shop Samples
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="create__sell__repeat__section">
        <div className="create__sell__repeat__section__content">
          <img
            src={createSellPic}
            alt="createSellPic"
            className="create__sell__repeat__section__content__img"
          />
          <div className="create__sell__repeat__section__content__left">
            <div className="main__home__section__overlay__content__left__heading heading">
              Manufacture
              <span>.</span> <br /> Formulate
              <span>.</span> Brand
              <span>.</span>
            </div>
            <div className="sub__heading create__sell__repeat__section__content__subheading">
              Creating Your Own Beauty Brand is Officially Now Within Reach
            </div>
            <div className=" heading">
              Thinking about starting your own white label beauty brand?
            </div>
            <div className="paragraph">
              Ileri-labs allows entrepreneurs and small businesses to create
              their skin care line in minutes with high-end, organic products at
              the lowest market minimums!
            </div>
            <div className="paragraph">
              There's no need to source products overseas, order lots of
              inventory or hire a designer. We've got you covered. Plus, we
              deliver products right to your doorstep in weeks, not months.
            </div>
            <Link
              to="/"
              className="main__home__section__overlay__content__left__btn"
            >
              Shop Samples
            </Link>
          </div>
        </div>
      </div>
      <div className="we__are__best__section">
        <div className="we__are__best__section__content">
          <div
            style={{ marginBottom: ".6em" }}
            className="main__home__section__overlay__content__left__heading heading"
          >
            Why We're The <span>Best</span>
          </div>

          <div class="Rtable Rtable--4cols">
            <div class="Rtable-cell">
              <div
                style={{ fontWeight: 600 }}
                className="paragraph we__are__best__section__content__paragraph"
              >
                PRIVATE LABEL
              </div>
            </div>
            <div
              style={{ fontWeight: 600 }}
              class="Rtable-cell paragraph we__are__best__section__content__paragraph"
            >
              VS
            </div>
            <div
              style={{ fontWeight: 600 }}
              class="Rtable-cell paragraph we__are__best__section__content__paragraph"
            >
              ILERI LABS
            </div>
            <div class="Rtable-cell paragraph we__are__best__section__content__paragraph">
              500 Pcs
            </div>

            <div class="Rtable-cell">
              <div className="paragraph we__are__best__section__content__paragraph">
                MOQ
              </div>
            </div>
            <div class="Rtable-cell paragraph we__are__best__section__content__paragraph">
              2 Dozens
            </div>
            <div class="Rtable-cell paragraph we__are__best__section__content__paragraph">
              $500+
            </div>
            <div class="Rtable-cell paragraph we__are__best__section__content__paragraph">
              FORMULATION FEES
            </div>

            <div class="Rtable-cell">
              <div className="paragraph we__are__best__section__content__paragraph">
                $200+
              </div>
            </div>
            <div class="Rtable-cell paragraph we__are__best__section__content__paragraph">
              CHARGES FOR LABEL & PACKAGE
            </div>
            <div class="Rtable-cell paragraph we__are__best__section__content__paragraph">
              LABELLING SERVICES
            </div>
            <div class="Rtable-cell paragraph we__are__best__section__content__paragraph">
              FREE
            </div>
            <div class="Rtable-cell">
              <div className="paragraph we__are__best__section__content__paragraph">
                POPULAR INGREDIENTS
              </div>
            </div>
            <div class="Rtable-cell paragraph we__are__best__section__content__paragraph">
              INGREDIENTS
            </div>
            <div class="Rtable-cell paragraph we__are__best__section__content__paragraph">
              ORGANIC
            </div>
            <div class="Rtable-cell">
              <div className="paragraph we__are__best__section__content__paragraph">
                MINIMAL ATTENTION
              </div>
            </div>
            <div class="Rtable-cell paragraph we__are__best__section__content__paragraph">
              CUSTOMER SERVICE
            </div>
            <div class="Rtable-cell paragraph we__are__best__section__content__paragraph">
              HIGHLY EFFECTIVE
            </div>
          </div>
          <Link
            to="/"
            className="main__home__section__overlay__content__left__btn__black"
          >
            How It Works
          </Link>
        </div>
      </div>
      <div className="reliable__section">
        <img
          src={reliable_bg}
          alt="reliable_bg"
          className="reliable__section__img"
        />
        <div className="reliable__section__overlay">
          <div className="reliable__section__overlay__content">
            <div className="reliable__section__overlay__content__left">
              <div className="main__home__section__overlay__content__left__heading heading">
                East<span>.</span> Profitable<span>.</span> <br /> Proven
                <span>.</span>
              </div>
              <div className="heading">Launch Your Brand</div>
              <div style={{ margin: "1.5em 0em" }} className="paragraph">
                Once products are received, you can brand with your labels and
                launch. We also have free basic branding for new clients. Terms
                and conditions apply.
              </div>

              <div className="paragraph main__container__paragraph">
                1 - Low minimum order quantity
              </div>
              <div className="paragraph main__container__paragraph">
                2 - Safe and effective products
              </div>
              <div className="paragraph main__container__paragraph">
                3 - Worked with over 30 brands to launch their brands
              </div>
              <div className="paragraph main__container__paragraph">
                4 - Free basic branding available for first time clients
              </div>
              <div className="paragraph main__container__paragraph">
                5 - Test our products before you commit to production
              </div>
              <Link
                to="/"
                className="main__home__section__overlay__content__left__btn"
              >
                Shop Samples
              </Link>
            </div>
            <div className="reliable__section__overlay__content__right">
              <ProductCard isClass="new__product__card__showcase" />
              <ProductCard isClass="new__product__card__showcase" />
            </div>
          </div>
        </div>
      </div>
      <div className="proven__main__section">
        <div className="proven__main__section__content">
          <div
            style={{ textAlign: "center" }}
            className="main__home__section__overlay__content__left__heading heading"
          >
            East<span>.</span> Profitable<span>.</span>
            <br /> Proven<span>.</span>
          </div>
          <div className="proven__main__section__content__cards__wrapper">
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
            <ShowCard />
          </div>
        </div>
      </div>
      <div className="sec_home__section">
        <img
          src={third_home_pic}
          alt="third_home_pic"
          className="sec_home__section__img"
        />
        <div className="sec_home__section__content">
          <div className="sec_home__section__content__wrapper">
            <div className="main__home__section__overlay__content__left__heading heading">
              Manufacture
              <span>.</span> <br /> Formulate
              <span>.</span> Brand
              <span>.</span>
            </div>
            <div
              style={{ color: "#e8985d", fontWeight: "normal" }}
              className="sub__heading"
            >
              Creating Your Own Beauty Brand is Officially Now Within Reach
            </div>
            <div
              style={{ fontSize: 20, marginBottom: 0, marginTop: "1em" }}
              className="heading"
            >
              Thinking about starting your own white label beauty brand?
            </div>

            <div className="paragraph ">
              Ileri-labs allows entrepreneurs and small businesses to create
              their skin care line in minutes with high-end, organic products at
              the lowest market minimums! There's no need to source products
              overseas, order lots of inventory or hire a designer. We've got
              you covered. Plus, we deliver products right to your doorstep in
              weeks, not months.
            </div>

            <Link
              to="/"
              className="main__home__section__overlay__content__left__btn"
            >
              Shop Samples
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="unbottle__section">
        <div className="unbottle__section__content">
          <img
            src={unbottlePic}
            alt="unbottlePic"
            className="unbottle__section__content__img"
          />
          <div className="unbottle__section__content__left">
            <div className="typewriter__heading">
              <Typewriter
                options={{
                  strings: [
                    "Unbottle Your Potential . . . .",
                    "Unbottle Your Potential . . . .",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </div>
            <div className="paragraph">
              Launching your own beauty brand has never been this easy.
            </div>
            <div className="paragraph">
              Our aim is to build a place where launching your skin & hair care
              product line is as easy, efficient, affordable and rewarding as it
              is limitless.
            </div>
          </div>
        </div>
      </div> */}
      <div className="testimonials__new__section">
        <img
          src={testimonial_Bg}
          alt="testimonial_Bg"
          className="testimonials__new__section__img"
        />
        <div className="testimonials__new__section__overlay">
          <div className="testimonials__new__section__content">
            {isNext === testimonial__pic ? (
              <div className="testimonials__new__section__content__card animate__animated animate__fadeInDown">
                <div className="testimonials__new__section__content__card__para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  in vulputate pellentesque justo et tortor tempor viverra
                  congue. in vulputate pellentesque justo et tortor tempor
                  viverra congue. in vulputate pellentesque justo et tortor
                  tempor viverra congue. in vulputate pellentesque justo et
                  tortor tempor viverra congue.
                </div>
                <div className="testimonials__new__section__content__card__footer">
                  <div className="testimonials__new__section__content__card__author">
                    Emily Jones
                  </div>
                  <div className="testimonials__new__section__content__card__designation">
                    - CEO Company
                  </div>
                </div>
              </div>
            ) : null}
            {isNext === testimonial__pic2 ? (
              <div className="testimonials__new__section__content__card animate__animated animate__fadeInDown">
                <div className="testimonials__new__section__content__card__para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  in vulputate pellentesque justo et tortor tempor viverra
                  congue. in vulputate pellentesque justo et tortor tempor
                  viverra congue. in vulputate pellentesque justo et tortor
                  tempor viverra congue. in vulputate pellentesque justo et
                  tortor tempor viverra congue. viverra congue. in vulputate
                  pellentesque justo et tortor tempor viverra congue. in
                  vulputate pellentesque justo et tortor tempor viverra congue.
                </div>
                <div className="testimonials__new__section__content__card__footer">
                  <div className="testimonials__new__section__content__card__author">
                    John Dow
                  </div>
                  <div className="testimonials__new__section__content__card__designation">
                    - CEO Industries
                  </div>
                </div>
              </div>
            ) : null}
            {isNext === testimonial__pic3 ? (
              <div className="testimonials__new__section__content__card animate__animated animate__fadeInDown">
                <div className="testimonials__new__section__content__card__para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  in vulputate pellentesque justo et tortor tempor viverra
                  congue. in vulputate pellentesque justo et torto
                </div>
                <div className="testimonials__new__section__content__card__footer">
                  <div className="testimonials__new__section__content__card__author">
                    Black Adam
                  </div>
                  <div className="testimonials__new__section__content__card__designation">
                    - CTO Company
                  </div>
                </div>
              </div>
            ) : null}
            {isNext === testimonial__pic4 ? (
              <div className="testimonials__new__section__content__card animate__animated animate__fadeInDown">
                <div className="testimonials__new__section__content__card__para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  in vulputate pellentesque justo et tortor tempor viverra
                  congue. in vulputate pellentesque justo et tortor tempor
                  viverra congue. in vulputate pellentesque justo et tortor
                  tempor viverra congue. in vulputate pellentesque justo et
                  tortor tempor viverra congue. tortor tempor viverra congue.
                  tortor tempor viverra congue. tortor tempor viverra congue.
                </div>
                <div className="testimonials__new__section__content__card__footer">
                  <div className="testimonials__new__section__content__card__author">
                    Emily Jones
                  </div>
                  <div className="testimonials__new__section__content__card__designation">
                    - CEO Company
                  </div>
                </div>
              </div>
            ) : null}
            {isNext === testimonial__pic5 ? (
              <div className="testimonials__new__section__content__card animate__animated animate__fadeInDown">
                <div className="testimonials__new__section__content__card__para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  in vulputate pellentesque justo et tortor tempor viverra
                  congue. in vulputate pellentesque justo et tortor tempor
                  viverra congue. in vulputate pellentesque justo et tortor
                  tempor viverra congue. in vulputate pellentesque justo et
                  tortor tempor viverra congue. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Vitae in vulputate pellentesque
                  justo et tortor tempor viverra congue. in vulputate
                  pellentesque justo et tortor tempor viverra congue. in
                  vulputate pellentesque justo et tortor tempor viverra congue.
                  in vulputate pellentesque justo et tortor tempor viverra
                  congue.
                </div>
                <div className="testimonials__new__section__content__card__footer">
                  <div className="testimonials__new__section__content__card__author">
                    Jones Adam
                  </div>
                  <div className="testimonials__new__section__content__card__designation">
                    - CEO Company
                  </div>
                </div>
              </div>
            ) : null}
            <div className="testimonials__new__section__content__wrapper">
              <TestimonialBtn
                defaultChecked={true}
                img={testimonial__pic}
                isNext={isNext}
                setIsNext={setIsNext}
              />
              <TestimonialBtn
                img={testimonial__pic2}
                isNext={isNext}
                setIsNext={setIsNext}
              />
              <TestimonialBtn
                img={testimonial__pic3}
                isNext={isNext}
                setIsNext={setIsNext}
              />
              <TestimonialBtn
                img={testimonial__pic4}
                isNext={isNext}
                setIsNext={setIsNext}
              />
              <TestimonialBtn
                img={testimonial__pic5}
                isNext={isNext}
                setIsNext={setIsNext}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
