import { ActionType, TChangeCityAction, TFillOffersAction } from '../types/action';
import TCityPlaceCard from '../types/city-place-card';

export const fillOffersStore = (offers: TCityPlaceCard[]): TFillOffersAction => ({
  type: ActionType.FillOffersStore,
  offers,
});

export const changeCity = (cityName: string): TChangeCityAction => ({
  type: ActionType.ChangeCity,
  cityName,
});
