import { TFavoriteState } from './favorite.types';

export enum FavoriteActionTypes  {
  FillFavorites = 'favoriteOffers/fill',
  RemoveFavorite = 'favoriteOffers/remove',
}

export const favoriteInitialState: TFavoriteState = {
  favoriteOffers: [],
  mappedFavoriteOffers: [],
  isFavoriteOffersLoaded: false,
};

