import { ActionType, TChangeCityAction, TFillOffersAction, TSortByPopularDecrease, TSortByPriceDecrease, TSortByPriceIncrease, TSortByRateDecrease } from '../types/action';
import TCityPlaceCard from '../types/city-place-card';

export const fillOffersStore = (offers: TCityPlaceCard[]): TFillOffersAction => ({
  type: ActionType.FillOffersStore,
  offers,
});

export const changeCity = (cityName: string): TChangeCityAction => ({
  type: ActionType.ChangeCity,
  cityName,
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
