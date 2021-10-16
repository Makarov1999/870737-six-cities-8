import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Favorite  from '../favorite/favorite';
import Login from '../login/login';
import Main from '../main/main';
import NotFound from '../not-found/not-found';
import Property from '../property/property';
import {AppRoutes, AuthStatuses} from './app.constants';
import PrivateRoute from '../private-route/private-route';
import TCityPlaceCard from '../../types/city-place-card';

type TAppProps = {
  offers: TCityPlaceCard[]
};

function App({offers}: TAppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.Main} exact>
          <Main offers={offers}/>
        </Route>
        <Route path={AppRoutes.SignIn} exact>
          <Login/>
        </Route>
        <PrivateRoute
          path={AppRoutes.Favorites}
          render={() => <Favorite cards={offers}/>}
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

export default App;
