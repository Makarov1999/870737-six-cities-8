import TCityPlaceCard from '../types/city-place-card';

export const MapSort = {
  Popular: (offers: TCityPlaceCard[]): TCityPlaceCard[] => offers.slice(),
  PriceIncrease: (offers: TCityPlaceCard[]): TCityPlaceCard[] => (offers.slice().sort((prevOffer, nextOffer) => (prevOffer.price - nextOffer.price))),
  PriceDecrease: (offers: TCityPlaceCard[]): TCityPlaceCard[] => (offers.slice().sort((prevOffer, nextOffer) => (nextOffer.price - prevOffer.price))),
  RateDecrease: (offers: TCityPlaceCard[]): TCityPlaceCard[] => (offers.slice().sort((prevOffer, nextOffer) => (nextOffer.rating - prevOffer.rating))),
};

export type MapSortKeys = keyof typeof MapSort;

