import React, { useState } from "react";
import PropTypes from "prop-types";

import {
	Container,
	Form,
	FormGroup,
	FormControl,
	Button,
	InputGroup,
	Dropdown,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { FaSearch } from "react-icons/fa";

function Search({ searchFunction }) {
	// React Hook used to set text value to a constant
	const [text, setText] = useState("");
	var [checks, setChecks] = useState("");

	checks = { isTest: false};

	// Calls the prop.search function with text in the form.
	const onSubmit = (e) => {
		e.preventDefault();

		searchFunction(text);

		setText(text);
	};

	// Sets search bar text to current typed information
	const onChange = (e) => setText(e.target.value);

	const onChangeTest = () => {
		console.log(checks.isTest)
		checks.isTest = !checks.isTest
		console.log(checks.isTest)
	};

	return (
		<Container>
			<Form.Group className="m-0 d-flex justify-content-center">
				<Form onSubmit={onSubmit} className="w-100">
					<InputGroup>
						<FormControl
							type="text"
							placeholder="Enter an address, zipcode, or location..."
							onChange={onChange}
							value={text}
							style={{
								borderBottomRightRadius: "0",
								borderTopRightRadius: "0",
								boxShadow: "none",
							}}
						></FormControl>
						<Dropdown>
							<Dropdown.Toggle variant="success" id="dropdown-basic" 
								style={{
									color: "black",
									backgroundColor: "white",
									borderColor: "lightgrey",
									borderRadius: "0",
  									boxShadow: "none",
									width: "150px",
								}}
							>
								Features
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Form.Group controlId="formBasicCheckbox" style={{paddingLeft:"10px"}}>
									<Form.Check type="checkbox" label="Test" onClick={onChangeTest}/>
									<Form.Check type="checkbox" label="Test" onClick={onChangeTest}/>
									<Form.Check type="checkbox" label="Test" onClick={onChangeTest}/>
								</Form.Group>
							</Dropdown.Menu>
						</Dropdown>
						<Button
							variant="primary"
							onClick={onSubmit}
							style={{
								borderBottomLeftRadius: "0",
								borderTopLeftRadius: "0",
							}}
						>
							<FaSearch className="align-center mb-1"></FaSearch>
						</Button>
					</InputGroup>
				</Form>
			</Form.Group>
		</Container>
	);
}

Search.propTypes = {
	searchFunction: PropTypes.func.isRequired,
};

export default Search;
