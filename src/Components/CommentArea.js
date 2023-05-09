import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

const CommentArea = ({ book }) => {
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${book.asin}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkN2E4OGIxNGE1MTAwMTQ2NjNmZDIiLCJpYXQiOjE2ODM2NDAyNTMsImV4cCI6MTY4NDg0OTg1M30.RJR7z5DaG1h9smRFnqFXPj1AGNSYMXHCWeHFrZFCjh0',
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setComments(data);
      } else {
        console.log("C'è un errore");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Mostra commenti
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Commento per {book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CommentsList comments={comments} />
          <AddComment bookId={book.asin} handleAddComment={fetchComments} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CommentArea;



