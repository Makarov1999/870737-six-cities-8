import React from 'react';
import CityPlaceCard from '../../types/city-place-card';
import Main from '../main/main';

type AppProps = {
  cards: CityPlaceCard[]
}
function App(props: AppProps): JSX.Element {
  return (
    <React.StrictMode>
      <Main cards={props.cards}/>;
    </React.StrictMode>
  );
}

export default App;
