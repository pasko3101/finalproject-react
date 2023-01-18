import React from "react";
import HeartIcon from "./heart";
import { Link } from "react-router-dom";
import useFavorite from "../hooks/useFavorite";

const Cards = ({ value }) => {
  const { image, price, title, description, id } = value;
  const { inFavorites, toggleFavorites } = useFavorite(id, value);

  return (
    <div className="cards__wrapps">
      <div className="cards__item">
        <button
          className="сard__heart card__heart_favorite"
          onClick={() => {
            toggleFavorites();
          }}
        >
          <HeartIcon
            className={`card__heart_item ${
              inFavorites() ? "card__heart_active" : null
            }`}
          />
        </button>
        <img src={image} alt={title} className="img__card" />
        <Link to={`/product/${id}`} className="card__tdn">
          <p className="cards__title" title={title}>
            {title}
          </p>
        </Link>
        <Link className="card__tdn">
          <p className="cards__description">{description}</p>
        </Link>
        <p className="cards__price">${price}</p>
      </div>
    </div>
  );
};
export default Cards;
