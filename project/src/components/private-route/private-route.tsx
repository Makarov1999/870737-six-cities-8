import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AuthStatuses } from '../../global.constants';
import { AppRoutes } from '../app/app.constants';
type PrivateRouteProps = RouteProps & {
    render: () => JSX.Element,
    athorizationStatus: AuthStatuses

};
function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render, athorizationStatus} = props;
  return (
    <Route exact={exact} path={path} render={
      () =>
        (athorizationStatus === AuthStatuses.Auth
          ? render()
          : <Redirect to={AppRoutes.SignIn}/>)
    }
    >
    </Route>
  );
}

export default PrivateRoute;
