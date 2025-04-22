// src/component/LanguageToggle.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleLanguage } from '../../redux/language/language.slide'

const LanguageToggle: React.FC = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);

  const handleToggle = () => {
    dispatch(toggleLanguage());
  };

  return (
    <button onClick={handleToggle}>
      {language === 'en' ? '🇬🇧 English' : '🇻🇳 Tiếng Việt'}
    </button>
  );
};

export default LanguageToggle;
