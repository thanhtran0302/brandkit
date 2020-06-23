import React from 'react';
import PageMeta from '../components/pageMeta/PageMeta';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import LogIn from '../components/credentialWrapper/logIn/LogIn';

const SignUpPage = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <PageMeta title={t('logIn')}>
      <LogIn />
    </PageMeta>
  );
};

export default SignUpPage;
