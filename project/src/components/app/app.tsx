import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Favorite } from '../favorite';
import { Login } from '../login';
import { Main } from '../main';
import { NotFound } from '../not-found';
import { Property } from '../property';
import {CITY_PLACES, AppRoute} from './app.constants';
import { PrivateRoute } from '../private-route';
import { AuthStatus } from '.';

function App(): JSX.Element {
  return(
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main cards={CITY_PLACES}/>
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <Login/>
        </Route>
        <PrivateRoute
          path={AppRoute.Favorites}
          render={() => <Favorite/>}
          athorizationStatus={AuthStatus.NoAuth}
          exact
        >
        </PrivateRoute>
        <Route path={AppRoute.Room} exact>
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
