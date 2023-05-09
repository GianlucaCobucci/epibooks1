import React from 'react';
import { Card } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{comment.author}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Voto: {comment.rate}
        </Card.Subtitle>
        <Card.Text>{comment.comment}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleComment;

