import TCityPlaceCard from '../../types/city-place-card';
import { FavoriteActionTypes } from './favorite.constants';
import { TFavoriteActions, TFavoriteState, TFillFavoriteOffersAction, TRemoveFavoriteOfferAction } from './favorite.types';
import { CITIES_NAMES } from '../../constants';

export const fillFavorites = (favoriteOffers: TCityPlaceCard[]): TFillFavoriteOffersAction => ({
  type: FavoriteActionTypes.FillFavorites,
  favoriteOffers,
});

export const removeFavorite = (offerId: number): TRemoveFavoriteOfferAction => ({
  type: FavoriteActionTypes.RemoveFavorite,
  offerId,
});

const mapFavoriteOffers = (favoriteOffers: TCityPlaceCard[]): Array<[string, TCityPlaceCard[]]> => {
  if(!favoriteOffers.length) {
    return [];
  }
  const mappedFavoriteOffers: Array<[string, TCityPlaceCard[]]> = [];
  for (const cityName of CITIES_NAMES) {
    const filteredOffers = favoriteOffers.filter((offer) => offer.city.name === cityName);
    if (filteredOffers.length > 0) {
      mappedFavoriteOffers.push([cityName, filteredOffers]);
    }
  }
  return mappedFavoriteOffers;
};

export const favoriteReducer = (state: TFavoriteState, action: TFavoriteActions): TFavoriteState => {
  switch(action.type) {
    case FavoriteActionTypes.FillFavorites: {
      const favoriteOffers = [...action.favoriteOffers];
      const mappedFavoriteOffers = mapFavoriteOffers(favoriteOffers);
      return {
        ...state,
        favoriteOffers,
        mappedFavoriteOffers,
        isFavoriteOffersLoaded: true,
      };
    }
    case FavoriteActionTypes.RemoveFavorite: {
      const favoriteOffers = state.favoriteOffers.filter((favoriteOffer) => favoriteOffer.id !== action.offerId);
      const mappedFavoriteOffers = mapFavoriteOffers(favoriteOffers);
      return {
        ...state,
        favoriteOffers,
        mappedFavoriteOffers,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
