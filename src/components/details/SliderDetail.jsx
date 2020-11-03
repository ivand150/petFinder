import React, { useEffect } from "react";
import "./SliderDetail.css";
import Carousel from "react-bootstrap/Carousel";

function SliderDetail({ animal }) {
  if (!animal?.photos || animal?.photos.length < 1) {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 slide__image"
              src="https://trello-attachments.s3.amazonaws.com/5f9bf9da4ef72b5e96d70d02/5f9c013b390a4735863ccb17/649f0410e7a316f5720a9deaea73b588/112815953-stock-vector-no-image-available-icon-flat-vector.jpg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </>
    );
  } else {
    return (
      <>
        <Carousel>
          {animal?.photos.map((photo) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100 slide__image"
                  src={`${photo.full}`}
                  alt="First slide"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </>
    );
  }
}

export default SliderDetail;
