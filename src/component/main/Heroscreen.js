import dresses from "./picture/dresses.png";
import skirts from "./picture/skirts.png";
import tops from "./picture/tops.png";
import bags from "./picture/bags.png";
import swimwear from "./picture/swimwear.png";
import shoes from "./picture/shoes.png";
function Heroscreen() {
  return (
    <div className="heroscreen">
      <div className="heroscreen__caterories">
				<div className="heroscreen__card">
					<img src={dresses} alt="dresses" />
					<span className="text__os_semibold white">Dresses</span>
				</div>
				<div className="heroscreen__card">
					<img src={skirts} alt="skirts" />
					<span className="text__os_semibold white">Skirts</span>
				</div>
				<div className="heroscreen__card">
					<img src={tops} alt="tops" />
					<span className="text__os_semibold white">Tops</span>
				</div>
				<div className="heroscreen__card">
					<img src={bags} alt="bags" />
					<span className="text__os_semibold white">Bags</span>
				</div>
				<div className="heroscreen__card">
					<img src={swimwear} alt="swimwear" />
					<span className="text__os_semibold white">Swimwear</span>
				</div>
				<div className="heroscreen__card">
					<img src={shoes} alt="shoes" />
					<span className="text__os_semibold white">Shoes</span>
				</div>
			</div>
    </div>
  );
}
export default Heroscreen;
