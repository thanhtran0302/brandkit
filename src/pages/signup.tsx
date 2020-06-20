import React from 'react';
import SignUp from '../components/signup/SignUp';
import PageMeta from '../components/pageMeta/PageMeta';
import { useTranslation } from 'react-i18next';

const SignUpPage = () => {
  const { t } = useTranslation();

  return (
    <PageMeta title={t('signUp')}>
      <SignUp />
    </PageMeta>
  );
};

export default SignUpPage;
