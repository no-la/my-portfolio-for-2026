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

const theme = {
  colors: {
    primary: '#baece2',
    secondary: '#f2c5a5',
    tertiary: '#f2c5a5',
    background: '#fafcfa',
    text: '#2a2a2a',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '20px',
  },
};

const globalStyles = (theme) => css`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial,
      sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-size: ${theme.fontSizes.medium};
  }

  #root {
    background-color: ${theme.colors.background};
  }

  * {
    border: 1px solid gray;
  }

  /* reset */
  * {
    margin: 0;
    padding: 0;
    list-style: none;
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
