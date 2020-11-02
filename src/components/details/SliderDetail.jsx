import React, { useEffect} from 'react';
import './SliderDetail.css';
import Carousel from 'react-bootstrap/Carousel';


function SliderDetail ({animal})  {
debugger
      animal?.photos.map((photo) =>  {
        return(
          <Carousel>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${photo.full}`}
            alt="First slide"
          />
        </Carousel.Item>
        </Carousel>)
  })
  // <Carousel>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       src={`${photo.full}`}
  //       alt="First slide"
  //     />
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       src="https://trello-attachments.s3.amazonaws.com/5f9bf9da4ef72b5e96d70d02/5f9c013b390a4735863ccb17/649f0410e7a316f5720a9deaea73b588/112815953-stock-vector-no-image-available-icon-flat-vector.jpg"
  //       alt="Third slide"
  //     />
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       src="https://trello-attachments.s3.amazonaws.com/5f9bf9da4ef72b5e96d70d02/5f9c013b390a4735863ccb17/649f0410e7a316f5720a9deaea73b588/112815953-stock-vector-no-image-available-icon-flat-vector.jpg"
  //       alt="Third slide"
  //     />
  //   </Carousel.Item>
  // </Carousel>
  // )
  

  //   // useEffect(() => {
  //   //   if(animal) {
  //   //     showSlides(slideIndex);
  //   //   } 
  //   // })

  //   // let slideIndex = 1;
    
  
  //   // // Next/previous controls
  //   // function plusSlides(n) {
  //   //   showSlides((slideIndex += n));
    // }
  
    // // Thumbnail image controls
    // function currentSlide(n) {
    //   showSlides((slideIndex = n));
    // }
  
    // function showSlides(n) {
    //   let i;
    //   let slides = document.getElementsByClassName("mySlides");
    //   let dots = document.getElementsByClassName("dot");
    //   if (n > slides.length) {
    //     slideIndex = 1;
    //   }
    //   if (n < 1) {
    //     slideIndex = slides.length;
    //   }
    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[slideIndex - 1].style.display = "block";
    //   dots[slideIndex - 1].className += " active";
    // }
    
    // return (
    // <>
    
    // <div className='slide'>
    // {animal?.photos.map((photo) => {
    //   return (
    //  <div className="mySlides fade" key={animal?.photo} >
    //   <img className='slide__image' alt='' key={animal?.photo}
    //       src={`${photo.full}`}/>
    //  </div>)
    // })}
    //     <aside className='slide__aside aside-left' id='aside-left' onClick={() => plusSlides(-1)}><span className="material-icons">
    //             chevron_left
    //         </span></aside>
            
    //     <aside className='slide__aside aside-right' id='aside-right' onClick={() => plusSlides(1)}><span className="material-icons">
    //             chevron_right
    //         </span></aside>
    //     <ul className='slide__dots'>
    //         {
    //         animal?.photos.map((element, index) => {
    //           return <li className='dot' id={`dot${index}`} key={index + 1} onClick={() => currentSlide(index + 1)}></li>
    //         })
    //         }
    //     </ul>
    // </div>
    // </>
    // )
    
}

export default SliderDetail