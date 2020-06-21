import React from 'react';
import PageMeta from '../components/pageMeta/PageMeta';
import { useTranslation } from 'react-i18next';
import LogIn from '../components/credentialWrapper/logIn/LogIn';
import colors from '../constants/colors';

const SignUpPage = () => {
  const { t } = useTranslation();

  return (
    <PageMeta title={t('logIn')}>
      <LogIn />
    </PageMeta>
  );
};

export default SignUpPage;
