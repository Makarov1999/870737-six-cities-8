import TCityPlaceCard from './city-place-card';

export enum ActionType {
  FillOffersStore = 'offers/fillStore',
  ChangeCity = 'offers/changeCity',
}

export type TFillOffersAction = {
  type: ActionType.FillOffersStore,
  offers: TCityPlaceCard[],
}

export type TChangeCityAction = {
  type: ActionType.ChangeCity,
  cityName: string,
}

export type TActions = TFillOffersAction | TChangeCityAction;
