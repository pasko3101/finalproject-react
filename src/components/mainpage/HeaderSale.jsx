import React from "react";
import "./scss/HeaderSale.scss";
const HeaderSale = () => {
  return (
    <div className="header__container header__container_sale">
      <div className="header__sale marquee">
        <h2 className="header__sale_text">
          Up to 50% off all dresses when use code DRESSLOVER{" "}
          <a href="/" className="header__sale_link">
            Shop dresses
          </a>
        </h2>
      </div>
      <div className="header__sale">
        <h2 className="header__sale_text">
          Up to 50% off all dresses when use code DRESSLOVER{" "}
          <a href="/" className="header__sale_link">
            Shop dresses
          </a>
        </h2>
      </div>
    </div>
  );
};

export default HeaderSale;
