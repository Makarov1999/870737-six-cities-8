import { ActionType, TChangeCityAction, TFillOffersAction, TSortByPopularDecrease, TSortByPriceDecrease, TSortByPriceIncrease, TSortByRateDecrease } from '../types/action';
import { TCity } from '../types/city';

export const fillOffersStore = (): TFillOffersAction => ({
  type: ActionType.FillOffersStore,
});

export const changeCity = (city: TCity): TChangeCityAction => ({
  type: ActionType.ChangeCity,
  city,
});

export const sortByPriceIncrease = (): TSortByPriceIncrease => ({
  type: ActionType.SortPriceIncrease,
});

export const sortByPriceDecrease = (): TSortByPriceDecrease => ({
  type: ActionType.SortPriceDecrease,
});

export const sortByRateDecrease = (): TSortByRateDecrease => ({
  type: ActionType.SortRateDecrease,
});

export const sortByPopularDecrease = (): TSortByPopularDecrease => ({
  type: ActionType.SortPopularDecrease,
});
