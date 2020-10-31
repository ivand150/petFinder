import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="section__footer">
      <div className="logo__footer">
        <img
          className="image__footer"
          src="https://trello-attachments.s3.amazonaws.com/5f9d3d8395a20040a815a80a/768x727/6b9e6b190008963e1377a82e5497b4c1/dogcat2.png"
          alt=""
        />
        <span>Pet Finder</span>
      </div>
      <p className="about-us">slogan here bla bla</p>
      <div className="contact-us">Contact Us</div>
    </footer>
  );
}

export default Footer;
