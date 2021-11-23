import Logo from '../logo/logo';
import CommentForm from '../comment-form/comment-form';
import ReviewList from '../review-list/review-list';
import { AuthStatuses } from '../../constants';
import Map from '../map/map';
import CardPlaceList from '../card-place-list/card-place-list';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { TRootState } from '../../store/reducer';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';
import { AppRoutes } from '../app/app.constants';
import { changeFavoriteStatusFromOffer } from '../../store/offers-reducer/api-actions';
import {  logoutAction } from '../../store/user-reducer/api-actions';
import { MouseEvent } from 'react';
import TCityPlaceCard from '../../types/city-place-card';
import Spinner from '../spinner/spinner';
import { getOfferById, getOffersNearby } from '../../services/offer/offer';
import { COMMENT_LENGTH_MIN, COMMENT_LENGTH_MAX } from './property.constants';
import { TReview } from '../../types/review';
import { getReviewsByOfferId, sendCommentByOfferId } from '../../services/review/review';
import './property.css';
import ErrorModal from '../error-modal/error-modal';
import { TAppDispatch } from '../../types/app-dispatch';

const mapStateToProps = ({offers, user}: TRootState) => ({
  authorizationStatus: user.authorizationStatus,
  authInfo: user.authInfo,
  activeCity: offers.activeCity,
});

const mapDispatchToProps = (dispatch: TAppDispatch) => ({
  onLogout() {
    return dispatch(logoutAction());
  },
  onFavoriteStatusChange(offerId: number, isFavorite: boolean) {
    return dispatch(changeFavoriteStatusFromOffer(offerId, isFavorite));
  },
});

