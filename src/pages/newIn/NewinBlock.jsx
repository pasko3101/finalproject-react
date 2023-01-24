import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const NewinBlock = ({ item = [], title }) => {
  const [hover, setHover] = useState(true);
  return (
    <div className="newIn__block">
      <div className="newIn__block__head">
        <h3 className="newIn__block__title">{title}</h3>
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
      <div className={hover ? " dispNone" : " "}>
        <input
          type="text"
          className="newIn__block__input"
          placeholder={`Search ${title.toLowerCase()}`}
        />
      </div>
      <div
        className={
          hover ? "newIn__block__items dispNone" : "newIn__block__items"
        }
      >
        {item.map((item, index) => {
          return (
            <label className="newIn__block__label" htmlFor={item} key={index}>
              <input className="newIn__block__item" type="checkbox" id={item} />
              <span className="newIn__block__check"></span>
              {item}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default NewinBlock;
