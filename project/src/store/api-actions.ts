import { APIRoutes } from '../services/api/api.constants';
import { TThunkActionResult } from '../types/action';
import { fillOffersStore, requireAuthorization, requireLogout, setAuthInfo } from './action';
import { adaptToClient } from '../adapters/adapt-to-client';
import TCityPlaceCardApi from '../types/city-place-card-api';
import TCityPlaceCard from '../types/city-place-card';
import { AuthStatuses } from '../global.constants';
import { dropToken, setToken } from '../services/token/token';
import { TAuthData } from '../types/auth-data';
import TAuthInfo from '../types/auth-info';
import TAuthInfoApi from '../types/auth-info-api';
import  browserHistory  from '../browser-history/browser-history';
import { AppRoutes } from '../components/app/app.constants';

export const fetchOffersAction = (onErrorCallbak: VoidFunction): TThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    try {
      const { data } = await api.get<TCityPlaceCardApi[]>(APIRoutes.Offers);
      const offers = data.map((offer: TCityPlaceCardApi) => adaptToClient<TCityPlaceCardApi, TCityPlaceCard>(offer));
      dispatch(fillOffersStore(offers));
    }
    catch {
      onErrorCallbak();
    }
  };
export const checkUserAuth = (): TThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    try {
      const { data } = await api.get(APIRoutes.Login);
      const authInfo = adaptToClient<TAuthInfoApi, TAuthInfo>(data);
      setToken(authInfo.token);
      dispatch(setAuthInfo(authInfo));
      dispatch(requireAuthorization(AuthStatuses.Auth));
    }
    catch {
      browserHistory.push(AppRoutes.SignIn);
    }
  };
export const loginAction = ({email, password}: TAuthData, onErrorCallbak: VoidFunction): TThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    try {
      const { data } = await api.post<TAuthInfoApi>(APIRoutes.Login, {email, password});
      const authInfo = adaptToClient<TAuthInfoApi, TAuthInfo>(data);
      setToken(data.token);
      dispatch(requireAuthorization(AuthStatuses.Auth));
      dispatch(setAuthInfo(authInfo));
    }
    catch {
      onErrorCallbak();
    }
  };
export const logoutAction = (): TThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    api.delete(APIRoutes.Logout);
    dropToken();
    dispatch(requireLogout());
  };

