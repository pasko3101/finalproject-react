import React, { useState } from "react";
import "./scss/SizeBar.scss";
import { FiChevronDown } from "react-icons/fi";

const SizeBar = ({ item, setSize, size }) => {
  const sizeWomen = [24, 26, 28, 30, 32, 34];
  const [hidden, setHidden] = useState(false);

  return (
    <div className="sizebar">
      <span className="sizebar__elem">
        Size: {size}
        <ul
          className={` ${
            hidden ? "sizebar__container_drop" : "sizebar__container"
          }`}
        >
          {sizeWomen.map((item, index) => {
            return (
              <li
                className="sizebar__drop"
                key={index}
                value={item}
                onClick={() => {
                  setSize(item);
                  setHidden(false);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </span>
      <button
        className="sizebar__btn"
        onClick={() => (hidden ? setHidden(false) : setHidden(true))}
      >
        <FiChevronDown
          className={`${
            !hidden ? "sizebar__btnicon" : "sizebar__btnicon_active"
          }`}
        />
      </button>
    </div>
  );
};

export default SizeBar;
