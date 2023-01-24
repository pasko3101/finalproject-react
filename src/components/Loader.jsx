import React from "react";
import Load from "../img/loader.svg";
const Loader = () => {
  return (
    <div className="loader">
      <img src={Load} alt="loading..." />
    </div>
  );
};
export { Loader };
