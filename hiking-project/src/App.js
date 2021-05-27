import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import HikingNavbar from "./components/HikingNavbar";
import HikingState from "./context/hiking/HikingState";

// React-Bootstrap Components
import "bootstrap/dist/css/bootstrap.min.css";

// Routes
import Home from "./pages/Home";
import About from "./pages/About";
import Trail from "./pages/Trail";

const App = () => {
	return (
		<HikingState>
			<Router>
				<div className="bg_image">
					<HikingNavbar></HikingNavbar>
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route exact path="/about" component={About}></Route>
						<Route exact path="/trails/:param" component={Trail}></Route>
					</Switch>
				</div>
			</Router>
		</HikingState>
	);
};

export default App;
