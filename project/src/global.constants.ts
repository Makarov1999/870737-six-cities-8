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

export const DEFAULT_CITY = {
  id: 1,
  title: 'Paris',
  location: {
    latitude: 48.8589466,
    longitude: 2.2769956,
    zoom: 12,
  },
};

export const CITIES: TCity[] = [
  {
    id: 1,
    title: 'Paris',
    location: {
      latitude: 48.8589466,
      longitude: 2.2769956,
      zoom: 12,
    },
  },
  {
    id: 2,
    title: 'Cologne',
    location: {
      latitude: 50.937531,
      longitude: 6.9602786,
      zoom: 12,
    },
  },
  {
    id: 3,
    title: 'Brussels',
    location: {
      latitude: 50.850340,
      longitude: 4.351710,
      zoom: 12,
    },
  },
  {
    id: 4,
    title: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
  },
  {
    id: 5,
    title: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 12,
    },
  },
  {
    id: 6,
    title: 'Dusseldorf',
    location: {
      latitude: 51.227741,
      longitude: 6.773456,
      zoom: 12,
    },
  },
];
