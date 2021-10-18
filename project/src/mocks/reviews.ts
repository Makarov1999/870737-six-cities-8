import { TReview } from '../types/review';

export const REVIEWS: TReview[] = [
  {
    id: 1,
    comment: 'Nice place to stay',
    date: new Date(),
    rating: 4,
    user: {
      id: 2,
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
      name: 'Max',
    },
  },
  {
    id: 2,
    comment: 'Nice place to stay with kids',
    date: new Date(),
    rating: 5,
    user: {
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
      name: 'Angelina',
    },
  },
  {
    id: 3,
    comment: 'Good hotel in Amsterdam',
    date: new Date(),
    rating: 4,
    user: {
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
      name: 'Angelina',
    },
  },
];
