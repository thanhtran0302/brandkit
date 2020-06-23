import Head from 'next/head';
import { useRouter, NextRouter } from 'next/router';
import React, { FC, Fragment } from 'react';
import { SITE_URL } from '../../constants/global';

export interface OwnProps {
  canonical?: string;
  description?: string;
  meta?: JSX.Element;
  title?: string;
  isNotIndexable?: boolean;
}

const PageMeta: FC<OwnProps> = ({
  canonical,
  description,
  meta,
  title,
  isNotIndexable,
  children
}) => {
  const router: NextRouter = useRouter();
  const canonicalUrl: string = canonical
    ? canonical
    : router && `${SITE_URL}${router.route}`;
  return (
    <Fragment>
      <Head>
        {description && <meta name="description" content={description} />}
        {title && <title>{title}</title>}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        {isNotIndexable && <meta name="robots" content="noindex, nofollow" />}
        {meta && <Fragment>{meta}</Fragment>}
      </Head>
      <Fragment>{children}</Fragment>
    </Fragment>
  );
};

export default PageMeta;
