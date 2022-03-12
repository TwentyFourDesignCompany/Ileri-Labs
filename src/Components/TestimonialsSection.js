import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialsCard from "./TestimonialsCard";

export default function TestimonialsSection() {
  const [screenSize, setScreenSize] = useState("large");
  useEffect(() => {
    if (window.innerWidth < 600) {
      setScreenSize("small");
    } else if (window.innerWidth < 1100) {
      setScreenSize("medium");
    } else {
      setScreenSize("large");
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 600) {
        setScreenSize("small");
      } else if (window.innerWidth < 1100) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    });
  }, []);
  return (
    <section className="testmonials__section" id="testimonials__section">
      <div className="testmonials__section__content">
        <div className="heading testmonials__section__content__heading">
          CLIENT TESTIMONIALS
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={
            screenSize === "large"
              ? 2.6
              : screenSize === "medium"
              ? 1.6
              : screenSize === "small"
              ? 1
              : 3.5
          }
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <TestimonialsCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
