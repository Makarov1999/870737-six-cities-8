import { adaptToClient } from '../../adapters/adapt-to-client';
import { APIRoutes } from '../../services/api/api.constants';
import { TThunkActionResult } from '../../types/action';
import TCityPlaceCard from '../../types/city-place-card';
import TCityPlaceCardApi from '../../types/city-place-card-api';
import { changeOfferFavoriteStatus, fillOffersStore } from './actions';

export const fetchOffersAction = (): TThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    const { data } = await api.get<TCityPlaceCardApi[]>(APIRoutes.Offers);
    const offers = data.map((offer: TCityPlaceCardApi) => adaptToClient<TCityPlaceCardApi, TCityPlaceCard>(offer));
    dispatch(fillOffersStore(offers));
  };

export const changeFavoriteStatusFromOffer = (offerId: number, isFavorite: boolean): TThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    await api.post(`${APIRoutes.Favorite}/${offerId}/${+!isFavorite}`);
    dispatch(changeOfferFavoriteStatus(offerId, !isFavorite));
  };
