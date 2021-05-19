import React, { useState } from "react";
import PropTypes from "prop-types";

import {
	Container,
	Form,
	FormGroup,
	FormControl,
	Button,
	InputGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaSearch } from "react-icons/fa";

function Search({ searchFunction }) {
	// React Hook used to set text value to a constant
	const [text, setText] = useState("");

	// Calls the prop.search function with text in the form.
	const onSubmit = (e) => {
		e.preventDefault();

		searchFunction(text);

		setText("");
	};

	// Sets search bar text to current typed information
	const onChange = (e) => setText(e.target.value);

	return (
		<Container>
			<FormGroup inline="true">
				<Form onSubmit={onSubmit}>
					<InputGroup>
						<FormControl
							type="text"
							placeholder="Enter a zipcode..."
							onChange={onChange}
							value={text}
							style={{
								borderBottomRightRadius: "0",
								borderTopRightRadius: "0",
							}}
						></FormControl>
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
			</FormGroup>
		</Container>
	);
}

Search.propTypes = {
	searchFunction: PropTypes.func.isRequired,
};

export default Search;
