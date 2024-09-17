/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import MyHeader from './my-header/my-header';
import MyProfile from './my-profile/my-profile';

const App = () => {
  return (
    <>
      <MyHeader />
      <MyProfile />
    </>
  );
};

export default App;
