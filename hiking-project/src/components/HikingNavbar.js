import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, NavbarBrand, Nav } from "react-bootstrap";

import { FaTree, FaAdjust } from "react-icons/fa";

function HikingNavbar() {
	const [state, setState] = useState({
		variant: "dark",
		background: "dark",
		color: "#fff",
		darkTheme: true,
	});

	// Destructures state variables
	const { variant, background, darkTheme, color } = state;

	// State hook function to change dark/light mode
	const changeTheme = () => {
		setState((state) => {
			if (darkTheme) {
				return {
					...state,
					variant: "light",
					background: "light",
					color: "#000",
					darkTheme: !darkTheme,
				};
			} else {
				return {
					...state,
					variant: "dark",
					background: "dark",
					color: "#fff",
					darkTheme: !darkTheme,
				};
			}
		});
	};

	return (
		<Navbar bg={background} variant={variant} className="mb-4">
			<FaTree
				className="d-inline-block align-center mr-2"
				style={{ width: "2em", height: "2em" }}
				color={color}
			></FaTree>
			<NavbarBrand>Washington Trail Finder</NavbarBrand>
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#about">About</Nav.Link>
			</Nav>
			<Button variant={variant}>
				<FaAdjust
					className="d-inline-block align-center mb-1"
					onClick={changeTheme}
				/>
			</Button>
		</Navbar>
	);
}

export default HikingNavbar;
