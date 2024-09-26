/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const Modal = ({ onClose, isActive, style, children }) => {
  return (
    <div
      css={(theme) => css`
        display: ${isActive ? 'flex' : 'none'};
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: ${`${theme.colors.black}78`};
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
            overflow-x: hidden;
            overflow-y: auto;
            cursor: default;
            max-height: 85%;
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
