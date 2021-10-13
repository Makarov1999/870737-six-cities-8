import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Favorite } from '../favorite';
import { Login } from '../login';
import { Main } from '../main';
import { NotFound } from '../not-found';
import { Property } from '../property';
import {AppRoutes, AuthStatuses} from './app.constants';
import { OFFERS } from '../../mocks/offers';
import { PrivateRoute } from '../private-route';

function App(): JSX.Element {
  return(
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.Main} exact>
          <Main offers={OFFERS}/>
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

export default App;
