import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const NewinColor = () => {
  const [hover, setHover] = useState(true);
  return (
    <div className="newIn__block">
      <div className="newIn__block__head">
        <h3 className="newIn__block__title">Color</h3>
        <button
          className="newIn__block__btn"
          onClick={() => (hover ? setHover(false) : setHover(true))}
        >
          <FiChevronDown
            className={
              hover ? "newIn__block__btnicon" : "newIn__block__btnicon_active"
            }
          />
        </button>
      </div>
      <div
        className={
          hover
            ? "newIn__block__items newIn_colorblock dispNone"
            : "newIn__block__items newIn_colorblock"
        }
      >
        <div className="newIn__color newIn__color_pink" />
        <div className="newIn__color newIn__color_yellow" />
        <div className="newIn__color newIn__color_green" />
        <div className="newIn__color newIn__color_blak" />
        <div className="newIn__color newIn__color_gray" />
        <div className="newIn__color newIn__color_white" />
        <div className="newIn__color newIn__color_burgundy" />
        <div className="newIn__color newIn__color_red" />
        <div className="newIn__color newIn__color_orange" />
        <div className="newIn__color newIn__color_blue" />
        <div className="newIn__color newIn__color_liBlue" />
        <div className="newIn__color newIn__color_purple" />
      </div>
    </div>
  );
};

export default NewinColor;
