import { Link } from 'react-router-dom';
import { FC } from 'react';
import { AppRoute } from '../../app';
import { Helmet } from 'react-helmet-async';
import { APP_TITLE } from '../../const';


export const NotFound: FC = () => (
  <section>
    <Helmet>
      <title>{APP_TITLE}: Address not found</title>
    </Helmet>

    <section style={{ textAlign: 'center' }}>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Root}>Вернуться на главную</Link>
    </section>
  </section>
);
