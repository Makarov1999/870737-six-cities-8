import { AuthStatuses } from '../global.constants';
import  TAuthInfo  from './auth-info';
import { TCity } from './city';
import TCityPlaceCard from './city-place-card';

export type TOffersState = {
  offers: TCityPlaceCard[],
  activeCity: TCity,
  targetOffers: TCityPlaceCard[],
  sortOffers: TCityPlaceCard[],
  isDataLoaded: boolean,
}

export type TUserState = {
  authorizationStatus: AuthStatuses,
  authInfo: TAuthInfo | null,
}
