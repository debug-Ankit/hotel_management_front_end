/**
 * @name Hotel Room Booking System
 * @author Ankit
 * @description Hotel Room Booking and Management System Software ~ Developed By Ankit
 * @copyright ©2023 ― Ankit. All rights reserved.
 * @version v0.0.1
 *
 */

import { ConfigProvider } from 'antd';
import { DefaultSeo } from 'next-seo';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SEO from '../next-seo.config';
import { persistor, store } from '../store';

import 'antd/dist/reset.css';
import '../styles/global.css';

function LoadApp({ Component, pageProps }) {
  const { theme } = useSelector((state) => state.app);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ConfigProvider theme={{ token: theme }}>
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoadApp Component={Component} pageProps={pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
