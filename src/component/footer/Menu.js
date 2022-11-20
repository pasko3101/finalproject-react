import Social from "./Social";
import Nav from "./Nav";
function Menu() {
  return (
    <div className="footer__container">
      <div className="footer__context">
        <Nav></Nav>
        <div className="footer__form">
          <p className="text__os_regular text">
            Sign up today for email exclusives including early access to Sale,
            the latest trends and arrivals from your favorite designers and
            can’t miss promotions.
          </p>
          <div className="footer__emailbox">
            <input
              className="footer__email text__os_regular black"
              type="text"
              placeholder="Enter your Email"
              name="email"
            />
            <button className="button ftr_btn">Subscribe</button>
          </div>
          <Social></Social>
        </div>
      </div>
    </div>
  );
}
export default Menu;
