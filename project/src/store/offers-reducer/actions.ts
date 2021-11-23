import { ActionType, TChangeCityAction, TChangeOfferFavoriteStatus, TFillOffersAction, TSortByTypeAction, TUnfavoriteAllOffers } from '../../types/action';
import { TCity } from '../../types/city';
import TCityPlaceCard from '../../types/city-place-card';
import TSortType from '../../types/sort-type';

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

export const changeOfferFavoriteStatus = (offerId: number, status: boolean): TChangeOfferFavoriteStatus => ({
  type: ActionType.ChangeOfferFavoriteStatus,
  offerId,
  status,
});

export const unfavoriteAllOffers = (): TUnfavoriteAllOffers => ({
  type: ActionType.UnfavoriteAllOffers,
});
