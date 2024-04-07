import { FC } from 'react';
import { TOfferFull } from '../../const';
import { ButtonFavorite } from '../button-favorite';
import { OfferUser } from '../offer-user';
import { ReviewList } from '../review-list';
import { useAppSelector } from '../../hooks';
import { getReviews } from '../../store/selectors';
import { ReviewCreateCard } from '../review-create-card';
import { Rating } from '../rating';

export type TOfferInfoProps = {
  offer: TOfferFull;
  isAuth: boolean;
};

export const OfferInfo: FC<TOfferInfoProps> = ({ offer, isAuth }) => {
  const reviews = useAppSelector(getReviews);

  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {offer.isPremium && (
          <div className="offer__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">{offer.title}</h1>
          <ButtonFavorite
            offer={offer}
            typeCard="offer"
            width={31}
            height={33}
            isAuth={isAuth}
          />
        </div>
        <Rating objectType={'offer'} rating={offer.rating} />
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">Apartment</li>
          <li className="offer__feature offer__feature--bedrooms">
            {`${offer.bedrooms} ${offer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`}
          </li>
          <li className="offer__feature offer__feature--adults">
            {`Max ${offer.maxAdults} ${
              offer.maxAdults > 1 ? 'adults' : 'adult'
            }`}
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">€{offer.price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>
        <div className="offer__inside">
          <h2 className="offer__inside-title">What&apos;s inside</h2>
          <ul className="offer__inside-list">
            {offer.goods.map((good) => (
              <li className="offer__inside-item" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </div>
        <div className="offer__host">
          <h2 className="offer__host-title">Meet the host</h2>
          <OfferUser user={offer.host} />
        </div>
        <ReviewList reviews={reviews} />
        {isAuth && <ReviewCreateCard />}
      </div>
    </div>
  );
};
