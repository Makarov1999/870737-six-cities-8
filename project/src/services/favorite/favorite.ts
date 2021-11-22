import { adaptToClient } from '../../adapters/adapt-to-client';
import { api } from '../../index';
import TCityPlaceCard from '../../types/city-place-card';
import TCityPlaceCardApi from '../../types/city-place-card-api';
import { APIRoutes } from '../api/api.constants';

export const getFavoriteOffers = async (): Promise<TCityPlaceCard[]> => {
  const { data }  = await api.get<TCityPlaceCardApi[]>(APIRoutes.Favorite);
  const favoriteOffers = data.map((offer: TCityPlaceCardApi) => adaptToClient<TCityPlaceCardApi, TCityPlaceCard>(offer));
  return favoriteOffers;
};
