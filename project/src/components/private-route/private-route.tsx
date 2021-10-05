import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AuthStatus } from '../app';
import { AppRoute } from '../app/app.constants';

type PrivateRouteProps = RouteProps & {
    render: () => JSX.Element,
    athorizationStatus: AuthStatus

};
function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render, athorizationStatus} = props;
  return (
    <Route exact={exact} path={path} render={
      () =>
        (athorizationStatus === AuthStatus.Auth
          ? render()
          : <Redirect to={AppRoute.SignIn}/>)
    }
    >
    </Route>
  );
}

export default PrivateRoute;
