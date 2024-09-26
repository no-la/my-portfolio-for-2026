/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const SectionHeader = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        margin-bottom: 40px;
      `}
    >
      <h1
        css={(theme) => css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          padding: 10px 0px 10px 30px;
          width: 80%;
          /* border-bottom: 4px solid ${theme.colors
            .tertiary}; */
        `}
      >
        {children}
      </h1>
      <div
        css={(theme) => css`
          background-color: ${theme.colors.tertiary};
          width: 16px;
          height: inherit;
        `}
      ></div>
    </div>
  );
};

export default SectionHeader;
