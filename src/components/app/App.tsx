import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';

const App: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <div>
      <a href="/signup">{t('signUp')}</a>
      <br />
      <a href="/login">{t('logIn')}</a>
    </div>
  );
};

export default App;
