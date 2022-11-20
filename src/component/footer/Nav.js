function Nav() {
  return (
    <>
      <ul className="footer__nav">
        <h4 className="text__os_semibold ftr">Customer support</h4>
        <li className="nav__item">
          <a href="#" className="nav__link text__os_regular ftr_bl">
            Size guides
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link text__os_regular ftr_bl">
            Shipping
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link text__os_regular ftr_bl">
            Returns
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link text__os_regular ftr_bl">
            Track my order
          </a>
        </li>
      </ul>
      <ul className="footer__nav">
        <h4 className="text__os_semibold ftr">My account</h4>
        <li className="nav__item">
          <a href="#" className="nav__link text__os_regular ftr_bl">
            Order history
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link text__os_regular ftr_bl">
            Payment methods
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link text__os_regular ftr_bl">
            Account settings
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link text__os_regular ftr_bl">
            Favorites
          </a>
        </li>
      </ul>
    </>
  );
}
export default Nav;
