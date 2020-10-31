import React from "react";
import "./MainDetails.css";
import Details from "./Details";
import SliderDetail from "./SliderDetail";
import ScrollDetail from "./ScrollDetail";

function MainDetails({ match }) {
  const animalId = match.params.animalId;
  return (
    <main>
      <SliderDetail />
      <Details animalId={animalId} />
      <ScrollDetail />
    </main>
  );
}

export default MainDetails;
