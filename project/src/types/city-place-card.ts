import TLocation from './location';

type TCity = {
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
    city: TCity,
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
