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
import MyConcept from './my-concept/my-concept';

const theme = {
  colors: {
    primary: '#56A6A7',
    secondary: '#5CC2D9',
    tertiary: '#F3A922',
    background: '#E4F2F2',
    black: '#192626',
    white: '#ffffff',
    h1: '#1a787a',
  },
  fontSizes: {
    small: '14px',
    normal: '16px',
    medium: '18px',
    large: '20px',
  },
  fontWeight: {
    normal: '400',
    bold: '700',
  },
  var: {
    headerHeight: '50px',
    sectionPadding: '130px 70px',
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
    color: ${theme.colors.black};
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

    @media (max-width: 800px) {
      font-size: 1.2em;
    }
  }
  h2 {
    font-size: 1.2em;
  }
  button {
    font-size: ${theme.fontSizes.normal};
  }
  button:hover {
    background-color: ${theme.colors.primary};
    cursor: pointer;
  }
  section {
    /* margin-bottom: 60px; */
  }
  p {
    margin-bottom: ${theme.fontSizes.normal};
    max-width: calc(${theme.fontSizes.normal} * 40);
  }

  /* for scrollbar */
  ::-webkit-scrollbar {
    height: 16px;
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.secondary};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.background};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-corner {
    /* display: block; */
  }
  /* ---------- */
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <MyHeader />
        <MyHeroImage />
        <MyConcept />
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
