import React, { Fragment } from "react";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import HikingNavbar from "./components/HikingNavbar";
import Search from "./components/Search";

const App = () => {
	const placeholderSearchFunction = (text) => {
		console.log(text);
	};

	return (
		<Fragment>
			<HikingNavbar></HikingNavbar>
			<Container>
				<Search searchTrails={placeholderSearchFunction}></Search>
			</Container>
		</Fragment>
	);
};

export default App;
