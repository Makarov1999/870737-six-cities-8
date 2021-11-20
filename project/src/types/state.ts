import { AuthStatuses } from '../global.constants';
import  TAuthInfo  from './auth-info';
import { TCity } from './city';
import TCityPlaceCard from './city-place-card';
import TSortType from './sort-type';

export type TOffersState = {
  offers: TCityPlaceCard[],
  activeCity: TCity,
  sortType: TSortType,
  isDataLoaded: boolean,
}

export type TUserState = {
  authorizationStatus: AuthStatuses,
  authInfo: TAuthInfo | null,
}
