import TCityPlaceCard from './city-place-card';

export enum ActionType {
  FillOffersStore = 'offers/fillStore',
  ChangeCity = 'offers/changeCity',
  SortPriceIncrease = 'offers/sortPrice/increase',
  SortPriceDecrease = 'offers/sortPrice/decrease',
  SortRateDecrease = 'offers/sortRate/decrease',
  SortPopularDecrease = 'offers/sortPopular/decrease',
}

export type TFillOffersAction = {
  type: ActionType.FillOffersStore,
  offers: TCityPlaceCard[],
}

export type TChangeCityAction = {
  type: ActionType.ChangeCity,
  cityName: string,
}

export type TSortByPriceIncrease = {
  type: ActionType.SortPriceIncrease;
}

export type TSortByPriceDecrease = {
  type: ActionType.SortPriceDecrease;
}

export type TSortByRateDecrease = {
  type: ActionType.SortRateDecrease;
}

export type TSortByPopularDecrease = {
  type: ActionType.SortPopularDecrease;
}

export type TActions = TFillOffersAction | TChangeCityAction | TSortByPriceIncrease | TSortByPriceDecrease | TSortByRateDecrease | TSortByPopularDecrease;
