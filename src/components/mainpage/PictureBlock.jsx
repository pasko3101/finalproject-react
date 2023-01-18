import React from "react";
import "./scss/PictureBlock.scss";

const PictureBlock = () => {
	return (
		<div className="picture__container">
			<div className="picture__wrap">
				<img
					src="./images/mainpage/image234.jpg"
					alt="image234.jpg"
					className="picture__img"
				/>
				<img
					src="./images/mainpage/image235.jpg"
					alt="image235.jpg"
					className="picture__img"
				/>
			</div>
		</div>
	);
};

export default PictureBlock;
