import { TCity } from './city';
import TCityPlaceCard from './city-place-card';

export type TState = {
  offers: TCityPlaceCard[],
  activeCity: TCity,
  targetOffers: TCityPlaceCard[],
  sortOffers: TCityPlaceCard[]
}
