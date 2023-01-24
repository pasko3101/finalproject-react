import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import PriceRange from "../../img/PriceRange.png"


const NewinPrice = () => {
  const [hover, setHover] = useState(true);
  return (
    <div className="newIn__block">
      <div className="newIn__block__head">
        <h3 className="newIn__block__title">Price</h3>
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
        <img src={PriceRange} alt="PriceRange" />
      </div>
    </div>
  );
};

export default NewinPrice;
