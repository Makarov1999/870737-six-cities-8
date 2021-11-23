import { AuthStatuses } from '../../constants';
import { ActionType, TRequireAuthorizationAction, TRequireLogoutAction, TSetAuthInfoAction } from '../../types/action';
import TAuthInfo from '../../types/auth-info';


export const requireAuthorization = (authorizationStatus: AuthStatuses): TRequireAuthorizationAction => ({
  type: ActionType.RequireAuthorization,
  authorizationStatus,
});
export const requireLogout = (): TRequireLogoutAction => ({
  type: ActionType.RequireLogout,
});

export const setAuthInfo = (authInfo: TAuthInfo): TSetAuthInfoAction => ({
  type: ActionType.SetAuthInfo,
  authInfo,
});
