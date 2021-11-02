import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Favorite  from '../favorite/favorite';
import Login from '../login/login';
import Main from '../main/main';
import NotFound from '../not-found/not-found';
import Property from '../property/property';
import {AppRoutes} from './app.constants';
import { AuthStatuses } from '../../global.constants';
import PrivateRoute from '../private-route/private-route';
import { TState } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import Spinner from '../spinner/spinner';
import { OFFERS } from '../../mocks/offers';
import { Dispatch, useEffect } from 'react';
import { TActions, TThunkActionDispatch } from '../../types/action';
import { fetchOffersAction } from '../../store/api-actions';


const mapStateToProps = ({isDataLoaded}: TState) => ({
  isDataLoaded,
});
const mapDispatchToProps = (dispatch: Dispatch<TActions>) => ({
  loadOffers() {
    (dispatch as TThunkActionDispatch)(fetchOffersAction());
  },
});
const appConnector = connect(mapStateToProps, mapDispatchToProps);
 type TConnectedAppProps = ConnectedProps<typeof appConnector>;

function App({isDataLoaded, loadOffers}: TConnectedAppProps): JSX.Element {
  useEffect(() => {
    loadOffers();
  }, []);
  if (!isDataLoaded) {
    return(
      <Spinner/>
    );
  }
  return(
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.Main} exact>
          <Main/>
        </Route>
        <Route path={AppRoutes.SignIn} exact>
          <Login/>
        </Route>
        <PrivateRoute
          path={AppRoutes.Favorites}
          render={() => <Favorite cards={OFFERS}/>}
          athorizationStatus={AuthStatuses.Auth}
          exact
        >
        </PrivateRoute>
        <Route path={AppRoutes.Room} exact>
          <Property/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default appConnector(App);
