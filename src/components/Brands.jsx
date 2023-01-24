import React from "react";
import {
  NewBalance,
  DrMarttens,
  Converse,
  SteveMadden,
  UggAustralia,
} from "../img/logos";

const Brands = () => {
  return (
    <div className="brands__container">
      <div className="brands__wrap">
        <a
          href="https://newbalance.ua/"
          target="blank"
          alt="https://newbalance.ua/"
        >
          <NewBalance className="logo__ani" />
        </a>
        <a
          href="https://martens.com.ua/"
          target="blank"
          alt="https://martens.com.ua/"
        >
          <DrMarttens className="logo__ani" />
        </a>
        <a
          href="https://www.converse.com/"
          target="blank"
          alt="https://www.converse.com/"
        >
          <Converse className="logo__ani" />
        </a>
        <a
          href="https://www.stevemadden.com/"
          target="blank"
          alt="https://www.stevemadden.com/"
        >
          <SteveMadden className="logo__ani" />
        </a>
        <a
          href="https://www.uggs.com.au/"
          alt="https://www.uggs.com.au/"
          target="blank"
        >
          <UggAustralia className="logo__ani" />
        </a>
        <a href="/" className="brands__link logo__ani">
          All brands
        </a>
      </div>
    </div>
  );
};

export default Brands;
