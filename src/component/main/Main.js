import Heroscreen from "./Heroscreen";
import NewArrivals from "./NewArrivals";
import image234 from "./picture/image234.png";
import image235 from "./picture/image235.png";
import OurPicks from "./OurPicks";
function Mn() {
  return (
    <div className="main">
        <Heroscreen></Heroscreen>
      <div className="main__container">
        <NewArrivals></NewArrivals>
        <div className="main__pictures">
          <img className="main__pictures_img" src={image234} alt="image234" />
          <img className="main__pictures_img" src={image235} alt="image234" />
        </div>
				<OurPicks></OurPicks>
      </div>
    </div>
  );
}
export default Mn;
