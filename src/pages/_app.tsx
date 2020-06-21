import '../i18n';

import App, { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';

export class CustomApp extends App<AppProps> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }
}

export default CustomApp;
