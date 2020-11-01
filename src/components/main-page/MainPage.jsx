import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
  return (
    <main>
      <Link to={`list/dog`} className="principal-button">
        Find a Dog
      </Link>
      <Link to={`list/:age=young`} className="principal-button">
        Find Young animals
      </Link>
    </main>
  );
}

export default MainPage;
