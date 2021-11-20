import { createSelector } from 'reselect';
import { TOffersState } from '../../types/state';
import { sortTypeToSortingGetter } from  '../../utils/sort';
const getOffers = (state: TOffersState) => state.offers;
const getActiveCity = (state: TOffersState) => state.activeCity;
const getSortType = (state: TOffersState) => state.sortType;
export const getOffersResult = createSelector(
  getOffers,
  getActiveCity,
  getSortType,
  (offers, activeCity, sortType) => sortTypeToSortingGetter[sortType](
    offers
      .filter((offer) => offer.city.name === activeCity.title)),
);
