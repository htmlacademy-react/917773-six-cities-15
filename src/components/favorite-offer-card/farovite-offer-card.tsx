import { JSX } from 'react';
<<<<<<< HEAD
import Currency from '../../shared/Currency';
import OfferTypes from '../../shared/OfferTypes';

type FavoriteOfferCardProps = {
  price: number;
  currencyType: Currency;
=======
import { CurrencyTypes } from '../../shared/CurrencyTypes';
import { OfferTypes } from '../../shared/OfferTypes';

type FavoriteOfferCardProps = {
  price: number;
  currencyType: CurrencyTypes;
>>>>>>> e75c7364109fc6a7defdb0052c79c2a5ed7f6e8c
  title: string;
  offerType: OfferTypes;
  ratingPercent: number;
  imageName: string;
  isPremium?: boolean;
};

function FavoriteOfferCard({
  price,
  currencyType,
  title,
  offerType,
  ratingPercent,
  imageName,
  isPremium,
}: FavoriteOfferCardProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={`img/${imageName}`}
            width={150}
            height={110}
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              {`${currencyType}${price} `}{' '}
            </b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={
              'place-card__bookmark-button button place-card__bookmark-button--active'
            }
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingPercent}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{offerType}</p>
      </div>
    </article>
  );
}

export default FavoriteOfferCard;