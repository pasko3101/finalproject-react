import icons_instagram from "./picture/icons_instagram.svg";
import icons_facebook from "./picture/icons_facebook.svg";
import icons_twitter from "./picture/icons_twitter.svg";
import icons_pinterest from "./picture/icons_pinterest.svg";
import icons_youtube from "./picture/icons_youtube.svg";
function Social() {
  return (
    <div className="footer__social">
      <img src={icons_instagram} alt="icons_instagram" />
      <img src={icons_facebook} alt="icons_facebook" />
      <img src={icons_twitter} alt="icons_twitter" />
      <img src={icons_pinterest} alt="icons_pinterest" />
      <img src={icons_youtube} alt="icons_youtube" />
    </div>
  );
}
export default Social;
