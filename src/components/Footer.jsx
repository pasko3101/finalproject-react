import React from "react";
import { Link } from "react-router-dom";
import "../scss/footer.scss";
import { DressNote } from "../img/logos";
import { Instagram, Facebook, Twitter, Pinterest, Youtube } from "../img/icons";
const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__wrap">
          <ul className="footer__navList">
            <li className="footer__navItem">
              <Link to="/" className="footer__navLink footer__navLink_bolt">
                Customer support
              </Link>
            </li>
            <li className="footer__navItem">
              <Link to="/" className="footer__navLink">
                Size guides
              </Link>
            </li>
            <li className="footer__navItem">
              <Link to="/" className="footer__navLink">
                Shipping
              </Link>
            </li>
            <li className="footer__navItem">
              <Link to="/" className="footer__navLink">
                Returns
              </Link>
            </li>
            <li className="footer__navItem">
              <Link to="/" className="footer__navLink">
                Track my order
              </Link>
            </li>
          </ul>
          <ul className="footer__navList">
            <li className="footer__navItem">
              <Link to="/" className="footer__navLink footer__navLink_bolt">
                My account
              </Link>
            </li>
            <li className="footer__navItem">
              <Link to="/" className="footer__navLink">
                Order history
              </Link>
            </li>
            <li className="footer__navItem">
              <Link to="/" className="footer__navLink">
                Payment methods
              </Link>
            </li>
            <li className="footer__navItem">
              <Link to="/" className="footer__navLink">
                Account settings
              </Link>
            </li>
            <li className="footer__navItem">
              <Link to="/favorites" className="footer__navLink">
                Favorites
              </Link>
            </li>
          </ul>
          <div className="footer__form">
            <p className="footer__text">
              Sign up today for email exclusives including early access to Sale,
              the latest trends and arrivals from your favorite designers and
              can’t miss promotions.
            </p>
            <form className="footer__email">
              <input
                type="email"
                className="footer__email_input"
                placeholder="Enter your Email"
              />
              <button className="footer__email_btn">Subscribe</button>
            </form>
            <div className="footer__socials">
              <Instagram className="footer__socials_item" />
              <Facebook className="footer__socials_item" />
              <Twitter className="footer__socials_item" />
              <Pinterest className="footer__socials_item" />
              <Youtube className="footer__socials_item" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <Link to="/" alt="Dressnote">
          <DressNote className="footer__copyright_logo" />
        </Link>
        <p className="footer__copyright_text">
          &copy; 2022 All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
