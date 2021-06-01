import React, { Fragment } from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";

const ReturnButton = () => {
	return (
		<Fragment>
			<Link to="/">
				<Button
					variant="dark"
					size="sm"
					className="d-flex align-items-center justify-content-center mt-2 mb-2"
					block
				>
					<FaAngleDoubleLeft
						style={{ width: "1.25em", height: "1.25em" }}
					></FaAngleDoubleLeft>{" "}
					<span className="p-1" style={{ fontSize: "medium" }}>
						Return to Search Results
					</span>
				</Button>
			</Link>
		</Fragment>
	);
};

export default ReturnButton;
