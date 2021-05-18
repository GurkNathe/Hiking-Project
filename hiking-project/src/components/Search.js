import React, { useState } from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

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
			<Row>
				<Col className="p-0">
					<Form onSubmit={onSubmit}>
						<Form.Control
							type="text"
							placeholder="Enter a zipcode..."
							onChange={onChange}
							value={text}
							style={{
								borderBottomRightRadius: "0",
								borderTopRightRadius: "0",
							}}
						></Form.Control>
					</Form>
				</Col>
				<Col className="p-0" md="auto">
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
				</Col>
			</Row>
		</Container>
	);
}

Search.propTypes = {
	searchFunction: PropTypes.func.isRequired,
};

export default Search;
