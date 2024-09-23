/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const simpleButtonStyle = css`
  background: none;
`;

const SimpleButton = ({ children, style, onClick }) => {
  return (
    <button
      css={[simpleButtonStyle, style]}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SimpleButton;
