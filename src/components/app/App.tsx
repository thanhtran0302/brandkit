import React from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('greeting')}
      <a href="/signup">Sign up</a>
    </div>
  );
};

export default App;
