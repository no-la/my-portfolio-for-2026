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

const theme = {
  colors: {
    primary: '#baece2',
    secondary: '#f2c5a5',
    background: '#f5fff5',
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

    background-color: #fff;
  }

  #root {
    background-color: rgb(237, 242, 243);
  }

  * {
    border: 1px solid gray;
  }

  /* reset */
  * {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <MyHeader />
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
