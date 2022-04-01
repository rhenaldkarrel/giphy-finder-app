import React from "react";
import "./GifCard.css";

const GifCard = ({ id, images, title }) => {
	return (
		<figure key={id}>
			<img src={images} alt='Result' />
			<figcaption className='gif-title'>{title}</figcaption>
		</figure>
	);
};

export default GifCard;
