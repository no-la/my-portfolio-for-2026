/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import MyHeader from './my-header/my-header';
import MyProfile from './my-profile/my-profile';
import MySkills from './my-skills/my-skills';
import MyProjects from './my-projects/my-projects';

const App = () => {
  return (
    <>
      <MyHeader />
      <MyProfile />
      <MySkills />
      <MyProjects />
    </>
  );
};

export default App;
