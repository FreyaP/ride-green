import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";

import "./AboutUs.css";

export default function AboutUs(props) {
    return (
        <CardDeck>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img}  />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      Something about sustainbility
    </Card.Text>
    <Button variant="secondary">Learn More</Button>
  </Card.Body>
</Card>
</CardDeck>
    )
}