import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import { createApi } from './services/api/api';
import 'leaflet/dist/leaflet.css';
import { AuthStatuses } from './global.constants';
import { requireAuthorization } from './store/action';
import { BrowserRouter } from 'react-router-dom';

export const api = createApi(() => store.dispatch(requireAuthorization(AuthStatuses.NoAuth)));
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
