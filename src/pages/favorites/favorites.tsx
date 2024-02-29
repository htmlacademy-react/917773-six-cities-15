import { JSX } from 'react';
<<<<<<< HEAD
import Currency from '../../shared/Currency';
import OfferTypes from '../../shared/OfferTypes';
import FavoriteOfferCard from '../../components/favorite-offer-card/farovite-offer-card';
import { Helmet } from 'react-helmet-async';

function Favorites(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Saved listing</title>
      </Helmet>
=======
import { CurrencyTypes } from '../../shared/CurrencyTypes';
import { OfferTypes } from '../../shared/OfferTypes';
import FavoriteOfferCard from '../../components/favorite-offer-card/farovite-offer-card';

function Favorites(): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
>>>>>>> e75c7364109fc6a7defdb0052c79c2a5ed7f6e8c
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoriteOfferCard
                    price={180}
<<<<<<< HEAD
                    currencyType={Currency.EU}
=======
                    currencyType={CurrencyTypes.Euro}
>>>>>>> e75c7364109fc6a7defdb0052c79c2a5ed7f6e8c
                    isPremium
                    title={'Nice, cozy, warm big bed apartment'}
                    offerType={OfferTypes.Apartment}
                    ratingPercent={100}
                    imageName="apartment-small-03.jpg"
                  />
                  <FavoriteOfferCard
                    price={80}
<<<<<<< HEAD
                    currencyType={Currency.EU}
=======
                    currencyType={CurrencyTypes.Euro}
>>>>>>> e75c7364109fc6a7defdb0052c79c2a5ed7f6e8c
                    title={'Wood and stone place'}
                    offerType={OfferTypes.Room}
                    ratingPercent={80}
                    imageName="room-small.jpg"
                  />
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoriteOfferCard
                    price={180}
<<<<<<< HEAD
                    currencyType={Currency.EU}
=======
                    currencyType={CurrencyTypes.Euro}
>>>>>>> e75c7364109fc6a7defdb0052c79c2a5ed7f6e8c
                    title={'White castle'}
                    offerType={OfferTypes.Apartment}
                    ratingPercent={100}
                    imageName="apartment-small-04.jpg"
                  />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
<<<<<<< HEAD
      </>
=======
    </div>
>>>>>>> e75c7364109fc6a7defdb0052c79c2a5ed7f6e8c
  );
}

export default Favorites;
