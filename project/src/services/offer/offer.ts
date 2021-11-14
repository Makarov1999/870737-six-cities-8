import { adaptToClient } from '../../adapters/adapt-to-client';
import { api } from '../../index';
import TCityPlaceCard from '../../types/city-place-card';
import TCityPlaceCardApi from '../../types/city-place-card-api';
import { APIRoutes } from '../api/api.constants';
import { TSuccessOfferFunction, TSuccessOfferNeabyFunction } from './offer.types';

export const getOfferById = async (id: string, onSuccess: TSuccessOfferFunction, onError: VoidFunction): Promise<void> => {
  try {
    const { data } = await api.get<TCityPlaceCardApi>(`${APIRoutes.Offers}/${id}`);
    onSuccess(adaptToClient<TCityPlaceCardApi, TCityPlaceCard>(data));
  }
  catch {
    onError();
  }
};

export const getOffersNeaby = async (id: string, onSuccess: TSuccessOfferNeabyFunction, onError: VoidFunction): Promise<void> => {
  try {
    const { data } = await api.get<TCityPlaceCardApi[]>(`${APIRoutes.Offers}/${id}/nearby`);
    const offers = data.map((offer: TCityPlaceCardApi) => adaptToClient<TCityPlaceCardApi, TCityPlaceCard>(offer));
    onSuccess(offers);
  }
  catch {
    onError();
  }
};
