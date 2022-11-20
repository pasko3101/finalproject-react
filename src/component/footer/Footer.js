import image237 from "./picture/image237.png";
import Brends from "./Brends";
import Menu from "./Menu";
import Logo from "./Logo";
function Ftr() {
  return (
    <div className="footer">
      <img src={image237} alt="image237" />
      <Brends></Brends>
      <Menu></Menu>
      <Logo></Logo>
    </div>
  );
}
export default Ftr;
