import React from "react";
import { Link } from "react-router-dom";
import { DressNoteFooter } from "../img/logos";
import FooterBlock from "./FooterBlock";
import { customerSupport, myAccount } from "./CategoriesSizesBrands";
import { Instagram, Facebook, Twitter, Pinterest, Youtube } from "../img/icons";
const Footer = () => {
  return (
    <>
      <footer className="footer__container">
        <div className="footer__wrap">
          <FooterBlock item={customerSupport} title="Customer support" />
          <FooterBlock item={myAccount} title="My account" />
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
      </footer>
      <div className="footer__copyright">
        <Link to="/" alt="Dressnote">
          <DressNoteFooter className="footer__copyright_logo" />
        </Link>
        <p className="footer__copyright_text">
          &copy; 2022 All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
