import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

import PropTypes from "prop-types";

export const Room = ({ room }) => {
	const { name, city, slug, images, price } = room;
	return (
		<article className="room">
			<div className="img-container">
				<img src={images[0] || defaultImg} alt="room img" />
				<div class="price-top">
					<h6>₹{price}0</h6>
					<p>per Month</p>
				</div>
				<Link to={`/rooms/${slug}`} className="btn-primary room-link">
					Features
				</Link>
			</div>
			<p className="room-info">{name}</p>
			<p className="room-info">{city}</p>
		</article>
	);
};

Room.propTypes = {
	room: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired,
		price: PropTypes.number.isRequired,
	}),
};
