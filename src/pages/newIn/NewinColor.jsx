import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { color } from "../../components/CategoriesSizesBrands";

const NewinColor = () => {
  const [hover, setHover] = useState(true);
  return (
    <section className="newIn__block">
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
        {color.map((item, index) => (
          <div
            to="/newIn"
            className={`newIn__color newIn__color_${item}`}
            key={index}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default NewinColor;
