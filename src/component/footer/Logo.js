import dressnote from "./picture/DRESSNOTE.svg";
function Logo() {
  return (
    <div className="footer__logo">
      <img src={dressnote} alt="dressnote" />
      <p className="text__os_regular text">(С) 2021 All rights reserved</p>
    </div>
  );
}
export default Logo;
