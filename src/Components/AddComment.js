import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddComment = ({ bookId, handleAddComment }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          body: JSON.stringify({
            comment,
            rate: rating,
            elementId: bookId,
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkN2E4OGIxNGE1MTAwMTQ2NjNmZDIiLCJpYXQiOjE2ODM2NDAyNTMsImV4cCI6MTY4NDg0OTg1M30.RJR7z5DaG1h9smRFnqFXPj1AGNSYMXHCWeHFrZFCjh0',
          },
        }
      );
      if (response.ok) {
        alert('Comment added!');
        setComment('');
        setRating(1);
        handleAddComment();
      } else {
        alert("Accidenti c'è un errore");
      }
    } catch (error) {
      console.log(error);
      alert("Accidenti c'è un errore");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="comment">
        <Form.Label>Commento</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Scrivi qui il tuo commento...."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="rating">
        <Form.Label>Voto</Form.Label>
        <Form.Control
          as="select"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddComment;


