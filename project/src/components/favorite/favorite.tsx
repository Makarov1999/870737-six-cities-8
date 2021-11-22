import { connect, ConnectedProps } from 'react-redux';
import Logo from '../logo/logo';
import { TRootState } from '../../store/reducer';
import { Dispatch, useEffect, useReducer, useState } from 'react';
import { TActions, TThunkActionDispatch } from '../../types/action';
import { changeFavoriteStatusFromOffer, logoutAction } from '../../store/api-actions';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../app/app.constants';
import TCityPlaceCard from '../../types/city-place-card';
import Spinner from '../spinner/spinner';
import { getFavoriteOffers } from '../../services/favorite/favorite';
import ErrorModal from '../error-modal/error-modal';
import { favoriteInitialState } from './favorite.constants';
import { favoriteReducer, fillFavorites, removeFavorite } from './favorite.utils';


const mapStateToProps = ({ user }: TRootState) => ({
  authInfo: user.authInfo,
});

const mapDispatchToProps = (dispatch: Dispatch<TActions>) => ({
  onLogout() {
    return (dispatch as TThunkActionDispatch)(logoutAction());
  },
  onFavoriteStatusChange(offerId: number, isFavorite: boolean) {
    return (dispatch as TThunkActionDispatch)(changeFavoriteStatusFromOffer(offerId, isFavorite));
  },
});

const favoriteConnector = connect(mapStateToProps, mapDispatchToProps);
type TFavoriteConnectedProps = ConnectedProps<typeof favoriteConnector>;


function Favorite({ authInfo, onLogout, onFavoriteStatusChange }: TFavoriteConnectedProps): JSX.Element {
  const [errorModalText, setErrorModalText] = useState<string>('');
  const [favoriteState, favoriteDispatch] = useReducer(favoriteReducer, favoriteInitialState);
  const onLoadFavoriteOffersError = () => {
    setErrorModalText('Error loading favorite offers');
  };
  const onLoadFavoriteOffersSuccess = (favoriteOffers: TCityPlaceCard[]) => {
    favoriteDispatch(fillFavorites(favoriteOffers));
  };
  useEffect(() =>{
    getFavoriteOffers()
      .then(onLoadFavoriteOffersSuccess)
      .catch(onLoadFavoriteOffersError);

  }, []);
  const handleLogoutClick = () => {
    onLogout().catch(onLogoutError);
  };
  const closeErrorModal = () => {
    setErrorModalText('');
  };
  const onLogoutError = () => {
    setErrorModalText('Error while logout action');
  };
  const onRemoveOfferFromFavoritesError = () => {
    setErrorModalText('Error to change offer favorite status');
  };
  const removeOfferFromFavorite = (offerId: number) => {
    favoriteDispatch(removeFavorite(offerId));
  };
  const handleOfferFavoriteStatusChange = (offerId: number, isFavorite: boolean) => {
    onFavoriteStatusChange(offerId, isFavorite)
      .then(() => {
        removeOfferFromFavorite(offerId);
      })
      .catch(onRemoveOfferFromFavoritesError);
  };
  if (!favoriteState.isFavoriteOffersLoaded) {
    return <Spinner/>;
  }
  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className={`page ${favoriteState.mappedFavoriteOffers.length > 0 ? '' : 'page--favorites-empty'}`}>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo/>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        <img src={authInfo?.avatarUrl} alt="User Avatar" />
                      </div>
                      <span className="header__user-name user__name">{authInfo?.email}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="" onClick={handleLogoutClick}>
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className={`page__main page__main--favorites ${favoriteState.mappedFavoriteOffers.length > 0 ? '' : 'page__main--favorites-empty'}`}>
          <div className="page__favorites-container container">
            {favoriteState.mappedFavoriteOffers.length > 0
              ?
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {favoriteState.mappedFavoriteOffers.map((cityAndOffers) =>
                    (
                      <li className="favorites__locations-items" key={cityAndOffers[0]}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{cityAndOffers[0]}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">
                          {cityAndOffers[1]
                            .map((favoriteOffer) => (
                              <article className="favorites__card place-card" key={favoriteOffer.id}>
                                <div className="favorites__image-wrapper place-card__image-wrapper">
                                  <a href="#">
                                    <img className="place-card__image" src={favoriteOffer.previewImage} width={150} height={110} alt="Place image" />
                                  </a>
                                </div>
                                <div className="favorites__card-info place-card__info">
                                  <div className="place-card__price-wrapper">
                                    <div className="place-card__price">
                                      <b className="place-card__price-value">€{favoriteOffer.price}</b>
                                      <span className="place-card__price-text">/&nbsp;night</span>
                                    </div>
                                    <button
                                      className="place-card__bookmark-button place-card__bookmark-button--active button"
                                      type="button"
                                      onClick={() => {
                                        handleOfferFavoriteStatusChange(favoriteOffer.id, favoriteOffer.isFavorite);
                                      }}
                                    >
                                      <svg className="place-card__bookmark-icon" width={18} height={19}>
                                        <use xlinkHref="#icon-bookmark" />
                                      </svg>
                                      <span className="visually-hidden">In bookmarks</span>
                                    </button>
                                  </div>
                                  <div className="place-card__rating rating">
                                    <div className="place-card__stars rating__stars">
                                      <span style={{width: `${favoriteOffer.rating * 20}%`}} />
                                      <span className="visually-hidden">Rating</span>
                                    </div>
                                  </div>
                                  <h2 className="place-card__name">
                                    <Link to={`offer/${favoriteOffer.id}`}>
                                      {favoriteOffer.title}
                                    </Link>
                                  </h2>
                                  <p className="place-card__type">{favoriteOffer.type}</p>
                                </div>
                              </article>
                            ))}
                        </div>
                      </li>
                    ),
                  )}
                </ul>
              </section>
              :
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>}
          </div>
          <ErrorModal modalErrorText={errorModalText} onCloseModal={closeErrorModal}/>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoutes.Main}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
          </Link>
        </footer>
      </div>
    </>
  );
}
export default favoriteConnector(Favorite);
