import TCityPlaceCard from '../../types/city-place-card';
import TCityPlaceCardApi from '../../types/city-place-card-api';

export type TSuccessOfferFunction = (data: TCityPlaceCard) => void;
export type TSuccessOfferNeabyFunction = (data: TCityPlaceCard[]) => void;
