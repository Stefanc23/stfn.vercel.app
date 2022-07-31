import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { ReactBricks } from 'react-bricks/frontend';
import type { AppProps } from 'next/app';
import config from '../react-bricks/config';

import '../css/styles.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Color Mode Management
  const savedColorMode =
    typeof window === 'undefined' ? '' : localStorage.getItem('color-mode');
  const [colorMode, setColorMode] = useState(savedColorMode || 'light');
  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light';
    setColorMode(newColorMode);
    localStorage.setItem('color-mode', newColorMode);
  };

  const reactBricksConfig = {
    ...config,
    isDarkColorMode: colorMode === 'dark',
    toggleColorMode,
    contentClassName: `antialiased font-content ${colorMode} ${
      colorMode === 'dark' ? 'bg-dark' : 'bg-white'
    }`,
  };

  return (
    <ReactBricks {...reactBricksConfig}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ReactBricks>
  );
};

export default MyApp;
