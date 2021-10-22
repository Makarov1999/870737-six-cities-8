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
const DEFAULT_CITY_NAME = 'Amsterdam';
const reducer = (state: State = initialState, action: TActions): State => {
  switch(action.type) {
    case ActionType.FillOffersStore: {
      const targetOffers = action.offers.filter((offer) => offer.city.name === DEFAULT_CITY_NAME);
      const city = CITIES.find((cityEl) => cityEl.title === DEFAULT_CITY_NAME) as TCity;
      return {
        ...state,
        offers: action.offers,
        city,
        targetOffers,
      };
    }
    case ActionType.ChangeCity: {
      const targetOffers = state.offers.filter((offer) => offer.city.name === action.cityName);
      const city = CITIES.find((cityEl) => cityEl.title === action.cityName) as TCity;
      return {
        ...state,
        city,
        targetOffers,
      };
    }
    default:
      return state;
  }
};

export {reducer};
