import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

// Components
import HikingContext from "../context/hiking/hikingContext";

// React-Bootstrap components
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

const Trail = () => {
	// Instantiate context
	const hikingContext = useContext(HikingContext);
	const { getTrail, loading } = hikingContext;

	// useParams retrieves the trail name from the URL parameters.
	let { param } = useParams();

	// On mount, calls getTrail with the param of the hike in the url.
	useEffect(() => {
		if (param) {
			getTrail(param);
		} else {
			console.error("No trail found from URL params");
		}
	}, []);

	if (!loading) {
		let { elevation, name, url, coordinates, length, features } =
			hikingContext.trail;

		let gain = elevation["Gain"];
		let highestPoint = elevation["Highest Point"];

		return (
			<Container>
				<Row>
					<Col>
						<h1>{name}</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<span>Length</span>
						<br />
						<span style={{ fontWeight: "bold" }}>{length}</span>
					</Col>
					<Col>
						<span>Highest Point</span> <br />
						<span style={{ fontWeight: "bold" }}>{gain}</span>
					</Col>
					<Col>
						<span>Gain</span>
						<br />
						<span style={{ fontWeight: "bold" }}>{highestPoint}</span>
					</Col>
				</Row>

				<Carousel className="mt-4 mb-4">
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://picsum.photos/id/1/500/200"
						></img>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://picsum.photos/id/1/500/200"
						></img>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://picsum.photos/id/1/500/200"
							style={{ maxWidth: "100%", maxHeight: "100%" }}
						></img>
					</Carousel.Item>
				</Carousel>

				<Row>
					<Col xs={8}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum est
						beatae ducimus ab, doloremque quasi facere fugiat architecto sit,
						reprehenderit illo eligendi blanditiis, quod eveniet. Itaque illo
						facilis enim tempore possimus incidunt minus earum quae magni
						voluptatum, quis in vitae eos ab? Quidem ullam, accusantium, maxime
						laborum earum quod, recusandae voluptate perferendis quas id optio
						quo quam rerum. Quas eos debitis id, corporis fugit quasi vero neque
						minima ipsa. Nesciunt autem, explicabo hic, neque reiciendis
						perferendis quaerat consectetur saepe voluptatum quasi sequi id.
						Dolore atque quam, ea est architecto, voluptatibus incidunt tenetur
						culpa quos, autem sit sed delectus iure molestias.
					</Col>

					<Col>
						<Button variant="primary" block>
							Button 1
						</Button>
						<Button variant="primary" block>
							Button 2
						</Button>
						<Button variant="primary" block>
							Button 3
						</Button>
					</Col>
				</Row>
			</Container>
		);
	} else {
		return <h1>yuh</h1>;
	}
};

// TODO - Ensure that data is loaded before creating components with trail data. Else, undefined errors are thrown and everything is terrible.

export default Trail;
