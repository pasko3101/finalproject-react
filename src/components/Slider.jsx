import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Glide from "@glidejs/glide";
import Cards from "./Cards";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
const glideConfig = {
  perView: 4,
  // startAt: 0,
  // focusAt: 0,
  // type: "carousel",
  autoplay: 2000,
  // keyboard: true,
  animationTimingFunc: "linear",
};

const Slider = ({ sliderTitle, prod = [], className = "glide" }) => {
  const slider = new Glide(`.${className}`, glideConfig);

  useEffect(() => {
    slider.mount();
  }, [slider]);
  return (
    <div className="slider__container">
      <div className={`${className} slider__width-fix`}>
        <div className="slider__arrrow-wrap">
          <Link to="/" className="slider__title">
            {sliderTitle}
          </Link>
          <div className="glide__arrows glide__style" data-glide-el="controls">
            <button className="glide__style" data-glide-dir="<">
              <BsArrowLeft className="arrow__glide arrow__glide_left" />
            </button>
            <button className="glide__style" data-glide-dir=">">
              <BsArrowRight className="arrow__glide" />
            </button>
          </div>
        </div>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {prod.map((item) => {
              return (
                <li className="glide__slide" key={`slide_${item.id}`}>
                  <Cards value={item} key={`slide__${item.id}`}></Cards>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Slider;
