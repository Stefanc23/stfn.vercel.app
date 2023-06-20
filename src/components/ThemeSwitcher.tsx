'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`flex items-center text-primary hover:text-secondary transition-colors text-2xl ${
        !mounted && 'invisible'
      }`}
    >
      {theme === 'dark' && mounted ? (
        <button
          onClick={() => setTheme('light')}
          aria-label="Switch to light mode"
        >
          <MdLightMode />
        </button>
      ) : (
        <button
          onClick={() => setTheme('dark')}
          aria-label="Switch to dark mode"
        >
          <MdDarkMode />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
