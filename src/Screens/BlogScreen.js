import React from "react";
import { Link } from "react-router-dom";
import blogPic from "../Assets/blogPic.png";

function BlogCard() {
  return (
    <Link to="/blog-details" className="blog__section__content__card">
      <div className="blog__section__content__card__img__wrapper">
        <img
          src={blogPic}
          alt="blogPic"
          className="blog__section__content__card__img"
        />
      </div>
      <div className="blog__section__content__card__content">
        <div className="heading">
          Boost Your Brand with Influencer Marketing
        </div>
        <div style={{ marginBottom: "1em" }} className="paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
          nihil? Numquam molestiae, ipsa laboriosam magni, magnam eaque
        </div>
        <a
          href=""
          className="paragraph blog__section__content__card__view__more"
        >
          View More
        </a>
      </div>
    </Link>
  );
}

export default function BlogScreen() {
  return (
    <div className="blog__section">
      <div className="blog__section__content">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
