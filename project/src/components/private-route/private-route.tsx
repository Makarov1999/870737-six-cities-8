import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AuthStatuses } from '../../global.constants';
import { AppRoutes } from '../app/app.constants';
import {connect, ConnectedProps} from 'react-redux';
import { TRootState } from '../../store/reducer';

type TPrivateRouteProps = RouteProps & {
    render: () => JSX.Element
};

const mapStateToProps = ({ user }: TRootState) => ({
  authorizationStatus: user.authorizationStatus,
});

const privateRouteConnector = connect(mapStateToProps);
type TPrivateRouteConnectedProps = ConnectedProps<typeof privateRouteConnector> & TPrivateRouteProps;

function PrivateRoute(props: TPrivateRouteConnectedProps): JSX.Element {
  const {exact, path, render, authorizationStatus} = props;
  return (
    <Route exact={exact} path={path} render={
      () =>
        (authorizationStatus === AuthStatuses.Auth
          ? render()
          : <Redirect to={AppRoutes.SignIn}/>)
    }
    >
    </Route>
  );
}

export default privateRouteConnector(PrivateRoute);
