import { ActionType, TActions } from '../types/action';
import { TState } from '../types/state';
import { CITIES } from '../global.constants';
import { OFFERS } from '../mocks/offers';
import { DEFAULT_CITY } from '../global.constants';
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
      const activeCity = DEFAULT_CITY;
      const sortOffers = targetOffers.slice();
      return {
        ...state,
        offers: OFFERS.slice(),
        activeCity,
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
    case ActionType.SortPriceIncrease: {
      const sortOffers = state.targetOffers
        .slice()
        .sort((prevOffer, nextOffer) => (prevOffer.price - nextOffer.price));
      return {
        ...state,
        sortOffers,
      };
    }
    case ActionType.SortPriceDecrease: {
      const sortOffers = state.targetOffers
        .slice()
        .sort((prevOffer, nextOffer) => (nextOffer.price - prevOffer.price));
      return {
        ...state,
        sortOffers,
      };
    }
    case ActionType.SortRateDecrease: {
      const sortOffers = state.targetOffers
        .slice()
        .sort((prevOffer, nextOffer) => (nextOffer.rating - prevOffer.rating));
      return {
        ...state,
        sortOffers,
      };
    }
    case ActionType.SortPopularDecrease: {
      const sortOffers = state.targetOffers.slice();
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
