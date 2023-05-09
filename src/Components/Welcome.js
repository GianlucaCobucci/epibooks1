import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import data from '../Data/scifi.json';
import '../Layout/Welcome.css'


function Welcome() {
  //console.log(data)
  return (
    <div className="bg-light d-flex justify-content-center align-items-center vh-25">
      <Container className="text-center d-flex flex-column justify-content-center">
        <h1>EpiBooks</h1>
        <p>
          Benvenuto su EpiBooks, la piattaforma online per la lettura di e-book.
        </p>
        <Carousel className="mx-auto w-75 h-50 text-center d-flex flex-column justify-content-center">
          <Carousel.Item>
            <div className="d-flex">
              <div className="w-100">
                <img
                  className="w-100"
                  src={data[0].img}
                  alt="First slide"
                />
              </div>
              <div className="w-100">
                <img
                  className="w-100"
                  src={data[1].img}
                  alt="Second slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex">
              <div className="w-100">
                <img
                  className="w-100"
                  src={data[2].img}
                  alt="First slide"
                />
              </div>
              <div className="w-100">
                <img
                  className="w-100"
                  src={data[3].img}
                  alt="Second slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex">
              <div className="w-100">
                <img
                  className="w-100"
                  src={data[4].img}
                  alt="First slide"
                />
              </div>
              <div className="w-100">
                <img
                  className="w-100"
                  src={data[5].img}
                  alt="Second slide"
                />
              </div>
            </div>
          </Carousel.Item>

        </Carousel>
      </Container>
    </div>
  );
}

export default Welcome;
