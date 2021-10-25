import { ActionType, TActions } from '../types/action';
import { TState } from '../types/state';
import { CITIES } from '../global.constants';
import { OFFERS } from '../mocks/offers';
import { DEFAULT_CITY } from '../global.constants';
import { MapSort } from './map-sort';
const initialState: TState= {
  offers: [],
  activeCity: CITIES[0],
  targetOffers: [],
  sortOffers: [],
};

const reducer = (state: TState = initialState, action: TActions): TState => {
  switch(action.type) {
    case ActionType.FillOffersStore: {
      const targetOffers = OFFERS.filter((offer) => offer.city.name === DEFAULT_CITY.title);
      const sortOffers = targetOffers.slice();
      return {
        ...state,
        offers: OFFERS.slice(),
        activeCity: DEFAULT_CITY,
        targetOffers,
        sortOffers,
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
      const sortOffers = MapSort[action.sortType](state.targetOffers);
      return {
        ...state,
        sortOffers,
      };
    }
    default:
      return state;
  }
};

export {reducer};
