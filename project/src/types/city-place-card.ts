import TLocation from './location';

type TCityINCard = {
    location: TLocation,
    name: string
}

type THost = {
    id: number,
    avatarUrl: string,
    isPro: boolean,
    name: string
}

type TCityPlaceCard = {
    id: number,
    bedrooms: number,
    city: TCityINCard,
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
    rating: number
}

export default TCityPlaceCard;
