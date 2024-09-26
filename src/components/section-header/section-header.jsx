/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const SectionHeader = ({ children }) => {
  return (
    <h1
      css={(theme) => css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        padding: 10px 0px 5px 30px;
        /* border-bottom: 4px solid ${theme.colors
          .tertiary}; */
      `}
    >
      {children}
    </h1>
  );
};

export default SectionHeader;
