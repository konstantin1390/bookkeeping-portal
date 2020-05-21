import 'babel-polyfill';
import 'beautiful-react-redux/patch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Cookie from 'js-cookie';
import createRouterStore from '../roots/storeCreator';
import history from '../common/helpers/history';
import { getBrowserLocale, loadLanguage } from './translations';
import config from './config/config';
import AppModule from './modules/appModule/AppModule.jsx';
import { setUsedLocaleStore } from './modules/appModule/actions';
import { getUsedLocale } from './modules/appModule/selectors';

export const setFavIcon = src => {
  if (!src) {
    return false;
  }

  const favicon = document.createElement('link');

  favicon.rel = 'icon';
  favicon.href = src;
  document.head.appendChild(favicon);
};

const store = createRouterStore('/', history);

const renderRouter = async Component => {
  const state = store.getState();
  let activeLocale = getUsedLocale(state);

  if (!activeLocale) {
    activeLocale = Cookie.get('language') || getBrowserLocale() || 'en-US';
  }

  const lang = await loadLanguage(activeLocale);

  store.dispatch(setUsedLocaleStore(lang));

  render(
    <Provider store={store}>
      <Component history={history} />
    </Provider>,
    document.getElementById('root'),
  );
};

document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOMContentLoaded');
  await renderRouter(AppModule);
  document.title = config.title;
  setFavIcon(config.favIcon);
});
