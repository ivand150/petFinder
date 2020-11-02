import React from "react";
import "./ScrollDetail.css";

function ScrollDetail(animals) {
  debugger;
  let test = animals?.animals
  return (
    <>
      <div className="scroll">
      <span className='related__title'>Related animals:</span>
        <section className="scrollable">    
          <img
            src={test[0]?.photos[0].medium}
            alt=""
            className="horisontal-images"
          />
          <img
            src={test[1]?.photos[0].medium}
            alt=""
            className="horisontal-images"
          />

          <img
            src={test[2]?.photos[0].medium}
            alt=""
            className="horisontal-images"
          />

          <img
            src={test[3]?.photos[0].medium}
            alt=""
            className="horisontal-images"
          />
          <img
            src={test[4]?.photos[0].medium}
            alt="image1"
            className="horisontal-images"
          />
          <img
            src={test[5]?.photos[0].medium}
            alt=""  
            className="horisontal-images"
          />
        </section>
      </div>
    </>
  );
}
export default ScrollDetail;
