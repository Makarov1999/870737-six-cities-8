import { TCityPlaceCard } from '../../types';

export enum AppRoutes {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum AuthStatuses {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const CITY_PLACES: TCityPlaceCard[] = [
  {
    id: 1,
    type: 'Apartment',
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    imgUrl: 'img/apartment-01.jpg',
    isFavorite: false,
    isPremiun: true,
    rating: 4,
  },
  {
    id: 2,
    type: 'Private room',
    title: 'Wood and stone place',
    price: 80,
    imgUrl: 'img/room.jpg',
    isFavorite: true,
    isPremiun: false,
    rating: 4,
  },
  {
    id: 3,
    type: 'Apartment',
    title: 'Canal View Prinsengracht',
    price: 132,
    imgUrl: 'img/apartment-02.jpg',
    isFavorite: false,
    isPremiun: false,
    rating: 4,
  },
  {
    id: 4,
    type: 'Apartment',
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    imgUrl: 'img/apartment-03.jpg',
    isFavorite: false,
    isPremiun: true,
    rating: 5,
  },
  {
    id: 5,
    type: 'Private room',
    title: 'Wood and stone place',
    price: 80,
    imgUrl: 'img/room.jpg',
    isFavorite: true,
    isPremiun: false,
    rating: 4,
  },
];
