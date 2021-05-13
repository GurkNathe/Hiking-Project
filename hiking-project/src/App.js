import React, { Fragment } from "react";

import { Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import HikingNavbar from "./components/HikingNavbar";
import Search from "./components/Search";
import TrailItem from "./components/TrailItem";

const App = () => {
	const placeholderSearchFunction = (text) => {
		console.log(text);
	};

	return (
		<Fragment>
			<HikingNavbar></HikingNavbar>
			<Container>
				<Search searchTrails={placeholderSearchFunction}></Search>
			</Container><br></br>
			<Container>
				<TrailItem elevation={200} name={"test"} distance={500}></TrailItem>
			</Container>
		</Fragment>
	);
};

export default App;
