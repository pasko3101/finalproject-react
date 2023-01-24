import React from "react";
import { Link } from "react-router-dom";
import { DressNoteHeader } from "../img/logos";
import HeaderChoice from "./HeaderChoice";
const LogoHeader = () => {
  return (
    <div className="header__container">
      <Link to="/" className="header__logo">
        <DressNoteHeader className="header__logo_img" />
      </Link>
      <HeaderChoice />
    </div>
  );
};
export default LogoHeader;
