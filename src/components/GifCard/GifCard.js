import React from "react";
import styles from "./GifCard.module.css";

const GifCard = ({ data }) => {
	return data.map((gif) => (
		<figure className={styles.figure} key={gif.id}>
			<img src={gif.images.fixed_width.url} alt='Result' />
			<figcaption className={styles.figcaption}>{gif.title}</figcaption>
		</figure>
	));
};

export default GifCard;
