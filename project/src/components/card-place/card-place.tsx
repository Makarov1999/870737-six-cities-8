import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import TCityPlaceCard from '../../types/city-place-card';
type TCardPlaceProps = {
  card: TCityPlaceCard,
  imgWrapClassName: string,
  cardClassName: string,
  onPointerOverCard?: (card: TCityPlaceCard) => void,
  onPointerLeaveCard?: () => void,
  onFavoriteClick: (offerId: number, isFavorite: boolean) => void,
};

function CardPlace({card, imgWrapClassName, cardClassName, onPointerOverCard, onPointerLeaveCard, onFavoriteClick}: TCardPlaceProps): JSX.Element {
  const {id, type ,title, price, rating, isPremiun, isFavorite} = card;
  const handlePointerOver = (): void => {
    onPointerOverCard?.(card);
  };
  const handlePointerLeave = (): void => {
    onPointerLeaveCard?.();
  };
  const handleFavoriteClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    onFavoriteClick(id, isFavorite);
  };
  return (
    <article className={`${cardClassName} place-card`}
      onPointerOver={handlePointerOver}
      onPointerLeave={handlePointerLeave}
    >
      {isPremiun ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className={`${imgWrapClassName} place-card__image-wrapper`}>
        <img className="place-card__image" src={card.previewImage} width="260" height="200" alt="Place image"/>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active': ''}`}
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type.replace(type[0], (letter) => letter.toUpperCase())}</p>
      </div>
    </article>
  );
}
export default CardPlace;
