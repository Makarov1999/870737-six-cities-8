import { Switch, Route, useHistory } from 'react-router-dom';
import Favorite  from '../favorite/favorite';
import Login from '../login/login';
import Main from '../main/main';
import NotFound from '../not-found/not-found';
import Property from '../property/property';
import { AppRoutes } from './app.constants';
import PrivateRoute from '../private-route/private-route';
import { connect, ConnectedProps } from 'react-redux';
import Spinner from '../spinner/spinner';
import { useEffect, useState } from 'react';
import { fetchOffersAction } from '../../store/offers-reducer/api-actions';
import { checkUserAuth } from '../../store/user-reducer/api-actions';
import { TRootState } from '../../store/reducer';
import './app.css';
import { TAppDispatch } from '../../types/app-dispatch';


const mapStateToProps = ({ offers, user }: TRootState) => ({
  isDataLoaded: offers.isDataLoaded,
  authorizationStatus: user.authorizationStatus,
});
const mapDispatchToProps = (dispatch: TAppDispatch) => ({
  loadOffers() {
    return dispatch(fetchOffersAction());
  },
  checkAuthorization() {
    return dispatch(checkUserAuth());
  },
});
const appConnector = connect(mapStateToProps, mapDispatchToProps);
 type TConnectedAppProps = ConnectedProps<typeof appConnector>;

function App({isDataLoaded, loadOffers, checkAuthorization, authorizationStatus}: TConnectedAppProps): JSX.Element {
  const [loadError, setErrorLoad] = useState<string>('');
  const history = useHistory();
  useEffect(() => {
    checkAuthorization().catch(() => {
      history.push(AppRoutes.SignIn);
    });
  }, [authorizationStatus, checkAuthorization, history]);
  useEffect(() => {
    loadOffers().catch(() => {
      setErrorLoad('Произошла ошибка при загрузке данных');
    });
  }, [loadOffers]);
  if (!isDataLoaded) {
    return(
      <Spinner/>
    );
  }
  if (loadError) {
    return (
      <p className="load-error-title">{loadError}</p>
    );
  }
  return(
    <Switch>
      <Route path={AppRoutes.Main} exact>
        <Main/>
      </Route>
      <Route path={AppRoutes.SignIn} exact>
        <Login/>
      </Route>
      <PrivateRoute
        path={AppRoutes.Favorites}
        render={() => <Favorite/>}
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
  );
}

export default appConnector(App);
