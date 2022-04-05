import React from "react";
import "./GifCard.css";

const GifCard = ({ data }) => {
	return data.map((gif) => (
		<figure key={gif.id}>
			<img src={gif.images.fixed_width.url} alt='Result' />
			<figcaption className='gif-title'>{gif.title}</figcaption>
		</figure>
	));
};

export default GifCard;
