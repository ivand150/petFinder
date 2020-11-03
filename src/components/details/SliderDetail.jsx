import React, { useEffect} from 'react';
import './SliderDetail.css';
import Carousel from 'react-bootstrap/Carousel';


function SliderDetail ({animal})  {
debugger
  return(
    <> 
      <Carousel>
      {animal?.photos.map((photo) =>{
        return(
        <Carousel.Item>
          <img
          className="d-block w-100"
          src={`${photo.full}`}
          alt="First slide"
        />
        </Carousel.Item> 
       );
      })};
      </Carousel>
    </>
  ); 
}

export default SliderDetail