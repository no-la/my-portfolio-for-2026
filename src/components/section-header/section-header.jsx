/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const SectionHeader = ({ children }) => {
  return (
    <h1
      css={(theme) => css`
        /* background-color: ${theme.colors.primary}; */
        padding: 10px 0px 5px 30px;
        border-bottom: 2px dashed #c9c9c9;
      `}
    >
      {children}
    </h1>
  );
};

export default SectionHeader;
