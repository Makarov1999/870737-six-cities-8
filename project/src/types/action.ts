import TSortType from './sort-type';
import { TCity } from './city';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { TState } from '../types/state';
import { AxiosInstance } from 'axios';
import TCityPlaceCard from './city-place-card';
import { AuthStatuses } from '../global.constants';

export enum ActionType {
  FillOffersStore = 'offers/fillStore',
  ChangeCity = 'offers/changeCity',
  SortByType = 'offers/sortByType',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
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


export type TActions = TFillOffersAction | TChangeCityAction | TSortByTypeAction | TRequireAuthorizationAction | TRequireLogoutAction;
export type TThunkActionResult<R = Promise<void>> = ThunkAction<R, TState, AxiosInstance, TActions>;
export type TThunkActionDispatch = ThunkDispatch<TState, AxiosInstance, TActions>;
