import { MapSortKeys } from '../store/map-sort';
import { TCity } from './city';

export enum ActionType {
  FillOffersStore = 'offers/fillStore',
  ChangeCity = 'offers/changeCity',
  SortByType = 'offers/sortByType'
}

export type TFillOffersAction = {
  type: ActionType.FillOffersStore
}

export type TChangeCityAction = {
  type: ActionType.ChangeCity,
  city: TCity,
}


export type TSortByType = {
  type: ActionType.SortByType;
  sortType: MapSortKeys,
}

export type TActions = TFillOffersAction | TChangeCityAction | TSortByType;
