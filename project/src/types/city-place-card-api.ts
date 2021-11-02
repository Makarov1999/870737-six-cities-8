import TLocation from './location';
import TCityInCard from './city-in-card';

type THostApi = {
    id: number,
    'avatar_url': string,
    'is_pro': boolean,
    name: string
}

type TCityPlaceCardApi = {
  id: number,
  bedrooms: number,
  city: TCityInCard,
  host: THostApi,
  images: string[],
  location: TLocation,
  'max_adults': number,
  type: string,
  goods: string[],
  title: string,
  price: number,
  'preview_image': string,
  'is_favorite': boolean,
  'is_premium': boolean,
  rating: number
}

export default TCityPlaceCardApi;
