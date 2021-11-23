import { adaptToClient } from '../../adapters/adapt-to-client';
import { api } from '../../index';
import TCityPlaceCard from '../../types/city-place-card';
import TCityPlaceCardApi from '../../types/city-place-card-api';
import { APIRoutes } from '../api/api.constants';

export const getOfferById = async (id: string): Promise<TCityPlaceCard> => {
  const { data } = await api.get<TCityPlaceCardApi>(`${APIRoutes.Offers}/${id}`);
  return adaptToClient<TCityPlaceCardApi, TCityPlaceCard>(data);
};

export const getOffersNearby = async (id: string): Promise<TCityPlaceCard[]> => {
  const { data } = await api.get<TCityPlaceCardApi[]>(`${APIRoutes.Offers}/${id}/nearby`);
  const offers = data.map((offer: TCityPlaceCardApi) => adaptToClient<TCityPlaceCardApi, TCityPlaceCard>(offer));
  return offers;
};
