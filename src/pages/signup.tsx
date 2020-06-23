import React, { FC } from 'react';
import SignUp from '../components/credentialWrapper/signup/SignUp';
import PageMeta from '../components/pageMeta/PageMeta';
import { useTranslation, UseTranslationResponse } from 'react-i18next';

const SignUpPage: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <PageMeta title={t('signUp')}>
      <SignUp />
    </PageMeta>
  );
};

export default SignUpPage;
