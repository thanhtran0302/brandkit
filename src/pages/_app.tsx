import '../i18n';

import App, { AppProps } from 'next/app';
import { Fragment } from 'react';

import MainLayout from '../components/app/layout/MainLayout';
import NavBar from '../components/app/navBar/NavBar';

export class CustomApp extends App<AppProps> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <NavBar />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Fragment>
    );
  }
}

export default CustomApp;
