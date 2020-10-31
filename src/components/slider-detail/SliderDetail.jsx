import React, { useEffect, useState } from 'react';
import store from '../../stores/principal-store';
import './SliderDetail.css';


function SliderDetail ()  {

    useEffect(() => {
        showSlides(slideIndex);
    })

    let slideIndex = 1;
    
  
    // Next/previous controls
    function plusSlides(n) {
      showSlides((slideIndex += n));
    }
  
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides((slideIndex = n));
    }
  
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
    
    return (
    <>
    <div className='slide'>
        <aside className='slide__aside aside-left' onClick={() => plusSlides(-1)}><span className="material-icons">
                chevron_left
            </span></aside>
        <div className="mySlides fade">
            <img className='slide__image' alt=''
                src="https://trello-attachments.s3.amazonaws.com/5f9bf9da4ef72b5e96d70d02/5f9c013b390a4735863ccb17/6ccf02c311640e972469842d9ec378bc/1.jpg"/>
        </div>
        <div className="mySlides fade">
            <img className='slide__image' alt=''
                src="https://trello-attachments.s3.amazonaws.com/5f9bf9da4ef72b5e96d70d02/5f9c013b390a4735863ccb17/d9441113b6f3a47de80803ce3fd867ce/2.jpg"/>
        </div>
        <div className="mySlides fade">
            <img className='slide__image' alt=''
                src="https://trello-attachments.s3.amazonaws.com/5f9bf9da4ef72b5e96d70d02/5f9c013b390a4735863ccb17/24970a8654d78cbfc1455460eb718bc5/3.jpg"/>
        </div>
        <div className="mySlides fade">
            <img className='slide__image' alt=''
                src="https://trello-attachments.s3.amazonaws.com/5f9bf9da4ef72b5e96d70d02/5f9c013b390a4735863ccb17/ed7031f14f6131905294fe18fc542aea/4.jpg"/>
        </div>
        <aside className='slide__aside aside-right' onClick={() => plusSlides(1)}><span className="material-icons">
                chevron_right
            </span></aside>
        <ul className='slide__dots'>
            <li className='dot' onClick={() => currentSlide(1)}></li>
            <li className='dot' onClick={() => currentSlide(2)}></li>
            <li className='dot' onClick={() => currentSlide(3)}></li>
            <li className='dot' onClick={() => currentSlide(4)}></li>
        </ul>
    </div>
    </>
    )
    
}

export default SliderDetail