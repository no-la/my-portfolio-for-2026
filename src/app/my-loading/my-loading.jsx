/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const wrapStyle = (theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  background-color: ${theme.colors.primary};

  /* for not scroll background */
  overscroll-behavior: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const displayStyle = (theme) => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.colors.white};
  font-size: 30px;
  text-align: center;
`;

const MyLoading = () => {
  return (
    <div
      css={wrapStyle}
      onClick={(e) => e.stopPropagation()}
      onScroll={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <h1 css={displayStyle}>Loading...</h1>
      <div
        css={css`
          height: calc(100vh + 1px);
          width: 1px;
          background-color: transparent;
        `}
      ></div>
    </div>
  );
};

export default MyLoading;
