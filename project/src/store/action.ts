import { ActionType, TChangeCityAction, TFillOffersAction, TSortByType } from '../types/action';
import { TCity } from '../types/city';
import TSortType from '../types/sort-type';

export const fillOffersStore = (): TFillOffersAction => ({
  type: ActionType.FillOffersStore,
});

export const changeCity = (city: TCity): TChangeCityAction => ({
  type: ActionType.ChangeCity,
  city,
});
export const sortByType = (sortType: TSortType): TSortByType => ({
  type: ActionType.SortByType,
  sortType,
});

