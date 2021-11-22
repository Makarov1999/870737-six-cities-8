import TCityPlaceCard from '../../types/city-place-card';
import { FavoriteActionTypes } from './favorite.constants';

export type TFavoriteState = {
  favoriteOffers: TCityPlaceCard[],
  mappedFavoriteOffers: Array<[string, TCityPlaceCard[]]>
  isFavoriteOffersLoaded: boolean,
};

export type TFillFavoriteOffersAction = {
  type: FavoriteActionTypes.FillFavorites,
  favoriteOffers: TCityPlaceCard[],
};

export type TRemoveFavoriteOfferAction = {
  type: FavoriteActionTypes.RemoveFavorite,
  offerId: number,
};

export type TFavoriteActions = TFillFavoriteOffersAction | TRemoveFavoriteOfferAction;
