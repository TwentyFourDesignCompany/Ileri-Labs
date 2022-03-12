import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import logo from "../Assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "react-feather";
import { Link } from "react-router-dom";
import "animate.css";

function NavLink({ to, children, setIsNavOpen, dropDownOptions, svg }) {
  const navigate = useNavigate();
  return (
    <div className="header__wrapper__nav__link">
      <input
        type="radio"
        className="header__wrapper__nav__link__input"
        name="header__wrapper__nav__link__input"
        onClick={() => {
          if (!dropDownOptions) {
            navigate(to);
          }
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          if (window.innerWidth < 1050) {
            setIsNavOpen(false);
          }
        }}
      />
      <div className="header__wrapper__nav__link__content">
        {children} {svg ? svg : null}
      </div>
      {dropDownOptions && (
        <div className="header__wrapper__nav__link__overlay">
          {dropDownOptions &&
            dropDownOptions.map((option, i) => (
              <Link
                to={option.to}
                key={i}
                className="header__wrapper__nav__link__overlay__link"
              >
                {option.name}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}

export default function Header({ setIsSignIn }) {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 1050) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1050) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    });
  }, []);
  return (
    <div className="header animate__animated animate__animated">
      <Marquee
        delay={0}
        speed={50}
        pauseOnHover
        style={{
          backgroundColor: "#EB6244",
          color: "#ffffff",
          padding: ".5em .5em",
          fontSize: 16,
        }}
        gradient={false}
      >
        Order a Sample Kit to design and test your own brand of products.
      </Marquee>
      <div className="header__wrapper">
        <Link to="/" className="header__wrapper__logo">
          <img src={logo} alt="logo" className="header__wrapper__logo__img" />
        </Link>
        <button
          className="header__wrapper__menu"
          onClick={() => {
            isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
          }}
        >
          {isNavOpen ? (
            <X size={20} color="currentColor" />
          ) : (
            <Menu size={20} color="currentColor" />
          )}
        </button>
        {isNavOpen ? (
          <div className="header__wrapper__nav">
            <NavLink to="/" id="" setIsNavOpen={setIsNavOpen}>
              Home
            </NavLink>
            <NavLink to="/sample-product" id="" setIsNavOpen={setIsNavOpen}>
              Get a text kit
            </NavLink>
            <NavLink to="/what-we-are" id="" setIsNavOpen={setIsNavOpen}>
              What we do
            </NavLink>
            <NavLink
              to="/"
              id=""
              setIsNavOpen={setIsNavOpen}
              dropDownOptions={[
                {
                  name: "Sample",
                  to: "/sample-product",
                },
                {
                  name: "High-End Quality",
                  to: "/products",
                },
                {
                  name: "HEMP Quality",
                  to: "/products",
                },
                {
                  name: "Garment",
                  to: "/products",
                },
                {
                  name: "Lorem Ipsm",
                  to: "/products",
                },
                {
                  name: "Others",
                  to: "/products",
                },
              ]}
            >
              Products
            </NavLink>
            <NavLink to="/blog" id="" setIsNavOpen={setIsNavOpen}>
              Blog
            </NavLink>
            <NavLink to="/faq" id="" setIsNavOpen={setIsNavOpen}>
              FAQ
            </NavLink>
            <button
              onClick={() => {
                setIsSignIn(true);
              }}
              style={{ margin: 0 }}
              className="main__home__section__overlay__content__left__btn"
            >
              <div className="btn__primary__content">
                Sign In
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-log-in"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg> */}
              </div>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
