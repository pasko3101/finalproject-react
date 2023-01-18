import React from "react";
import { useSelector } from "react-redux";
import "../components/favorites/scss/favorites.scss";
import Cards from "../components/mainpage/Cards";

const Favorites = () => {
  const favorites = useSelector((store) => store.favorites);

  if (favorites.length > 0) {
    return (
      <div className="favorites__container">
        <h1 className="favorites__title">Saved items</h1>
        <p className="favorites__count">{favorites.length} items</p>
        <div className="favorites__card">
          {favorites.map((item) => (
            <Cards value={item} key={`favorites__${item.id}`}></Cards>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites__container favorites__container_bg">
      <p className="favorites__nothing favorites__nothing_smile">:(</p>
      <p className="favorites__nothing">... so nothing is selected</p>
    </div>
  );
};
export default Favorites;
