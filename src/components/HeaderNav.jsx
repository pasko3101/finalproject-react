import React from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import SearchBar from "./SearchBar";

const HeaderNav = () => {
  return (
    <div className="header__nav">
      <div className="header__nav__container">
        <nav className="header__navbar">
          <NavLink to="/newIn" className="header__navbar__link">
            New in <FiChevronDown className="header__navbar__arrow" />
          </NavLink>
          <NavLink to="/" className="header__navbar__link">
            Clothing <FiChevronDown className="header__navbar__arrow" />
          </NavLink>
          <NavLink to="/" className="header__navbar__link">
            Shoes <FiChevronDown className="header__navbar__arrow" />
          </NavLink>
          <NavLink to="/" className="header__navbar__link">
            Accessories <FiChevronDown className="header__navbar__arrow" />
          </NavLink>
          <NavLink to="/" className="header__navbar__link">
            Brands <FiChevronDown className="header__navbar__arrow" />
          </NavLink>
          <NavLink to="/" className="header__navbar__link">
            Sale <FiChevronDown className="header__navbar__arrow" />
          </NavLink>
        </nav>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeaderNav;
