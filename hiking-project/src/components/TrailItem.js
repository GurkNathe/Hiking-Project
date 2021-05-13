import React from "react";
import {Card} from "react-bootstrap";

/*elevation = elevation gain
  name = name of trail
  distance = distance from input location
  */
function TrailItem({elevation, name, distance}) {

    const onClick = () => {
        console.log(elevation);
        console.log(name);
        console.log(distance);
    }

    return(
        <Card as="a" onClick={onClick} style={{ cursor: "pointer" }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{elevation} <br></br> {distance}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TrailItem;