import React from "react";
import image66 from "../../img/image66.jpg"
import image268 from "../../img/image268.jpg"
import image267 from "../../img/image267.jpg"
import image269 from "../../img/image269.jpg"
import image271 from "../../img/image271.jpg"
import image270 from "../../img/image270.jpg"

const HeroScreenCards = () => {
	return (
		<>
			<div className="hscard__container">
				<div className="hscard__wrap">
					<div className="hscard__box">
						<img
							src={image66}
							alt="image66.jpg"
							className="hscard__img"
						/>
						<button className="hscard__btn">Dresses</button>
					</div>
					<div className="hscard__box">
						<img
							src={image268}
							alt="image268.jpg"
							className="hscard__img"
						/>
						<button className="hscard__btn">Skirts</button>
					</div>
					<div className="hscard__box">
						<img
							src={image267}
							alt="image267.jpg"
							className="hscard__img"
						/>
						<button className="hscard__btn">Tops</button>
					</div>
					<div className="hscard__box">
						<img
							src={image269}
							alt="image269.jpg"
							className="hscard__img"
						/>
						<button className="hscard__btn">Bags</button>
					</div>
					<div className="hscard__box">
						<img
							src={image271}
							alt="image271.jpg"
							className="hscard__img"
						/>
						<button className="hscard__btn">Swimwear</button>
					</div>
					<div className="hscard__box">
						<img
							src={image270}
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
