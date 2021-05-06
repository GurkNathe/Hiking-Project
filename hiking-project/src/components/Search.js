import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaSearch } from "react-icons/fa";

// A search function is passed in -- eventually by the context, but for now, it is handled as a prop.
// It is destructured in the parameters, denoted by {}.
function Search({ searchFunction }) {
	// React Hook used to set text value to a constant
	const [text, setText] = useState("");

	// Calls the prop.search function with text in the form.
	const onSubmit = (e) => {
		e.preventDefault();

		searchFunction(text);

		setText("");
	};

	// Updates text state on input change
	const onChange = (e) => setText(e.target.value);

	return (
		<Fragment>
			<Container>
				<Row>
					<Col className="p-0">
						<Form onSubmit={onSubmit}>
							<Form.Control
								type="text"
								placeholder="Enter a WA zipcode..."
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
		</Fragment>
	);
}

Search.propTypes = {
	searchFunction: PropTypes.func.isRequired,
};

export default Search;
