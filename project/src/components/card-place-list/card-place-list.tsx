import TCityPlaceCard from '../../types/city-place-card';
import CardPlace from '../card-place/card-place';

type TCardPlaceListProps = {
    offers: TCityPlaceCard[],
    handlePointerOver: (offer: TCityPlaceCard) => void,
    handlePointerLeave: () => void
};
function CardPlaceList({offers, handlePointerOver, handlePointerLeave}: TCardPlaceListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <CardPlace card={offer} key={offer.id} onPointerOverCard={handlePointerOver} onPointerLeaveCard={handlePointerLeave}/>)}
    </div>
  );
}


export default CardPlaceList;
