import TSortType from './sort-type';
import { TCity } from './city';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import TCityPlaceCard from './city-place-card';
import { AuthStatuses } from '../global.constants';
import TAuthInfo from './auth-info';
import { TRootState } from '../store/reducer';

export enum ActionType {
  FillOffersStore = 'offers/fillStore',
  ChangeCity = 'offers/changeCity',
  SortByType = 'offers/sortByType',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetAuthInfo = 'user/setAuthInfo',
}

export type TFillOffersAction = {
  type: ActionType.FillOffersStore,
  offers: TCityPlaceCard[],
}

export type TChangeCityAction = {
  type: ActionType.ChangeCity,
  city: TCity,
}


export type TSortByTypeAction = {
  type: ActionType.SortByType;
  sortType: TSortType,
}

export type TRequireAuthorizationAction = {
  type: ActionType.RequireAuthorization,
  authorizationStatus: AuthStatuses
}

export type TRequireLogoutAction = {
  type: ActionType.RequireLogout,
};

export type TSetAuthInfoAction = {
  type: ActionType.SetAuthInfo,
  authInfo: TAuthInfo

}


export type TActions = TFillOffersAction | TChangeCityAction | TSortByTypeAction | TRequireAuthorizationAction | TRequireLogoutAction | TSetAuthInfoAction;
export type TThunkActionResult<R = Promise<void>> = ThunkAction<R, TRootState, AxiosInstance, TActions>;
export type TThunkActionDispatch = ThunkDispatch<TRootState, AxiosInstance, TActions>;
