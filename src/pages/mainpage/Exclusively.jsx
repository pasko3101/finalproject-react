import React from "react";
import image236 from "../../img/image236.jpg"
const Exclusively = () => {
	return (
		<div className="exclusively__container">
			<div className="exclusively__wrap">
				<div className="exclusively__story">
					<h2 className="exclusively__titile">
						Eco Aware brands: Exclusively at Dresnote
					</h2>
					<p className="exclusively__text">
						Science Story is a collaboration between Dressnote and creative
						thinkers, researchers and brands who are developing cutting-edge
						materials designed to address the environmental impacts of the
						textile industry.
					</p>
					<button className="exclusively__btn">Shop Eco collection</button>
				</div>
				<div className="exclusively__img">
					<img src={image236} alt="image236.jpg" />
				</div>
			</div>
		</div>
	);
};
export default Exclusively;
