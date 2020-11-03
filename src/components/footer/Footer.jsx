import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="section__footer">
      <div className="footer-inner">
        <div className="logo__footer">
          <img
            className="image__footer"
            src="https://trello-attachments.s3.amazonaws.com/5f9d3d8395a20040a815a80a/768x727/6b9e6b190008963e1377a82e5497b4c1/dogcat2.png"
            alt=""
          />
          <p className="logo-name">PetFinder</p>
          {/* <span>Pet Finder</span> */}
        </div>
        <div className="about-us">
          <p className="about-us__text">
            Petfinder is an online, searchable database of animals who need
            homes. It is also a directory of nearly 11,000 animal shelters and
            adoption organizations across the U.S., Canada and Mexico.
            Organizations maintain their own home pages and available-pet
            databases.
          </p>
        </div>
        <div className="contact-us">Contact Us</div>
      </div>
      <div className="subFooter">
        <div className="subFooter__social">
          <ul className="footer-social">
            <li className="social__items-list">
              <i class="fab fa-facebook"></i>
            </li>
            <li className="social__items-list">
              <i class="fa fa-twitter"></i>
            </li>
            <li className="social__items-list">
              <i class="fab fa-instagram"></i>
            </li>
            <li className="social__items-list">
              <i class="fab fa-youtube"></i>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p className="copyright__text">&copy; 2020 PetFinder Team</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
