import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

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
        1 2 3 4 5 6
      </div>
    </div>
  );
};

export default NewinPrice;