const propertyConnector = connect(mapStateToProps, mapDispatchToProps);
type PropertyConnectedProps = ConnectedProps<typeof propertyConnector>
function Property({authorizationStatus, authInfo, activeCity, onLogout, onFavoriteStatusChange}: PropertyConnectedProps): JSX.Element {
  const { id } = useParams<{id?: string}>();
  const history = useHistory();
  const [offer, setOffer] = useState<TCityPlaceCard | null>(null);
  const [loadOffersNearbyError, setLoafOffersNearbyError] = useState<string>('');
  const [offersNearby, setOffersNearby] = useState<TCityPlaceCard[] | null>(null);
  const [reviewText, setReviewText] = useState<string>('');
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [commentFormButtonDisabled, setCommentFormButtonDisabled] = useState<boolean>(false);
  const [reviews, setReviews] = useState<TReview[] | null>(null);
  const [reviewsLoadError, setLoadReviewsError] = useState<string>('');
  const [sendCommentError, setSendCommentError] = useState<string>('');
  const [changeIsFavoriteError, setChangeFavoriteError] = useState<string>('');
  const closeErrorModal = useCallback(() => {
    setChangeFavoriteError('');
  }, []);
  const handleRatingChange = useCallback((rate: number) => {
    setRating(rate);
  }, []);
  const handleCommentTextChange = useCallback((text) => {
    setReviewText(text);
  }, []);
  const handleFavoriteClick = useCallback((offerId: number, isFavorite: boolean) => {
    onFavoriteStatusChange(offerId, isFavorite).then(() => {
      if (id && authorizationStatus === AuthStatuses.Auth) {
        getOffersNearby(id)
          .then(onLoadNearbyOffersSuccess)
          .catch(() => setLoafOffersNearbyError('Error offers nearby loading'));
      } else {
        history.push(AppRoutes.SignIn);
      }
    });
  }, [id, authorizationStatus, history, onFavoriteStatusChange]);
  const handlePropertyButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (id && offer && authorizationStatus === AuthStatuses.Auth) {
      onFavoriteStatusChange(+id, offer.isFavorite)
        .then(() => {
          setOffer((prevOffer) => {
            if (prevOffer) {
              return {
                ...prevOffer,
                isFavorite: !prevOffer.isFavorite,
              };
            }
            return null;
          });
        })
        .catch(() => setChangeFavoriteError('Error while favorite status change'));
    } else {
      history.push(AppRoutes.SignIn);
    }
  };
  const onLoadOfferError = useCallback(() => {
    history.push(AppRoutes.NotFound);
  }, [history]);
  const onLoadNearbyOffersSuccess = (offersNearbyRes: TCityPlaceCard[]) => {
    setLoafOffersNearbyError('');
    setOffersNearby(offersNearbyRes);
  };
  const onSuccessSendComment = (reviewsRes: TReview[]) => {
    setRating(undefined);
    setReviewText('');
    const sortReviews = reviewsRes.sort((prevReview, nextReview) => (new Date(nextReview.date).getTime() - new Date(prevReview.date).getTime()));
    setReviews(sortReviews);
  };
  const onSuccessReviewLoading = (reviewsRes: TReview[]) => {
    setLoadReviewsError('');
    const sortReviews = reviewsRes.sort((prevReview, nextReview) => (new Date(nextReview.date).getTime() - new Date(prevReview.date).getTime()));
    setReviews(sortReviews);
  };
  const onSubmitCommentForm = () => {
    setSendCommentError('');
    if (id && rating && reviewText) {
      sendCommentByOfferId(
        id,
        {
          rating,
          comment: reviewText,
        })
        .then(onSuccessSendComment)
        .catch(() => setSendCommentError('Error on comment sending'));
    }
  };
  useEffect(() => {
    if (id) {
      getOfferById(id)
        .then(setOffer)
        .catch(onLoadOfferError);
      getOffersNearby(id)
        .then(onLoadNearbyOffersSuccess)
        .catch(() => setLoafOffersNearbyError('Error offers nearby loading'));
    }
  }, [id, onLoadOfferError]);
  useEffect(() => {
    if (id) {
      getReviewsByOfferId(id)
        .then(onSuccessReviewLoading)
        .catch(() => setLoadReviewsError('Error loading comments'));
    }
  }, [id]);
  useEffect(() => {
    if (rating && (reviewText.length >= COMMENT_LENGTH_MIN && reviewText.length <= COMMENT_LENGTH_MAX)) {
      setCommentFormButtonDisabled(false);
    } else {
      setCommentFormButtonDisabled(true);
    }

  }, [rating, reviewText]);

  const classNamesByPage = useMemo(() => ({
    list: 'near-places__list',
    card: 'near-places__card',
    imgWrap: 'near-places__image-wrapper',
  }), []);
  const handleLogoutClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onLogout();
  };
  if (!id) {
    return <Redirect to={AppRoutes.NotFound}/>;
  }

  if (!offer) {
    return (
      <Spinner/>
    );
  }
  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo/>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {authorizationStatus === AuthStatuses.Auth ?
                    <>
                      <li className="header__nav-item user">
                        <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Favorites}>
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                            <img src={authInfo?.avatarUrl} alt="User Avatar" />
                          </div>
                          <span className="header__user-name user__name">{authInfo?.email}</span>
                        </Link>
                      </li>
                      <li className="header__nav-item">
                        <a className="header__nav-link" href="#" onClick={handleLogoutClick}>
                          <span className="header__signout">Sign out</span>
                        </a>
                      </li>
                    </>:
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.SignIn}>
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>}
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.images.map((image: string) => (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.isPremiun ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                  : '' }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button className={`property__bookmark-button button ${offer.isFavorite ? 'property__bookmark-button--active' : ''}`} type="button" onClick={handlePropertyButtonClick}>
                    <svg className="property__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${offer.rating * 20}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type.replace(offer.type[0], (letter) => letter.toUpperCase())}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What s inside</h2>
                  <ul className="property__inside-list">
                    {offer.goods.map((good) => (
                      <li className="property__inside-item" key={good}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">{offer.host.name}</span>
                    {offer.host.isPro ? <span className="property__user-status">Pro</span> : ''}
                  </div>
                  <div className="property__description">
                    <p className="property__text">{offer.description}</p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  {reviews ?
                    <>
                      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
                      <ReviewList reviews={reviews.slice(0, 10)} />
                    </> : <p className="load-error">{reviewsLoadError}</p>}
                  {authorizationStatus === AuthStatuses.Auth ?
                    <CommentForm
                      onRatingChange={handleRatingChange}
                      onReviewTextChange={handleCommentTextChange}
                      isCommentFormButtonDisabled={commentFormButtonDisabled}
                      onSubmitCommentForm={onSubmitCommentForm}
                      rating={rating}
                      reviewText={reviewText}
                    /> : ''}
                  {sendCommentError ? <p className="load-error">{loadOffersNearbyError}</p> : ''}
                </section>
              </div>
            </div>
            <section className="property__map map">
              {offersNearby ? <Map offers={offersNearby} city={activeCity} activeOffer={null}/> : <p className="load-error">{loadOffersNearbyError}</p>}

            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              {offersNearby ?  <CardPlaceList offers={offersNearby} classNames={classNamesByPage} handleFavoriteClick={handleFavoriteClick}/> : <p className="load-error">{loadOffersNearbyError}</p>}
            </section>
          </div>
        </main>
        <ErrorModal modalErrorText={changeIsFavoriteError} onCloseModal={closeErrorModal}/>
      </div>
    </>
  );
}
export default propertyConnector(Property);


