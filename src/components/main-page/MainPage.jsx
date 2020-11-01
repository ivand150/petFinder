import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <main>
            <Link to={`list/dog`}>Find a Dog</Link>
        </main>
    );
}

export default MainPage;
