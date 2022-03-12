import React from "react";
import blogPic from "../Assets/blogPic.jpg";
import createSellPic from "../Assets/createSellPic.png";

export default function BlogDetails() {
  return (
    <>
      <div className="blog__details__section">
        <img
          src={blogPic}
          alt="blogPic"
          className="blog__details__section__img"
        />
      </div>
      <div className="blog__details__section__content">
        <div className="blog__details__section__content__left">
          <div className="blog__details__section__content__left__heading">
            Boost Your Brand With Influencer Marketing
          </div>
          <div className="blog__details__section__content__left__heading__sub">
            Blog Sub title
          </div>
          <div className="blog__details__section__content__left__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            voluptatum magnam consequuntur quibusdam unde delectus obcaecati
            pariatur ad harum. Maxime reprehenderit, illum culpa vitae alias
            recusandae assumenda quas quisquam placeat, doloremque animi
            deserunt iure magnam, quia dolor numquam distinctio fuga eaque
            labore quam illo modi! Ratione animi minima cumque dolorem
            consectetur eaque eveniet rerum error quas. Praesentium est omnis
            cupiditate.
          </div>
          <div className="blog__details__section__content__left__para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            dignissimos quisquam ullam, corrupti, porro aliquid veritatis autem
            similique officia magnam dicta modi? Impedit illum ipsam et
            doloribus non vitae eos temporibus neque laborum eveniet esse, saepe
            velit placeat fugiat inventore!
          </div>
        </div>
        <img
          src={createSellPic}
          alt="createSellPic"
          className="blog__details__section__content__img"
        />
      </div>
    </>
  );
}
