/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import MyHeader from './my-header/my-header';
import MyProfile from './my-profile/my-profile';
import MySkills from './my-skills/my-skills';
import MyProjects from './my-projects/my-projects';
import MyOthers from './my-others/my-others';
import MyFooter from './my-footer/my-footer';

const App = () => {
  return (
    <>
      <MyHeader />
      <MyProfile />
      <MySkills />
      <MyProjects />
      <MyOthers />
      <MyFooter />
    </>
  );
};

export default App;
