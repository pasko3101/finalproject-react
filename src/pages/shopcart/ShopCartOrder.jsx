import React from "react";
import ShopCartForm from "./ShopCartForm";

const ShopCartOrder = ({ subtotal = 0, shipingsum = 0 }) => {
  return (
    <div className="shopcard__order">
      <h3 className="shopcard__order__text shopcard__order__text_bolt shopcard__order_border">
        Order summary
      </h3>
      <div className="shopcard__order__subwrap shopcard__order__text">
        <p>Subtotal</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className="shopcard__order__subwrap shopcard__order__text">
        <p>Shipping</p>
        <p>${shipingsum.toFixed(2)}</p>
      </div>
      <p className="shopcard__cards__subtitle shopcard__text_color">
        Spend $50 more to get free shipping!
      </p>
      <ShopCartForm />
      <div className="shopcard__order__subwrap shopcard__order__text shopcard__order__text_bolt">
        <p>Order total</p>
        <p>${(subtotal + shipingsum).toFixed(2)}</p>
      </div>
      <button className="shopcard__order__text shopcard__order_btn shopcard__order_btn_checkout">
        Proceed to checkout
      </button>
    </div>
  );
};

export default ShopCartOrder;
