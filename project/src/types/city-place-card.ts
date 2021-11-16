import TLocation from './location';
import TCityInCard from './city-in-card';

type THost = {
    id: number,
    avatarUrl: string,
    isPro: boolean,
    name: string
}

type TCityPlaceCard = {
    id: number,
    bedrooms: number,
    city: TCityInCard,
    host: THost,
    images: string[],
    location: TLocation,
    maxAdults: number,
    type: string,
    goods: string[],
    title: string,
    price: number,
    previewImage: string,
    isFavorite: boolean,
    isPremiun: boolean,
    rating: number,
    description: string,
}

export default TCityPlaceCard;
