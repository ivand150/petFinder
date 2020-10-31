import React from 'react'
import './footer.css';

function Footer (){
    return ( 
        <>
        <section className='section__footer'>
            <div className='logo__footer'>
            <img className='image__footer' src="https://trello-attachments.s3.amazonaws.com/5f9bf9da4ef72b5e96d70d02/5f9d3d8395a20040a815a80a/5c4e9dda49a0f86d10b237adcbb43c78/584eb97de7011_thumb80.jpg" alt=""/>
            <span>Pet Finder</span>
            </div>
            <p className='about-us'>slogan here bla bla</p>
            <div className='contact-us'>Contact Us</div>
            </section>
        
        </>
    )
}

export default Footer;