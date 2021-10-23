import { ActionType, TActions } from '../types/action';
import { State } from '../types/state';
import { CITIES } from '../global.constants';
import { TCity } from '../types/city';

const initialState: State= {
  offers: [],
  city: CITIES[0],
  targetOffers: [],
  sortOffers: [],
};
const DEFAULT_CITY_NAME = 'Paris';
const reducer = (state: State = initialState, action: TActions): State => {
  switch(action.type) {
    case ActionType.FillOffersStore: {
      const targetOffers = action.offers.filter((offer) => offer.city.name === DEFAULT_CITY_NAME);
      const city = CITIES.find((cityEl) => cityEl.title === DEFAULT_CITY_NAME) as TCity;
      const sortOffers = targetOffers.slice();
      return {
        ...state,
        offers: action.offers,
        city,
        targetOffers,
        sortOffers,
      };
    }
    case ActionType.ChangeCity: {
      const targetOffers = state.offers.filter((offer) => offer.city.name === action.cityName);
      const sortOffers = targetOffers.slice();
      const city = CITIES.find((cityEl) => cityEl.title === action.cityName) as TCity;
      return {
        ...state,
        city,
        targetOffers,
        sortOffers,
      };
    }
    case ActionType.SortPriceIncrease: {
      const sortOffers = state.targetOffers
        .slice()
        .sort((leftOffer, rightOffer) => (leftOffer.price - rightOffer.price));
      return {
        ...state,
        sortOffers,
      };
    }
    case ActionType.SortPriceDecrease: {
      const sortOffers = state.targetOffers
        .slice()
        .sort((leftOffer, rightOffer) => (rightOffer.price - leftOffer.price));
      return {
        ...state,
        sortOffers,
      };
    }
    case ActionType.SortRateDecrease: {
      const sortOffers = state.targetOffers
        .slice()
        .sort((leftOffer, rightOffer) => (rightOffer.rating - leftOffer.rating));
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
