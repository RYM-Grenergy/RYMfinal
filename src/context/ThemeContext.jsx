import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const getStoredTheme = () => {
  try {
    return localStorage.getItem('theme-mode');
  } catch {
    return null;
  }
};

const getSystemThemePreference = () => {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    return true;
  }
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = getStoredTheme();
    if (saved) {
      return saved === 'dark';
    }
    return getSystemThemePreference();
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    } catch {
      // Ignore environments that do not expose a document.
    }

    try {
      localStorage.setItem('theme-mode', isDark ? 'dark' : 'light');
    } catch {
      // Ignore storage failures and keep the current session theme.
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
