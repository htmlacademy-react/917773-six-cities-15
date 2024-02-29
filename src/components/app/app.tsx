import { JSX } from 'react';
import Main from '../../pages/main/main';
<<<<<<< HEAD
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoute from '../../shared/AppRoute';
import Login from '../../pages/login/login';
import PrivateRoute from '../private-route/private-route';
import AuthorizationStatus from '../../shared/AuthorizationStatus';
import Offer from '../../pages/offer/offer';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import Layout from '../layout/layout';
=======
>>>>>>> e75c7364109fc6a7defdb0052c79c2a5ed7f6e8c

type AppProps = {
  offerCount: number;
};

function App({ offerCount }: AppProps): JSX.Element {
<<<<<<< HEAD
  const authorizationStatus: AuthorizationStatus = AuthorizationStatus.Auth;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <Layout authorizationStatus={AuthorizationStatus.NoAuth} />
            }
          >
            <Route index element={<Main offerCount={offerCount} />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Offer} element={<Offer />} />
            <Route path={AppRoute.Login} element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
=======
  return <Main offerCount={offerCount} />;
>>>>>>> e75c7364109fc6a7defdb0052c79c2a5ed7f6e8c
}

export default App;
