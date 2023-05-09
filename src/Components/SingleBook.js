import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import CommentArea from './CommentArea';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
      <Card
        style={{ width: '18rem', height: '100%' }}
        className={`mb-5 ${selected ? 'border border-danger' : ''}`}
        onClick={handleClick}
      >
        <Card.Img variant="top" src={book.img} style={{ height: '30rem', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <strong>ASIN:</strong> {book.asin} <br />
            <strong>Category:</strong> {book.category} <br />
            <strong>Price:</strong> {book.price} <br />
          </Card.Text>
        </Card.Body>
        <Button variant="primary" onClick={handleClick}>
          {selected ? 'Hide Comments' : 'Show Comments'}
        </Button>
        {selected && <CommentArea book={book} />}
      </Card>
    </div>
  );
};

export default SingleBook;














