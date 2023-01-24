import React from "react";
import { FiTrash } from "react-icons/fi";
import { cartRemoveAll } from "../../store/actions/cartAction";
import { useDispatch } from "react-redux";

const ShopCartClean = ({ subtotal = 0 }) => {
  const dispatch = useDispatch();

  return (
    <div className="shopcard__subtotal">
      <button
        className="shopcard__subtotal__clear"
        onClick={() => {
          dispatch(cartRemoveAll());
        }}
      >
        <FiTrash className="shopcard__subtotal__icon" />
        <p className="shopcard__subtotal__text"> Clear bag</p>
      </button>
      <div className="shopcard__subtotal__wrap">
        <p className="shopcard__subtotal__text">
          Subtotal:
          <span className="shopcard__subtotal__text shopcard__subtotal__text_bolt">
            ${subtotal.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ShopCartClean;
