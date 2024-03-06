import { Link } from 'react-router-dom';
import { FC } from 'react';
import { AppRoute } from '../../app';
import { Helmet } from 'react-helmet-async';

export const NotFound: FC = () => (
  <section>
    <Helmet>
      <title>Страница не найдена</title>
    </Helmet>

    <section>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Root}>Вернуться на главную</Link>
    </section>
  </section>
);
