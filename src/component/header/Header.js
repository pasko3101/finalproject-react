import logo from "./picture/DRESSNOTE.svg";
import heart from "./picture/heart.svg";
import user from "./picture/user.svg";
import shopping from "./picture/shopping-bag.svg";
import Nav from "./Nav";
import search from "./picture/Search.svg";

function Head() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logoline">
          <img src={logo} alt="logo" />
          <div className="header__user">
            <img src={heart} alt="heart" />
            <img src={user} alt="user" />
            <img src={shopping} alt="shopping-bag" />
          </div>
        </div>
        <div className="header__nav">
          <Nav></Nav>
          <div className="header__search">
            <img className="header__img" src={search} alt="search" />
            <span className="text__os_regular black">Search for...</span>
          </div>
        </div>
        <div className="header__up2off">
          <span className="text__os_regular">
            Up to 50% off all dresses when use code DRESSLOVER
          </span>
          <a className="text__os_regular mrg_lf" href="#">
            Shop dresses
          </a>
        </div>
      </div>
    </div>
  );
}
export default Head;
