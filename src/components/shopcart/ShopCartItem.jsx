import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { cartItemPatch } from "../../store/actions/cartAction";
import { useDispatch } from "react-redux";
import { cartRemove } from "../../store/actions/cartAction";

const ShopCardItem = ({
  image,
  category,
  title,
  size,
  price,
  count: itemCount,
  itemId,
}) => {
  const [count, setCount] = useState(itemCount);
  const dispatch = useDispatch();

  return (
    <div className="shopcard__cards">
      <img src={image} alt="" className="shopcard__cards__img" />
      <div className="shopcard__cards__wrap">
        <p className="shopcard__cards__head">{category}</p>
        <p className="shopcard__cards__title">{title}</p>
        <p className="shopcard__cards__subtitle shopcard__text_color">
          <span className="">Color: White/Red patterned</span>
        </p>
        <p className="shopcard__cards__subtitle shopcard__text_color">
          Size: {size}
        </p>
      </div>
      <div className="shopcard__cards__infotext">
        <p className="shopcard__cards__infotext_width">${price}</p>
        <div className="shopcard__count">
          <button
            className="shopcard__cards__minus shopcard__btn"
            onClick={() => {
              if (count >= 2) {
                setCount(count - 1);
                dispatch(cartItemPatch({ itemId, count: count - 1 }));
              }
            }}
          >
            <AiOutlineMinus />
          </button>
          <p>{count}</p>
          <button
            className="shopcard__cards__plus shopcard__btn"
            onClick={() => {
              setCount(count + 1);
              dispatch(cartItemPatch({ itemId, count: count + 1 }));
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>

        <p className="shopcard__cards__infotext_width shopcard__cards__infotext_width_right">
          ${(price * count).toFixed(2)}
        </p>
      </div>
      <button
        className="shopcard__cards__cross shopcard__btn"
        onClick={() => {
          dispatch(
            cartRemove({
              image,
              category,
              title,
              size,
              price,
              count: itemCount,
              itemId,
            })
          );
        }}
      >
        <VscChromeClose />
      </button>
    </div>
  );
};
export default ShopCardItem;
