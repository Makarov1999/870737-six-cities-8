import { ActionType, TActions } from '../../types/action';
import { TOffersState } from '../../types/state';
import { CITIES, DEFAULT_CITY, DEFAULT_SORT_TYPE } from '../../global.constants';

const initialState = {
  offers: [],
  activeCity: CITIES[0],
  targetOffers: [],
  sortOffers: [],
  sortType: DEFAULT_SORT_TYPE,
  isDataLoaded: false,
};
export const offersReducer = (state: TOffersState = initialState, action: TActions): TOffersState => {
  switch (action.type) {
    case ActionType.FillOffersStore: {
      return {
        ...state,
        offers: action.offers.slice(),
        activeCity: DEFAULT_CITY,
        isDataLoaded: true,
      };
    }
    case ActionType.ChangeCity: {
      const activeCity = action.city;
      return {
        ...state,
        activeCity,
      };
    }
    case ActionType.SortByType: {
      const sortType = action.sortType;
      return {
        ...state,
        sortType,
      };
    }
    case ActionType.ChangeOfferFavoriteStatus: {
      const offers = state.offers.slice();
      const offersIndex = offers.findIndex((offer) => (offer.id === action.offerId));
      offers[offersIndex].isFavorite = action.status;
      return {
        ...state,
        offers,
      };
    }
    default:
      return state;
  }
};
