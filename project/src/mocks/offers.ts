import TCityPlaceCard from '../types/city-place-card';

export const OFFERS: TCityPlaceCard[] = [
  {
    id: 1,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3673698,
        longitude: 4.906402,
        zoom: 11,
      },
      name: 'Amsterdam',
    },
    host: {
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
      name: 'Angelina',
    },
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    maxAdults: 4,
    location: {
      latitude: 52.4132003,
      longitude: 4.8939353,
      zoom: 11,
    },
    type: 'Apartment',
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    previewImage: 'img/apartment-01.jpg',
    isFavorite: false,
    isPremiun: true,
    rating: 4,
  },
  {
    id: 2,
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.3673698,
        longitude: 4.906402,
        zoom: 11,
      },
      name: 'Amsterdam',
    },
    host: {
      id: 2,
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
      name: 'Max',
    },
    images: ['img/studio-01.jpg', 'img/studio-01.jpg', 'img/studio-01.jpg', 'img/room.jpg', 'img/room.jpg', 'img/room.jpg'],
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Wi-Fi', 'Towels'],
    maxAdults: 3,
    location: {
      latitude: 52.4125123,
      longitude: 4.8873583,
      zoom: 11,
    },
    type: 'Private room',
    title: 'Wood and stone place',
    price: 80,
    previewImage: 'img/room.jpg',
    isFavorite: true,
    isPremiun: false,
    rating: 4,
  },
  {
    id: 3,
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.3673698,
        longitude: 4.906402,
        zoom: 11,
      },
      name: 'Amsterdam',
    },
    host: {
      id: 2,
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
      name: 'Max',
    },
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Wi-Fi'],
    maxAdults: 5,
    location: {
      latitude: 52.367578,
      longitude: 4.854204,
      zoom: 11,
    },
    type: 'Apartment',
    title: 'Canal View Prinsengracht',
    price: 132,
    previewImage: 'img/apartment-02.jpg',
    isFavorite: false,
    isPremiun: false,
    rating: 4,
  },
  {
    id: 4,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3673698,
        longitude: 4.906402,
        zoom: 11,
      },
      name: 'Amsterdam',
    },
    host: {
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
      name: 'Angelina',
    },
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    maxAdults: 4,
    location: {
      latitude: 52.41444,
      longitude: 4.9071163,
      zoom: 11,
    },
    type: 'Apartment',
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    previewImage: 'img/apartment-03.jpg',
    isFavorite: false,
    isPremiun: true,
    rating: 5,
  },
  {
    id: 5,
    bedrooms: 3,
    city: {
      location: {
        latitude: 48.8589466,
        longitude: 2.2769956,
        zoom: 11,
      },
      name: 'Paris',
    },
    host: {
      id: 1,
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
      name: 'Angelina',
    },
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    maxAdults: 4,
    location: {
      latitude: 48.8930026,
      longitude: 2.2297353,
      zoom: 11,
    },
    type: 'Apartment',
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    previewImage: 'img/apartment-02.jpg',
    isFavorite: false,
    isPremiun: true,
    rating: 5,
  },
];
