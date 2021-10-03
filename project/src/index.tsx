import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { CITY_PLACES } from './const';

const cityPlaces = CITY_PLACES;
ReactDOM.render(
  <React.StrictMode>
    <App cards={cityPlaces}/>
  </React.StrictMode>,
  document.getElementById('root'));
