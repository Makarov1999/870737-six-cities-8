import TCityPlaceCard from '../../types/city-place-card';
import CardPlace from '../card-place/card-place';
import { CardPlaceListPageTypes } from './card-place-list.constants';

type TCardPlaceListProps = {
    offers: TCityPlaceCard[],
    pageType: string,
    handlePointerOver?: (offer: TCityPlaceCard) => void ,
    handlePointerLeave?: () => void
};
function CardPlaceList({offers, pageType, handlePointerOver, handlePointerLeave}: TCardPlaceListProps): JSX.Element {
  return (
    <div className={pageType === CardPlaceListPageTypes.Main
      ? 'cities__places-list places__list tabs__content'
      : 'near-places__list places__list'}
    >
      {offers.map((offer) => <CardPlace card={offer} pageType={pageType} key={offer.id} onPointerOverCard={handlePointerOver} onPointerLeaveCard={handlePointerLeave}/>)}
    </div>
  );
}


export default CardPlaceList;
