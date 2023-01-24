import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";
import SlideApiSecond from "../api/SlideApiSecond";
import StarRating from "../components/StarRating";
import { Loader } from "../components/Loader";
import axios from "axios";
import SizeBar from "../components/SizeBar";
import useFavorite from "../hooks/useFavorite";
import { HeartIcon } from "../img/icons";
import { cartAdd } from "../store/actions/cartAction";
import { useDispatch } from "react-redux";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState({});
  const { id } = useParams();
  const [size, setSize] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setProductData(data);
      setLoading(false);
    });
  }, [id]);
  const { title, price, description, category, image, rating } = productData;
  const { inFavorites, toggleFavorites } = useFavorite(
    productData.id,
    productData
  );
  return loading ? (
    <Loader />
  ) : (
    <div className="product">
      <div className="product__container">
        <p className="product__bread">Home / Clothing / {category}</p>
        <div className="product__info">
          <img src={image} alt="ProductImg" className="product__img" />
          <div className="product__info__wrap">
            <h2 className="product__info__title">{title}</h2>
            <StarRating rate={Math.round(rating?.rate)} vote={rating?.count} />
            <p className="product__price">${price}</p>
            <div className="product__selectcolor-wrap">
              <p className="product__subtitle">Select color:</p>
              <p className="product__subcolor">White/red patterned</p>
            </div>
            <div className="product__color-wrap">
              <div className="product__red"></div>
              <div className="product__violet"></div>
            </div>
            <div className="product__info">
              <p className="product__subtitle">Select size:</p>
              <p className="product__subtitle">Size guide</p>
            </div>
            <SizeBar setSize={setSize} size={size} />
            <div className="product__add">
              <button
                className="exclusively__btn product__btn"
                onClick={() => {
                  dispatch(
                    cartAdd({
                      ...productData,
                      size: size,
                      costDelivery: 5,
                      count: 1,
                      itemId: new Date().getTime(),
                    })
                  );
                }}
              >
                Add to cart
              </button>

              <button
                className="product__btn__favorites"
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
            </div>
            <h3 className="product__title">Product details</h3>
            <p className="product__subt">{description}</p>
          </div>
        </div>
        <Slider
          prod={SlideApiSecond}
          className="glide2"
          sliderTitle="Our picks for you"
        />
      </div>
    </div>
  );
};
export default Product;
