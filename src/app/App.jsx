/** @jsxImportSource @emotion/react */
import {
  css,
  useTheme,
  ThemeProvider,
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
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
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
