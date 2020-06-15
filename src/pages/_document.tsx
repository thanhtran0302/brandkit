import Document, {
  DocumentContext,
  DocumentProps,
  Head,
  Main,
  NextScript
} from 'next/document';
import React, { Fragment, ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

import { GlobalStyle } from '../utils/styles';

interface OwnProps {
  styleTags: ReactElement<{}>[];
}

type Props = OwnProps & DocumentProps;

export default class CustomDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(
              <Fragment>
                <GlobalStyle />
                <App {...props} />
              </Fragment>
            )
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { styleTags } = this.props;

    return (
      <html lang="fr">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="icon" href={`/static/favicon.ico`} />
          <link
            rel="preload"
            href={`/static/fonts/Quicksand-Regular.woff`}
            as="font"
            crossOrigin={'anonymous'}
          />
          <link
            rel="preload"
            href={`/static/fonts/Quicksand-Bold.woff`}
            as="font"
            crossOrigin={'anonymous'}
          />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
