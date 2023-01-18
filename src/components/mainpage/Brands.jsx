import React from "react";
import "./scss/Brands.scss";
import NewBalance from "./img/newBalance.svg";
import Marttens from "./img/Marttens.svg";
import Converse from "./img/converse.svg";
import Steve from "./img/steve.svg";
import Ugg from "./img/ugg-australia.svg";

const Brands = () => {
  return (
    <div className="brands__container">
      <div className="brands__wrap">
        <a
          href="https://newbalance.ua/"
          target="blank"
          alt="https://newbalance.ua/"
        >
          <img className="logo__ani" src={NewBalance} alt="NewBalance" />
        </a>
        <a
          href="https://martens.com.ua/"
          target="blank"
          alt="https://martens.com.ua/"
        >
          <img className="logo__ani" src={Marttens} alt="Marttens" />
        </a>
        <a
          href="https://www.converse.com/"
          target="blank"
          alt="https://www.converse.com/"
        >
          <img className="logo__ani" src={Converse} alt="Converse" />
        </a>
        <a
          href="https://www.stevemadden.com/"
          target="blank"
          alt="https://www.stevemadden.com/"
        >
          <img className="logo__ani" src={Steve} alt="Steve" />
        </a>
        <a
          href="https://www.uggs.com.au/"
          alt="https://www.uggs.com.au/"
          target="blank"
        >
          <img className="logo__ani" src={Ugg} alt="Ugg" />
        </a>
        <a href="/" className="brands__link logo__ani">
          All brands
        </a>
      </div>
    </div>
  );
};

export default Brands;
