/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const modalHeaderStyle = (theme) => css`
  border-bottom: 4px dotted ${theme.colors.secondary};
  padding: 8px;
  margin: 0 24px;
  text-align: center;
`;

const ModalHeader = ({ children }) => {
  return <h1 css={modalHeaderStyle}>{children}</h1>;
};

export default ModalHeader;
