import { Link } from "react-router-dom";

const FooterBlock = ({ item = [], title }) => {
  return (
    <ul className="footer__navList">
      <li className="footer__navItem">
        <Link to="/" className="footer__navLink footer__navLink_bolt">
          {title}
        </Link>
      </li>
      {item.map((item, index) => {
        return (
          <li className="footer__navItem">
            <Link to="/" className="footer__navLink" key={index}>
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterBlock;