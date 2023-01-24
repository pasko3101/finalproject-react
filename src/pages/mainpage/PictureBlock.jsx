import React from "react";
import image234 from "../../img/image234.jpg"
import image235 from "../../img/image235.jpg"

const PictureBlock = () => {
	return (
		<div className="picture__container">
			<div className="picture__wrap">
				<img
					src={image234}
					alt="image234.jpg"
					className="picture__img"
				/>
				<img
					src={image235}
					alt="image235.jpg"
					className="picture__img"
				/>
			</div>
		</div>
	);
};

export default PictureBlock;
