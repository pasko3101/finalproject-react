import React from "react";
import HeaderSale from "../components/mainpage/HeaderSale";
import HeroScreen from "../components/mainpage/HeroScreen";
import Slider from "../components/mainpage/Slider";
import PictureBlock from "../components/mainpage/PictureBlock";
import Exclusively from "../components/mainpage/Exclusively";
import MainPicture from "../components/mainpage/MainPicture";
import Brands from "../components/mainpage/Brands";
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
