'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Load saved language from localStorage on initial render
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('vrcm-language');
      if (savedLanguage && ['en', 'fr', 'es'].includes(savedLanguage)) {
        return savedLanguage;
      }
    }
    return 'en';
  });

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('vrcm-language', newLanguage);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
