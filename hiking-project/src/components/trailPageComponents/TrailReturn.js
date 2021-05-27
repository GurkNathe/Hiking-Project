import React, { Fragment } from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";

const ReturnButton = () => {
	return (
		<Fragment>
			<Link to="/">
				<Button
					variant="primary"
					size="sm"
					className="d-flex align-items-center"
				>
					<FaAngleDoubleLeft></FaAngleDoubleLeft>{" "}
					<span className="p-1">Return to Search Results</span>
				</Button>
			</Link>
		</Fragment>
	);
};

export default ReturnButton;
