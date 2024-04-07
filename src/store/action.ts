import { createAction } from '@reduxjs/toolkit';
import {
  AuthorizationStatus,
  TCity,
  TReviewFull,
  TOffer,
  TOfferFull,
  TUserData,
  OfferSortType,
} from '../const';
import { AppRoute } from '../app';

export const changeCity = createAction<{ city: TCity }>('cities/changeCity');
export const fillOffers = createAction<{ offers: TOffer[] }>(
  'cities/fillOffers'
);
export const loadOffers = createAction<TOffer[]>('data/loadOffers');
export const loadOffer = createAction<TOfferFull | null>('data/loadOffer');
export const loadNearOffers = createAction<TOffer[]>('data/loadNearOffers');
export const loadFavorites = createAction<TOffer[]>('data/loadFavorites');
export const setOffersDataLoadingStatus = createAction<boolean>(
  'data/setOffersDataLoadingStatus'
);
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const redirectToRoute = createAction<AppRoute>('cities/redirectToRoute');
export const saveUser = createAction<TUserData | null>('cities/saveUser');
export const setOfferDataLoadingStatus = createAction<boolean>(
  'data/setOfferDataLoadingStatus'
);
export const loadReviews = createAction<TReviewFull[]>('data/loadReviews');
export const addReview = createAction<TReviewFull>('data/addComment');
export const setFavoritesOff = createAction('data/setFavoritesOff');
export const setOfferSortType = createAction<OfferSortType>(
  'city/setOfferSortType'
);
export const setFavoriteOffer = createAction<TOffer>('data/setFavoriteOffer');
export const setFavoriteInOffers = createAction<TOffer>(
  'data/setFavoriteInOffers'
);
export const setFavoriteInNearOffers = createAction<TOffer>(
  'data/setFavoriteInNearOffers'
);
export const addFavorite = createAction<TOffer>('data/addFavorite');
export const delFavorite = createAction<TOffer>('data/delFavorite');


