import React from "react";

import { Container, Card, Button } from "react-bootstrap";

const About = () => {
	return (
		<Container className="mt-3">
			<Card>
				<Card.Header as="h3">About this App</Card.Header>
				<Card.Body>
					This application was developed to find hikes in Washington. It was
					developed for the class CS380 - Introduction to Software Engineering
					at Central Washington University. The contributors and source code can
					be found in the Github repo linked below.
				</Card.Body>
				<a
					href="https://github.com/GurkNathe/Hiking-Project"
					className="pt-0 pl-3 pb-3"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button variant="primary">Github Repo</Button>
				</a>
			</Card>
		</Container>
	);
};

export default About;
