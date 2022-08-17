import Router from 'next/router';
import { types } from 'react-bricks/frontend';

import bricks from './bricks';
import pageTypes from './pageTypes';
import NextLink from './NextLink';

const hour = new Date().getHours();
const welcomeTypes = ['Good Morning', 'Good Afternoon', 'Good Evening'];
const name = 'Stefano';
let welcomeText = '';
if (hour < 12) welcomeText = `${welcomeTypes[0]} ${name}!`;
else if (hour < 18) welcomeText = `${welcomeTypes[1]} ${name}!`;
else welcomeText = `${welcomeTypes[2]} ${name}!`;

const config: types.ReactBricksConfig = {
  appId: process.env.NEXT_PUBLIC_APP_ID,
  apiKey: process.env.API_KEY,
  pageTypes,
  bricks,
  logo: '/logo.webp',
  loginUI: {
    sideImage:
      'https://i.pinimg.com/564x/0c/62/c1/0c62c14c39f8ab91e1874d4c3fb859e0.jpg',
    logo: '/logo.webp',
    logoWidth: 69,
    logoHeight: 69,
    welcomeText: welcomeText,
    welcomeTextStyle: {
      marginTop: '1.5rem',
      fontSize: '1.5rem',
      fontWeight: 200,
    },
  },
  previewPath: '/preview',
  // contentClassName: 'content', // Defined dynamically
  // isDarkColorMode: ...,        // in _app.tsx
  // toggleColorMode: ...,        // to manage Dark Mode
  renderLocalLink: NextLink,
  navigate: (path: string) => Router.push(path),
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  useCssInJs: false,
  appRootElement: '#__next',
  clickToEditSide: types.ClickToEditSide.BottomRight,
  customFields: [],
  //responsiveBreakpoints: [{ type: types.DeviceType.Phone, width: 480, label: 'Smartphone'}],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enablePreview: true,
};

export default config;
