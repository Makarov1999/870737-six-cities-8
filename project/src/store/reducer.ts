import { ActionType, TActions } from '../types/action';
import { TState } from '../types/state';
import { AuthStatuses, CITIES } from '../global.constants';
import { DEFAULT_CITY } from '../global.constants';
import { sortTypeToSortingGetter } from '../utils/sort';
const initialState: TState= {
  authorizationStatus: AuthStatuses.Unknown,
  offers: [],
  activeCity: CITIES[0],
  targetOffers: [],
  sortOffers: [],
  isDataLoaded: false,
};

const reducer = (state: TState = initialState, action: TActions): TState => {
  switch(action.type) {
    case ActionType.FillOffersStore: {
      const targetOffers = action.offers.filter((offer) => offer.city.name === DEFAULT_CITY.title);
      const sortOffers = targetOffers.slice();
      return {
        ...state,
        offers: action.offers.slice(),
        activeCity: DEFAULT_CITY,
        targetOffers,
        sortOffers,
        isDataLoaded: true,
      };
    }
    case ActionType.ChangeCity: {
      const targetOffers = state.offers.filter((offer) => offer.city.name === action.city.title);
      const sortOffers = targetOffers.slice();
      const activeCity = action.city;
      return {
        ...state,
        activeCity,
        targetOffers,
        sortOffers,
      };
    }
    case ActionType.SortByType: {
      const sortOffers = sortTypeToSortingGetter[action.sortType](state.targetOffers);
      return {
        ...state,
        sortOffers,
      };
    }
    case ActionType.RequireAuthorization: {
      return {
        ...state,
        authorizationStatus: action.authorizationStatus,
      };
    }
    case ActionType.RequireLogout: {
      return {
        ...state,
        authorizationStatus: AuthStatuses.NoAuth,
      };
    }
    default:
      return state;
  }
};

export {reducer};
