import CardPlaceList from '../card-place-list/card-place-list';
import TCityPlaceCard from '../../types/city-place-card';
import {useCallback, useMemo, useState, MouseEvent } from 'react';
import { Dispatch } from 'redux';
import Map from '../map/map';
import MainEmpty from '../main-empty/main-empty';
import CityList from '../city-list/city-list';
import { connect, ConnectedProps } from 'react-redux';
import { TActions, TThunkActionDispatch } from '../../types/action';
import { changeCity, sortByType } from '../../store/offers-reducer/actions';
import SortList from '../sort-list/sort-list';
import { TCity } from '../../types/city';
import TSortType from '../../types/sort-type';
import { TRootState } from '../../store/reducer';
import { AuthStatuses } from '../../constants';
import { Link, useHistory } from 'react-router-dom';
import { AppRoutes } from '../app/app.constants';
import { changeFavoriteStatusFromOffer } from '../../store/offers-reducer/api-actions';
import { logoutAction } from '../../store/user-reducer/api-actions';
import { getOffersResult } from '../../store/selectors/offer-selector';
import ErrorModal from '../error-modal/error-modal';

const mapStateToProps = ({offers, user}: TRootState) => ({
  activeCity: offers.activeCity,
  offers: getOffersResult(offers),
  authorizationStatus: user.authorizationStatus,
  authInfo: user.authInfo,
});
const mapDispatchToProps = (dispatch: Dispatch<TActions>) => ({
  onCityChange(city: TCity) {
    dispatch(changeCity(city));
  },
  onSortByType(sortType: TSortType) {
    dispatch(sortByType(sortType));
  },
  onLogout() {
    return (dispatch as TThunkActionDispatch)(logoutAction());
  },
  onFavoriteStatusChange(offerId: number, isFavorite: boolean) {
    return (dispatch as TThunkActionDispatch)(changeFavoriteStatusFromOffer(offerId, isFavorite));
  },
});
const mainConnector = connect(mapStateToProps, mapDispatchToProps);
type TConnectedMainProps = ConnectedProps<typeof mainConnector>;
function Main({
  activeCity,
  offers,
  authorizationStatus,
  authInfo,
  onCityChange,
  onSortByType,
  onLogout,
  onFavoriteStatusChange,
}: TConnectedMainProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<null | TCityPlaceCard>(null);
  const [errorText, setErrorText] = useState<string>('');
  const history = useHistory();
  const onLogoutError = () => {
    setErrorText('Error while logout action');
  };
  const closeErrorModal = () => {
    setErrorText('');
  };
  const onFavoriteStatusChangeError = () => {
    setErrorText('Error while favorite status change');
  };
  const classNamesByPage = useMemo(() => ({
    list: 'cities__places-list tabs__content',
    card: 'cities__place-card',
    imgWrap: 'cities__image-wrapper',
  }), []);
  const handlePointerOver = useCallback((offer: TCityPlaceCard) => {
    setActiveCard(offer);
  }, []);
  const handlePointerLeave = useCallback(() => {
    setActiveCard(null);
  }, []);
  const handleFavoriteClick = useCallback((offerId: number, isFavorite: boolean) => {
    if (authorizationStatus === AuthStatuses.Auth) {
      onFavoriteStatusChange(offerId, isFavorite).catch(onFavoriteStatusChangeError);
    } else {
      history.push(AppRoutes.SignIn);
    }

  }, [authorizationStatus, history, onFavoriteStatusChange]);
  const handleLogoutClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onLogout().catch(() => {
      onLogoutError();
    });
  };
  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
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
        <main className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}` }>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList activeCity={activeCity.title} onCityChange={onCityChange}/>
            </section>
          </div>
          <div className="cities">
            {offers.length > 0
              ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{`${offers.length} places to stay in ${activeCity.title}`}</b>
                  <SortList onSortByType={onSortByType}/>
                  <CardPlaceList offers={offers} classNames={classNamesByPage} handlePointerOver={handlePointerOver} handlePointerLeave={handlePointerLeave} handleFavoriteClick={handleFavoriteClick}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map offers={offers} city={activeCity} activeOffer={activeCard}/>
                  </section>
                </div>
              </div>
              : <MainEmpty/>}
          </div>
          <ErrorModal modalErrorText={errorText} onCloseModal={closeErrorModal}/>
        </main>
      </div>
    </>
  );
}
export default mainConnector(Main);
export { Main };
