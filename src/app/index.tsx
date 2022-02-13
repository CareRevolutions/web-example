/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { Countries } from './containers/Countries';
import { CountryID } from './containers/CountryID';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - CareRev Sample App"
        defaultTitle="CareRev Sample App"
        htmlAttributes={{ lang: i18n.language }}
      ></Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/countries'}
          component={Countries}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/country/:id'}
          component={CountryID}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
