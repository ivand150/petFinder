import React, { useEffect, useState} from 'react';
import './MainDetails.css';
import Details from './Details';
import SliderDetail from './SliderDetail';
import store from '../../stores/principal-store';
import {requestToken, requestAnimal} from '../../actions/actions'

function MainDetails({match}) {
    debugger;
    const [token, setToken] = useState(store.getToken())
    const [animal, setAnimal] = useState(store.getAnimal())
    const animalId = match.params.animalId

    useEffect(() => {
        store.addEventListener(handleChange) 

        if (!token) {
            requestToken();
        } else if(!animal) {
            debugger;
            requestAnimal(animalId);
        }

        return( () => {
            store.removeEventListener(handleChange);
        }) 
        
    }, [token, animal, animalId])

    function handleChange() {
        setToken(store.getToken())
        setAnimal(store.getAnimal())
    }
    
    return (
        <main>
            <SliderDetail animal={animal} />
            <Details animal={animal} />
        </main>
    );
}

export default MainDetails;
