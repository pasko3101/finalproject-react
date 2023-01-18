import React from "react";
import "./scss/HeroScreen.scss";

const HeroScreenCards = () => {
	return (
		<>
			<div className="hscard__container">
				<div className="hscard__wrap">
					<div className="hscard__box">
						<img
							src="./images/mainpage/image66.jpg"
							alt="image66.jpg"
							className="hscard__img"
						/>
						<button className="hscard__btn">Dresses</button>
					</div>
					<div className="hscard__box">
						<img
							src="./images/mainpage/skirts.jpg"
							alt="skirts.jpg"
							className="hscard__img"
						/>
						<button className="hscard__btn">Skirts</button>
					</div>
					<div className="hscard__box">
						<img
							src="./images/mainpage/image267.jpg"
							alt="image267.jpg"
							className="hscard__img"
						/>
						<button className="hscard__btn">Tops</button>
					</div>
					<div className="hscard__box">
						<img
							src="./images/mainpage/image269.jpg"
							alt="image269.jpg"
							className="hscard__img"
						/>
						<button className="hscard__btn">Bags</button>
					</div>
					<div className="hscard__box">
						<img
							src="./images/mainpage/image271.jpg"
							alt="image271.jpg"
							className="hscard__img"
						/>
						<button className="hscard__btn">Swimwear</button>
					</div>
					<div className="hscard__box">
						<img
							src="./images/mainpage/image270.jpg"
							alt="image270.jpg"
							className="hscard__img"
						/>
						<button className="hscard__btn">Shoes</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroScreenCards;
