import React from 'react';
import { Main } from '../main';
import {CITY_PLACES} from './app.const';

function App(): JSX.Element {
  return (
    <>
      <Main cards={CITY_PLACES}/>;
    </>
  );
}

export default App;
