import { TCity } from './types/city';

export const AMSTERDAM_CITY: TCity = {
  id: 1,
  title: 'Amsterdam',
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 12,
  },
};

const MONTHS_NAMES: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

type TMonthDictionary = {
  [x: number]: string;
}

export const MONTHS_DICTIONARY: TMonthDictionary  = {...MONTHS_NAMES};
