import "./scss/Header.scss";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderChoice = () => {
  return (
    <div className="header__choice">
      <Link to="/favorites" className="header__choice_link">
        <FaRegHeart className={`header__choice_icone`} />
      </Link>
      <Link to="/" className="header__choice_link">
        <FiUser className={`header__choice_icone `} />
      </Link>
      <Link to="/shopCart" className="header__choice_link">
        <FiShoppingBag className={`header__choice_icone`} />
      </Link>
    </div>
  );
};

export default HeaderChoice;
