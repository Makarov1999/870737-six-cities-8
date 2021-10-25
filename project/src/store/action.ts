import { ActionType, TChangeCityAction, TFillOffersAction, TSortByType } from '../types/action';
import { TCity } from '../types/city';
import { MapSortKeys } from './map-sort';

export const fillOffersStore = (): TFillOffersAction => ({
  type: ActionType.FillOffersStore,
});

export const changeCity = (city: TCity): TChangeCityAction => ({
  type: ActionType.ChangeCity,
  city,
});
export const sortByType = (sortType: MapSortKeys): TSortByType => ({
  type: ActionType.SortByType,
  sortType,
});

