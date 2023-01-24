import React from "react";
import HeaderSale from "./mainpage/HeaderSale";
import HeroScreen from "./mainpage/HeroScreen";
import Slider from "../components/Slider";
import PictureBlock from "./mainpage/PictureBlock";
import Exclusively from "./mainpage/Exclusively";
import MainPicture from "./mainpage/MainPicture";
import Brands from "../components/Brands";
import SlideApiFirst from "../api/SlideApiFirst";
import SlideApiSecond from "../api/SlideApiSecond";
const Home = () => {
  return (
    <>
      <HeaderSale />
      <HeroScreen />
      <Slider prod={SlideApiFirst} sliderTitle="New arrivals" />
      <PictureBlock />
      <Slider
        prod={SlideApiSecond}
        className="glide2"
        sliderTitle="Our picks for you"
      />
      <Exclusively />
      <MainPicture />
      <Brands />
    </>
  );
};
export default Home;
