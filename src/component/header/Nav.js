import V from "./picture/V.svg";
function Nav() {
  return (
    <ul className="nav">
      <li className="nav__item">
        <a href="#" className="nav__link text__os_semibold">
          New in
          <img className="nav__button" src={V} alt="V" />
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link text__os_semibold">
          Clothing
          <img className="nav__button" src={V} alt="V" />
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link text__os_semibold">
          Shoes
          <img className="nav__button" src={V} alt="V" />
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link text__os_semibold">
          Accessories
          <img className="nav__button" src={V} alt="V" />
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link text__os_semibold">
          Brands
          <img className="nav__button" src={V} alt="V" />
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link text__os_semibold">
          Sale
          <img className="nav__button" src={V} alt="V" />
        </a>
      </li>
    </ul>
  );
}
export default Nav;
