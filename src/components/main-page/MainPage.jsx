import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  return (
    <main>
      <Link
        to={{ pathname: '/list', search: '?type=dog' }}
        className="principal-button"
      >
        Find a Dog
      </Link>
      <Link
        to={{ pathname: '/list', search: '?type=cat' }}
        className="principal-button"
      >
        Find a Cat
      </Link>
    </main>
  );
}

export default MainPage;
