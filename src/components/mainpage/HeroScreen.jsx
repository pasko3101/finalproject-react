import React from "react";
import "./scss/HeroScreen.scss";
import HeroScreenCards from "./HeroScreenCards";
const HeroScreen = () => {
	return (
		<>
			<div className="hs__bg">
				<HeroScreenCards />
			</div>
		</>
	);
};
export default HeroScreen;
