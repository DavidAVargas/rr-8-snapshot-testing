import React from "react";
import Card from "react-bootstrap/esm/Card";
import CodingCat from "../GitHubCard/coding-cat.png.webp";
import 'bootstrap/dist/css/bootstrap.min.css';

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={CodingCat} />
        <Card.Body>
            <Card.Title>Coding Cat</Card.Title>
            <Card.Text>
            I am a coding cat, passionate about programming and solving problems with code.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard;