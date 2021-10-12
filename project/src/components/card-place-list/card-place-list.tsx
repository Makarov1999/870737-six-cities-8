import { useCallback, useState } from 'react';
import { TCityPlaceCard } from '../../types';
import { CardPlace } from '../card-place';

type TCardPlaceListProps = {
    offers: TCityPlaceCard[]
};
function CardPlaceList({offers}: TCardPlaceListProps): JSX.Element {
  const [, setActiveCard] = useState<null | TCityPlaceCard>(null);
  const handlePointerOver = useCallback((offer: TCityPlaceCard) => {
    setActiveCard(offer);
  }, []);
  const handlePointerLeave = useCallback(() => {
    setActiveCard(null);
  }, []);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <CardPlace card={offer} key={offer.id} onPointerOverCard={handlePointerOver} onPointerLeaveCard={handlePointerLeave}/>)}
    </div>
  );
}


export default CardPlaceList;
