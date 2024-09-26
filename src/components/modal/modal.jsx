/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const Modal = ({ onClose, isActive, style, children }) => {
  return (
    <div
      css={css`
        display: ${isActive ? 'flex' : 'none'};
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgb(0 0 0/0.3);
        align-items: center;
        justify-content: center;
        :hover {
          cursor: pointer;
        }
      `}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        css={[
          (theme) => css`
            background-color: ${theme.colors.white};
            border-radius: 10px;
            overflow: hidden;
            cursor: default;
          `,
          style,
        ]}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
