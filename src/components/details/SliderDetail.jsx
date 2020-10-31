import React, { useEffect} from 'react';
import './SliderDetail.css';


function SliderDetail ({animal})  {

    useEffect(() => {
      if(animal) {
        showSlides(slideIndex);
      }
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
            {animal?.photos.map((photo) => {
      return (
     <div className="mySlides fade" key={animal?.photo} >
      <img className='slide__image' alt='' key={animal?.photo}
          src={`${photo.full}`}/>
     </div>)
    })}
        <aside className='slide__aside aside-right' onClick={() => plusSlides(1)}><span className="material-icons">
                chevron_right
            </span></aside>
        <ul className='slide__dots'>
            {
            animal?.photos.map((element, index) => {
              return <li className='dot' key={index + 1} onClick={() => currentSlide(index + 1)}></li>
            })
            }
        </ul>
    </div>
    </>
    )
    
}

export default SliderDetail