'use client';
import { ThemeProvider } from 'next-themes';
import React from 'react';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
