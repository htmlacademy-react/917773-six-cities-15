import { JSX } from 'react';
<<<<<<< HEAD
import Currency from '../../shared/Currency';
import OfferTypes from '../../shared/OfferTypes';
import CityOfferCard from '../../components/offer-card/offer-card';
import { Helmet } from 'react-helmet-async';
=======
import { CurrencyTypes } from '../../shared/CurrencyTypes';
import { OfferTypes } from '../../shared/OfferTypes';
import CityOfferCard from '../../components/offer-card/offer-card';
>>>>>>> e75c7364109fc6a7defdb0052c79c2a5ed7f6e8c

type MainProps = {
  offerCount: number;
};

function Main({ offerCount }: MainProps): JSX.Element {
  return (
<<<<<<< HEAD
    <main className='page__main page__main--index'>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <ul className='locations__list tabs__list'>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item' href='#'>
                <span>Paris</span>
              </a>
              </li>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item' href='#'>
                <span>Cologne</span>
              </a>
            </li>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item' href='#'>
                <span>Brussels</span>
              </a>
            </li>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item tabs__item--active'>
                <span>Amsterdam</span>
              </a>
            </li>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item' href='#'>
                <span>Hamburg</span>
              </a>
            </li>
            <li className='locations__item'>
              <a className='locations__item-link tabs__item' href='#'>
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className='cities'>
        <div className='cities__places-container container'>
          <section className='cities__places places'>
            <h2 className='visually-hidden'>Places</h2>
            <b className='places__found'>{offerCount} places to stay in Amsterdam</b>
            <form className='places__sorting' action='#' method='get'>
              <span className='places__sorting-caption'>Sort by</span>
              <span className='places__sorting-type' tabIndex={0}>
                Popular
                <svg className='places__sorting-arrow' width={7} height={4}>
                  <use xlinkHref='#icon-arrow-select' />
                </svg>
              </span>
              <ul className='places__options places__options--custom places__options--opened'>
                <li
                  className='places__option places__option--active'
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className='places__option' tabIndex={0}>
                  Price: low to high
                </li>
                <li className='places__option' tabIndex={0}>
                  Price: high to low
                </li>
                <li className='places__option' tabIndex={0}>
                  Top rated first
                </li>
              </ul>
              </form>
            <div className='cities__places-list places__list tabs__content'>
              <CityOfferCard
                price={120}
                currencyType={Currency.EU}
                isPremium
                title={'Beautiful & luxurious apartment at great location'}
                offerType={OfferTypes.Apartment}
                ratingPercent={80}
                imageName="apartment-01.jpg"
              />
              <CityOfferCard
                price={80}
                currencyType={Currency.EU}
                title={'Wood and stone place'}
                offerType={OfferTypes.Room}
                isBookmark
                imageName="room.jpg"
                ratingPercent={80}
              />
              <CityOfferCard
                price={132}
                currencyType={Currency.EU}
                title={'Canal View Prinsengracht'}
                offerType={OfferTypes.Apartment}
                imageName="apartment-02.jpg"
                ratingPercent={80}
              />
              <CityOfferCard
                price={180}
                currencyType={Currency.EU}
                isPremium
                title={'Nice, cozy, warm big bed apartment'}
                offerType={OfferTypes.Apartment}
                imageName="apartment-03.jpg"
                ratingPercent={100}
              />
              <CityOfferCard
                price={80}
                currencyType={Currency.EU}
                isBookmark
                title={'Wood and stone place'}
                offerType={OfferTypes.Room}
                imageName="room.jpg"
                ratingPercent={80}
              />
            </div>
          </section>
          <div className='cities__right-section'>
            <section className='cities__map map' />
          </div>
        </div>
        </div>
    </main>
=======
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offerCount} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CityOfferCard
                  price={120}
                  currencyType={CurrencyTypes.Euro}
                  isPremium
                  title={'Beautiful & luxurious apartment at great location'}
                  offerType={OfferTypes.Apartment}
                  ratingPercent={80}
                  imageName="apartment-01.jpg"
                />
                <CityOfferCard
                  price={80}
                  currencyType={CurrencyTypes.Euro}
                  title={'Wood and stone place'}
                  offerType={OfferTypes.Room}
                  isBookmark
                  imageName="room.jpg"
                  ratingPercent={80}
                />
                <CityOfferCard
                  price={132}
                  currencyType={CurrencyTypes.Euro}
                  title={'Canal View Prinsengracht'}
                  offerType={OfferTypes.Apartment}
                  imageName="apartment-02.jpg"
                  ratingPercent={80}
                />
                <CityOfferCard
                  price={180}
                  currencyType={CurrencyTypes.Euro}
                  isPremium
                  title={'Nice, cozy, warm big bed apartment'}
                  offerType={OfferTypes.Apartment}
                  imageName="apartment-03.jpg"
                  ratingPercent={100}
                />
                <CityOfferCard
                  price={80}
                  currencyType={CurrencyTypes.Euro}
                  isBookmark
                  title={'Wood and stone place'}
                  offerType={OfferTypes.Room}
                  imageName="room.jpg"
                  ratingPercent={80}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
>>>>>>> e75c7364109fc6a7defdb0052c79c2a5ed7f6e8c
  );
}

export default Main;