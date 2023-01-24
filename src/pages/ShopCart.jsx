import React, { useState, useEffect } from "react";
import Slider from "../components/Slider";
import SlideApiSecond from "../api/SlideApiSecond";
import Brands from "../components/Brands";
import ShopCartItem from "./shopcart/ShopCartItem";
import ShopCartOrder from "./shopcart/ShopCartOrder";
import { useSelector } from "react-redux";
import ShopCartClean from "./shopcart/ShopCartClear";

const ShopBag = () => {
  const [subtotal, setSubtotal] = useState(0);
  const shopingCart = useSelector((store) => store.cart);

  useEffect(() => {
    const sum = shopingCart.reduce((accumulator, item) => {
      return accumulator + item.price * item.count;
    }, 0);
    const shipingSum = shopingCart.reduce((accumulator, item) => {
      return accumulator + item.costDelivery * item.count;
    }, 0);

    setSubtotal({ sum, shipingSum });
  }, [shopingCart]);

  if (subtotal.sum > 0) {
    return (
      <div className="shopcard">
        <p className="shopcard__bread shopcard__text_color">
          Home / Shopping bag
        </p>
        <h1 className="shopcard__title">Shopping bag</h1>
        <div className="shopcard__container">
          <div className="shopcard__item">
            <div className="shopcard__item__header">
              <p>Item</p>
              <div className="shopcard__item__header_block">
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
              </div>
            </div>
            {shopingCart.map((item, index) => {
              return <ShopCartItem key={`shopcard_srh${index}`} {...item} />;
            })}
            <ShopCartClean subtotal={subtotal.sum} />
          </div>

          <ShopCartOrder
            subtotal={subtotal.sum}
            shipingsum={subtotal.shipingSum}
          />
        </div>
        <Slider
          prod={SlideApiSecond}
          className="glide2"
          sliderTitle="You may also like"
        />
        <Brands />
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

export default ShopBag;
