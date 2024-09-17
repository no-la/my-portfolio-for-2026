/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import MyHeader from './my-header/my-header';
import MyProfile from './my-profile/my-profile';
import MySkills from './my-skills/my-skills';

const App = () => {
  return (
    <>
      <MyHeader />
      <MyProfile />
      <MySkills />
    </>
  );
};

export default App;
