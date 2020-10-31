import React from "react";
import "./MainList.css";
import Filters from "./Filters";
import List from "./List";

function MainList() {
  return (
    <main>
      <Filters />
      <List />
    </main>
  );
}

export default MainList;
