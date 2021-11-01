import TSortType from '../../types/sort-type';

type TSortListItem = {
  id: number,
  text: string,
  sortType: TSortType,
}

export const SORT_LIST_ITEMS: TSortListItem[] = [
  {
    id: 1,
    text: 'Popular',
    sortType: 'Popular',
  },
  {
    id: 2,
    text: 'Price: low to high',
    sortType: 'PriceIncrease',
  },
  {
    id: 3,
    text: 'Price: high to low',
    sortType: 'PriceDecrease',
  },
  {
    id: 4,
    text: 'Top rated first',
    sortType: 'RateDecrease',
  },
];
