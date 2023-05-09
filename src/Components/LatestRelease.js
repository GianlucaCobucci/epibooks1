import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import jsonData from '../Data/scifi.json';

class SingleBook extends Component {
  render() {
    const book = this.props.book ? this.props.book : jsonData[0];

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;





