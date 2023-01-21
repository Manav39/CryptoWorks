import React from "react";
import { Card  } from "react-bootstrap";
const NewsCard = (props) => {
  return (
    <Card style={{ width: '18rem' , borderBlockColor:'yellow',borderBottomColor:'yellow'}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <a
          href={props.url}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >Read More ..</a>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
