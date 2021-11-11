import { ActionType, TActions } from '../../types/action';
import { TOffersState } from '../../types/state';
import { CITIES, DEFAULT_CITY } from '../../global.constants';
import { sortTypeToSortingGetter } from '../../utils/sort';
const initialState = {
  offers: [],
  activeCity: CITIES[0],
  targetOffers: [],
  sortOffers: [],
  isDataLoaded: false,
};
export const offersReducer = (state: TOffersState = initialState, action: TActions): TOffersState => {
  switch (action.type) {
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
    default:
      return state;
  }
};
