import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer/Footer";
import SliderDetail from "./components/slider-detail/SliderDetail";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SliderDetail />
    <Footer />
    <BrowserRouter></BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
