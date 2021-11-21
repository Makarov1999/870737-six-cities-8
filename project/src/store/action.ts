import { AuthStatuses } from '../global.constants';
import { ActionType, TChangeCityAction, TChangeOfferFavoriteStatus, TFillOffersAction, TRequireAuthorizationAction, TRequireLogoutAction, TSetAuthInfoAction, TSortByTypeAction, TUnfavoriteAllOffers } from '../types/action';
import TAuthInfo from '../types/auth-info';
import { TCity } from '../types/city';
import TCityPlaceCard from '../types/city-place-card';
import TSortType from '../types/sort-type';

export const fillOffersStore = (offers: TCityPlaceCard[]): TFillOffersAction => ({
  type: ActionType.FillOffersStore,
  offers: offers,
});

export const changeCity = (city: TCity): TChangeCityAction => ({
  type: ActionType.ChangeCity,
  city,
});
export const sortByType = (sortType: TSortType): TSortByTypeAction => ({
  type: ActionType.SortByType,
  sortType,
});
export const requireAuthorization = (authorizationStatus: AuthStatuses): TRequireAuthorizationAction => ({
  type: ActionType.RequireAuthorization,
  authorizationStatus,
});
export const requireLogout = (): TRequireLogoutAction => ({
  type: ActionType.RequireLogout,
});

export const setAuthInfo = (authInfo: TAuthInfo): TSetAuthInfoAction => ({
  type: ActionType.SetAuthInfo,
  authInfo,
});

export const changeOfferFavoriteStatus = (offerId: number, status: boolean): TChangeOfferFavoriteStatus => ({
  type: ActionType.ChangeOfferFavoriteStatus,
  offerId,
  status,
});

export const unfavoriteAllOffers = (): TUnfavoriteAllOffers => ({
  type: ActionType.UnfavoriteAllOffers,
});


