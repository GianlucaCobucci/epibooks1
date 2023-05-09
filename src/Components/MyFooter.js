import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function MyFooter() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col>
            <h6>Indirizzo</h6>
            <p>Via del Corso, 123</p>
            <h6>Email</h6>
            <p>info@epibooks.com</p>
            <h6>Cellulare</h6>
            <p>+39 123456789</p>
          </Col>
          <Col>
            <h6>Consigli</h6>
            <Nav.Link href="#">Segui i nostri consigli per migliorare la tua esperienza di lettura</Nav.Link>
            <h6>Errori</h6>
            <Nav.Link href="#">Segnala eventuali errori o problemi sul nostro sito</Nav.Link>
          </Col>
          <Col>
            <h6>Contattaci</h6>
            <p>Compila il form di contatto per chiederci informazioni o per collaborare con noi</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;

