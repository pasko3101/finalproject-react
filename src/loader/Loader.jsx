import React from "react";
import Load from "./loader.svg";
import "../components/newIn/scss/newIn.scss";
const Loader = () => {
  return (
    <div className="loader">
      <img src={Load} alt="loading..." />
    </div>
  );
};
export { Loader };
