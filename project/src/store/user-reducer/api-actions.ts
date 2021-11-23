import { APIRoutes } from '../../services/api/api.constants';
import { TThunkActionResult } from '../../types/action';
import { requireAuthorization, requireLogout, setAuthInfo } from './actions';
import { adaptToClient } from '../../adapters/adapt-to-client';
import { AuthStatuses } from '../../constants';
import { dropToken, setToken } from '../../services/token/token';
import { TAuthData } from '../../types/auth-data';
import TAuthInfo from '../../types/auth-info';
import TAuthInfoApi from '../../types/auth-info-api';
import { unfavoriteAllOffers } from '../offers-reducer/actions';


export const checkUserAuth = (): TThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    const { data } = await api.get(APIRoutes.Login);
    const authInfo = adaptToClient<TAuthInfoApi, TAuthInfo>(data);
    setToken(authInfo.token);
    dispatch(setAuthInfo(authInfo));
    dispatch(requireAuthorization(AuthStatuses.Auth));
  };
export const loginAction = ({email, password}: TAuthData): TThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    const { data } = await api.post<TAuthInfoApi>(APIRoutes.Login, {email, password});
    const authInfo = adaptToClient<TAuthInfoApi, TAuthInfo>(data);
    setToken(data.token);
    dispatch(requireAuthorization(AuthStatuses.Auth));
    dispatch(setAuthInfo(authInfo));
  };
export const logoutAction = (): TThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(unfavoriteAllOffers());
  };
