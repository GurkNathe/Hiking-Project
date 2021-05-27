import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// Components
import HikingContext from "../context/hiking/hikingContext";
import ReturnButton from "../components/trailPageComponents/TrailReturn";
import TrailCarousel from "../components/trailPageComponents/TrailCarousel";

// React-Bootstrap components
import { Container, Row, Col, Button } from "react-bootstrap";

const Trail = () => {
	// Instantiate context
	const hikingContext = useContext(HikingContext);
	const { getTrail, loading } = hikingContext;

	// useParams retrieves the trail name from the URL parameters.
	let { param } = useParams();

	// Image URLs to be passed into TrailCarousel component
	let images = [
		"https://picsum.photos/id/10/600/200",
		"https://picsum.photos/id/10/600/200",
		"https://picsum.photos/id/10/600/200",
	];

	// On mount, calls getTrail with the param of the hike in the url.
	useEffect(() => {
		if (param) {
			try {
				getTrail(param);
			} catch (error) {
				// TODO - Error Handling
				// Trail is not in database.
				// Reroute user to <trail not found> page
				console.error(error.message);
			}
		} else {
			console.error("No URL parameters given...");
			// Route user to <trail not found> page
		}
	}, []);

	if (!loading && !isEmpty(hikingContext.trail)) {
		// const { elevation, length, name, url, coordinates, features } =
		// 	hikingContext.trail;

		const { elevation, length, name } = hikingContext.trail;

		// Nullish coalescing. If left side is null or undefined, return right side
		const highestPoint = elevation["Highest Point"] ?? "N/A";
		const gain = elevation["Gain"] ?? "N/A";

		return (
			<Container
				className="p-4 border-primary"
				style={{
					backgroundColor: "rgba(250,250,250, 1)",
					maxHeight: "100vh",
					height: "100vh",
				}}
			>
				<Row className="mt-2 mb-4">
					<Col xs={12}>
						<h1>{name}</h1>
					</Col>
				</Row>

				<TrailCarousel images={images}></TrailCarousel>

				<Row>
					<Col xs={8}>
						<Col className="d-flex justify-content-end p-0">
							<Col className="d-flex-inline text-left p-0">
								<span>Length</span> <br />
								<span style={{ fontWeight: "bold" }}>{length}</span>
							</Col>
							<Col className="d-flex-inline text-left p-0">
								<span>Highest Point</span> <br />
								<span style={{ fontWeight: "bold" }}>{highestPoint}</span>
							</Col>
							<Col className="d-flex-inline text-left p-0">
								<span>Gain</span> <br />
								<span style={{ fontWeight: "bold" }}>{gain}</span>
							</Col>
						</Col>

						<span>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
							ab quidem dignissimos dolore esse aspernatur, provident ut magni.
							Doloribus id dolorum facere eligendi cum, dignissimos, voluptatum
							vel ex harum nisi doloremque maxime enim repudiandae? Pariatur,
							quae dolore recusandae, qui ullam ipsam asperiores reiciendis
							laudantium sequi nostrum, tempora ratione quo voluptate! Nesciunt
							dignissimos distinctio itaque quas, qui est sit earum culpa eaque
							tempora voluptates. Molestiae laboriosam atque dicta hic aliquam
							qui veritatis perferendis deserunt, voluptates iusto accusamus!
							Natus facilis architecto quibusdam adipisci excepturi illo odio
							recusandae quidem voluptates, cum nam incidunt reiciendis
							voluptate ut pariatur, assumenda, nihil ab. Illum, fuga facere.
						</span>
					</Col>

					<Col style={{ alignItems: "stretch" }}>
						<Button variant="primary" block href="/">
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
				<Row style={{ paddingBottom: "25px" }}></Row>

				<ReturnButton></ReturnButton>
			</Container>
		);
	} else {
		return <h1>loading...</h1>;
	}
};

// Check if an object is empty.
const isEmpty = (obj) => {
	let value = false;

	if (typeof obj === "undefined") {
		value = true;
	} else if (obj == null) {
		value = true;
	} else if (Object.keys(obj).length === 0) {
		value = true;
	}

	return value;
};

// TODO - ensuring object is not empty. double rendering. object is empty at first, then re render creates proper object?..

export default Trail;
