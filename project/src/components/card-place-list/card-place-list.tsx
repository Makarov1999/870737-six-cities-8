import { TCardPlaceListClassNames } from '../../types/card-place-list-classnames';
import TCityPlaceCard from '../../types/city-place-card';
import CardPlace from '../card-place/card-place';

type TCardPlaceListProps = {
    offers: TCityPlaceCard[],
    classNames: TCardPlaceListClassNames,
    handlePointerOver?: (offer: TCityPlaceCard) => void ,
    handlePointerLeave?: () => void
};
function CardPlaceList({offers, classNames, handlePointerOver, handlePointerLeave}: TCardPlaceListProps): JSX.Element {
  return (
    <div className={`places__list ${classNames.list}`}>
      {offers.map((offer) =>
        (<CardPlace card={offer} cardClassName={classNames.card} imgWrapClassName={classNames.imgWrap} key={offer.id} onPointerOverCard={handlePointerOver} onPointerLeaveCard={handlePointerLeave}/>
        ))}
    </div>
  );
}


export default CardPlaceList;
