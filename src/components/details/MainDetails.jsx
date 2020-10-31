import React from 'react';
import './MainDetails.css';
import Details from './Details';
import SliderDetail from './SliderDetail';

function MainDetails({match}) {
    const animalId = match.params.animalId
    return (
        <main>
            <SliderDetail />
            <Details animalId={animalId} />
        </main>
    );
}

export default MainDetails;
