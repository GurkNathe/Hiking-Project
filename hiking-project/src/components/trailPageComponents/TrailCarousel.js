import React from "react";

import { Carousel } from "react-bootstrap";

import PropTypes from "prop-types";

const TrailCarousel = ({ images }) => {
	return (
		<Carousel className="mt-3 mb-3" interval={null}>
			{images.map((img, idx) => (
				<Carousel.Item key={idx}>
					<img className="d-block w-100" src={img}></img>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

TrailCarousel.propTypes = {
	images: PropTypes.array.isRequired,
};

export default TrailCarousel;
