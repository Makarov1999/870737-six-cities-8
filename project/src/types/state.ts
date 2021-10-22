import { TCity } from './city';
import TCityPlaceCard from './city-place-card';

export type State = {
  offers: TCityPlaceCard[],
  city: TCity,
  targetOffers: TCityPlaceCard[],
  sortOffers: TCityPlaceCard[]
}
