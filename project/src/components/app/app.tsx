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


const mapStateToProps = ({isDataLoaded}: TState) => ({
  isDataLoaded,
});
const appConnector = connect(mapStateToProps);
 type TConnectedAppProps = ConnectedProps<typeof appConnector>;

function App({isDataLoaded}: TConnectedAppProps): JSX.Element {
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
