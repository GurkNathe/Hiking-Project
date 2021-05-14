import React from "react";

import { Navbar, NavbarBrand, Nav } from "react-bootstrap";

import { FaTree } from "react-icons/fa";

function HikingNavbar() {
	return (
		<Navbar bg="dark" variant="dark" className="mb-4">
			<FaTree
				className="d-inline-block align-center mr-2"
				style={{ width: "2em", height: "2em" }}
				color="white"
			></FaTree>
			<NavbarBrand>Washington Trail Finder</NavbarBrand>
			<Nav className="mr-auto">
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="/about">About</Nav.Link>
			</Nav>
		</Navbar>
	);
}

export default HikingNavbar;
