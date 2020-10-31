<<<<<<< HEAD
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
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer/Footer';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <BrowserRouter></BrowserRouter>
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
>>>>>>> 75b2df899fd357cbe62cabe68dbaa4d6bdae6b17
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
