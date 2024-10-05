/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const SectionHeader = ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr auto;
        margin-right: 8%;
      `}
    >
      <h1
        css={(theme) => css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          padding: 10px 0px 10px 30px;
          /* border-bottom: 4px solid ${theme.colors
            .tertiary}; */
        `}
      >
        {children}
      </h1>
      <div
        css={(theme) => css`
          position: relative;
          left: -1px;
          background-image: url('images/section-header-decoration.png');
          height: inherit;
          width: 147px;
        `}
      ></div>
    </div>
  );
};

export default SectionHeader;
