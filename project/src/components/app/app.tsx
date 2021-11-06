import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Favorite  from '../favorite/favorite';
import Login from '../login/login';
import Main from '../main/main';
import NotFound from '../not-found/not-found';
import Property from '../property/property';
import {AppRoutes} from './app.constants';
import PrivateRoute from '../private-route/private-route';
import { connect, ConnectedProps } from 'react-redux';
import Spinner from '../spinner/spinner';
import { OFFERS_MOCK } from '../../mocks/offers';
import { Dispatch, useEffect } from 'react';
import { TActions, TThunkActionDispatch } from '../../types/action';
import { checkUserAuth, fetchOffersAction } from '../../store/api-actions';
import { TRootState } from '../../store/reducer';


const mapStateToProps = ({OFFERS}: TRootState) => ({
  isDataLoaded: OFFERS.isDataLoaded,
});
const mapDispatchToProps = (dispatch: Dispatch<TActions>) => ({
  loadOffers() {
    (dispatch as TThunkActionDispatch)(fetchOffersAction());
  },
  checkAuthorization() {
    (dispatch as TThunkActionDispatch)(checkUserAuth());
  },
});
const appConnector = connect(mapStateToProps, mapDispatchToProps);
 type TConnectedAppProps = ConnectedProps<typeof appConnector>;

function App({isDataLoaded, loadOffers, checkAuthorization}: TConnectedAppProps): JSX.Element {
  useEffect(() => {
    loadOffers();
    checkAuthorization();
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
          render={() => <Favorite cards={OFFERS_MOCK}/>}
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
