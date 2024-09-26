/** @jsxImportSource @emotion/react */
import {
  css,
  useTheme,
  ThemeProvider,
  Global,
} from '@emotion/react';
import { useState } from 'react';
import MyHeader from './my-header/my-header';
import MyProfile from './my-profile/my-profile';
import MySkills from './my-skills/my-skills';
import MyProjects from './my-projects/my-projects';
import MyOthers from './my-others/my-others';
import MyFooter from './my-footer/my-footer';
import MyHeroImage from './my-hero-image/my-hero-image';

const colors0 = {
  primary: '#baece2',
  secondary: '#f2c5a5',
  tertiary: '#f2c5a5',
  background: '#fafcfa',
  text: '#2a2a2a',
};
const colors1 = {
  primary: '#56A6A7',
  secondary: '#5CC2D9',
  tertiary: '#F3A922',
  background: '#E4F2F2',
  text: '#192626',
  h1: '#1a787a',
};
const theme = {
  colors: {
    ...colors1,
  },
  fontSizes: {
    small: '14px',
    normal: '16px',
    medium: '18px',
    large: '20px',
  },
};

const globalStyles = (theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap');
  /* reset */
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    border: none;
  }

  :root {
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-size: ${theme.fontSizes.normal};
    color: ${theme.colors.text};
  }

  #root {
    background-color: ${theme.colors.background};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-feature-settings: 'palt';
    letter-spacing: 0.05em;
  }

  h1 {
    font-size: 2em;
    color: ${theme.colors.h1};
  }
  h2 {
    font-size: 1.2em;
  }
  button {
    font-size: ${theme.fontSizes.normal};
  }
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <MyHeader />
        <MyHeroImage />
        <MyProfile />
        <MySkills />
        <MyProjects />
        <MyOthers />
        <MyFooter />
      </ThemeProvider>
    </>
  );
};

export default App;
