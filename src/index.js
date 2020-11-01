import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer/Footer';
import MainDetails from './components/details/MainDetails';
import MainList from './components/list/MainList'
import MainPage from './components/main-page/MainPage'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/details/:animalId" component={MainDetails} />
        <Route path="/list/:type?/:breed?/:gender?/:age?" component={MainList} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
