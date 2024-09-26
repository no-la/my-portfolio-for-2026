/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const CardHeader = ({ children }) => {
  return (
    <h2
      css={(theme) => css`
        border-bottom: 2px dotted ${theme.colors.secondary};
        text-align: 'center';
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 8px;
      `}
    >
      {children}
    </h2>
  );
};

export default CardHeader;
