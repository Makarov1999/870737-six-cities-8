import { AuthStatuses } from '../global.constants';
import { TCity } from './city';
import TCityPlaceCard from './city-place-card';

export type TState = {
  authorizationStatus: AuthStatuses
  offers: TCityPlaceCard[],
  activeCity: TCity,
  targetOffers: TCityPlaceCard[],
  sortOffers: TCityPlaceCard[],
  isDataLoaded: boolean,
}
