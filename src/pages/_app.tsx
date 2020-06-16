import '../i18n';

import App, { AppProps } from 'next/app';
import { Fragment } from 'react';

export class CustomApp extends App<AppProps> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Component {...pageProps} />
      </Fragment>
    );
  }
}

export default CustomApp;
