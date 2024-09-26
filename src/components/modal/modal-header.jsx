/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const modalHeaderStyle = (theme) => css`
  background-color: ${theme.colors.tertiary};
  color: ${theme.colors.white};
  padding: 4px 12px;
`;

const ModalHeader = ({ children }) => {
  return <h1 css={modalHeaderStyle}>{children}</h1>;
};

export default ModalHeader;
