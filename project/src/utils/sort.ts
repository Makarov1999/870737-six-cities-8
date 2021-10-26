import TCityPlaceCard from '../types/city-place-card';
import TSortType from '../types/sort-type';

type TSortTypeToSortingGetter = Record<TSortType, (offers: TCityPlaceCard[]) => TCityPlaceCard[]>;
export const sortTypeToSortingGetter: TSortTypeToSortingGetter = {
  Popular: (offers) => offers.slice(),
  PriceIncrease: (offers) => (offers.slice().sort((prevOffer, nextOffer) => (prevOffer.price - nextOffer.price))),
  PriceDecrease: (offers) => (offers.slice().sort((prevOffer, nextOffer) => (nextOffer.price - prevOffer.price))),
  RateDecrease: (offers) => (offers.slice().sort((prevOffer, nextOffer) => (nextOffer.rating - prevOffer.rating))),
};
