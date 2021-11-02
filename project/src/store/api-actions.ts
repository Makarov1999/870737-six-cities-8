import { APIRoutes } from '../services/api/api.constants';
import { TThunkActionResult } from '../types/action';
import { fillOffersStore } from './action';
import { adaptToClient } from '../adapters/adapt-to-client';
import TCityPlaceCardApi from '../types/city-place-card-api';
import TCityPlaceCard from '../types/city-place-card';

export const fetchOffersAction = (): TThunkActionResult =>
  async (dispatch, _ , api): Promise<void> => {
    const { data } = await api.get<TCityPlaceCardApi[]>(APIRoutes.Offers);
    const offers = data.map((offer: TCityPlaceCardApi) => adaptToClient<TCityPlaceCardApi, TCityPlaceCard>(offer));
    dispatch(fillOffersStore(offers));
  };


